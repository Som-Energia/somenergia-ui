/// TableEditor: A full featured opinionated table component.

import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import Skeleton from '@mui/material/Skeleton'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Tooltip from '@mui/material/Tooltip'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import { visuallyHidden } from '@mui/utils'
import InputBase from '@mui/material/InputBase'
import CircularProgress from '@mui/material/CircularProgress'
import { styled, alpha } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

/* eslint-enable */

const denseRowHeight = 33

function Loading({ nCols = 3 }) {
  const { t } = useTranslation()
  const nRows = 3
  return (
    <>
      {Array(nRows)
        .fill()
        .map((row) => (
          <TableRow key={row}>
            {Array(nCols)
              .fill()
              .map((v, i) => (
                <TableCell key={i}>
                  <Skeleton animation="wave" height="2rem" />
                </TableCell>
              ))}
          </TableRow>
        ))}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </div>
    </>
  )
}

function ActionButtons(props) {
  const { actions, context, ...rest } = props
  return (
    <div style={{ display: 'flex', flex: 'row nowrap', justifyContent: 'right' }}>
      {actions.map((action, i) => {
        return (
          <Tooltip title={action.title} key={i}>
            {action.view ? (
              action.view(context)
            ) : (
              <IconButton
                {...rest}
                onClick={(ev) => {
                  ev.stopPropagation()
                  action.handler && action.handler(context)
                }}
              >
                {action.icon}
              </IconButton>
            )}
          </Tooltip>
        )
      })}
    </div>
  )
}
const ActionsType = PropTypes.arrayOf(
  PropTypes.shape({
    /** The tooltip text of the option*/
    title: PropTypes.string.isRequired,
    /** an icon for the action icon button */
    icon: PropTypes.element,
    /** handler: function to be called with the subject as parameter */
    handler: PropTypes.func,
    /** functor receiving the context and returning an alternative for the default icon button */
    view: PropTypes.func,
  }),
)
ActionButtons.propTypes = {
  actions: ActionsType,
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

function descendingComparator(a, b, orderBy) {
  function define(v) {
    return v === undefined ? -1 : v === null ? -1 : v
  }
  const avalue = define(a[orderBy])
  const bvalue = define(b[orderBy])
  if (bvalue < avalue) {
    return -1
  }
  if (bvalue > avalue) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

function EnhancedTableHead({
  columns,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  hasCheckbox,
  hasItemActions,
}) {
  const { t } = useTranslation()
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {hasCheckbox && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': t('TABLE_EDITOR.SELECT_ALL'),
              }}
            />
          </TableCell>
        )}
        {columns.map((column, i) => (
          <TableCell
            key={column.id}
            align={column.numeric ? 'right' : 'left'}
            padding={i == 0 && hasCheckbox ? 'none' : 'normal'}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : 'asc'}
              onClick={createSortHandler(column.id)}
            >
              {column.label}
              {orderBy === column.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc'
                    ? t('TABLE_EDITOR.SORTED_DESCENDING')
                    : t('TABLE_EDITOR.SORTED_ASCENDING')}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {hasItemActions && (
          <TableCell key={'action'} align={'right'} padding={'normal'}>
            {t('TABLE_EDITOR.ACTIONS')}
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  hasCheckbox: PropTypes.bool.isRequired,
}

function EnhancedTableToolbar(props) {
  const { t } = useTranslation()

  const {
    title,
    selected,
    numSelected,
    onSearchEdited,
    search,
    actions,
    selectionActions,
  } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {t('TABLE_EDITOR.N_SELECTED', { numSelected })}
        </Typography>
      ) : (
        <Box sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          {title}
        </Box>
      )}

      <Box variant="h6" id="Filter" component="div">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={t('TABLE_EDITOR.PLACEHOLDER_SEARCH')}
            inputProps={{ 'aria-label': t('TABLE_EDITOR.LABEL_SEARCH') }}
            onChange={onSearchEdited}
            value={search}
          />
        </Search>
      </Box>
      <Box sx={{ flex: '1 1 100%' }}></Box>
      <ActionButtons
        actions={numSelected > 0 && selectionActions ? selectionActions : actions}
        context={selected}
      />
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  search: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.string),
  onSearchEdited: PropTypes.func,
  actions: ActionsType,
  selectionActions: ActionsType,
}

/**
A full featured opinionated table component.

Displays a list of objects in a table by defining the columns structure.
Actions can be defined to be applied to items, to selection or globally.
Filtering and sorting are enabled by default, and you can define paging.

Unlike MUI Table, which provides the elements to build tables,
this one already has all the components inside and just
requires to define the structure and provide the data to adapt to.
*/
function TableEditor(props) {
  const {
    idField = 'id',
    title,
    columns,
    rows,
    defaultPageSize = 10,
    pageSizes = [],
    actions = [],
    defaultAction = undefined,
    itemActions = [],
    selectionActions = [],
    loading = false,
    noDataPlaceHolder = undefined,
  } = props
  const { t } = useTranslation()
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('name')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultPageSize)
  const [search, setSearch] = React.useState('')

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((row) => row[idField])
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (id) => {
    if (defaultAction) return defaultAction(id)
    handleSelect(id)
  }

  const handleSelect = (id) => {
    if (selectionActions.length === 0) {
      return
    }

    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (id) => selected.indexOf(id) !== -1
  // TODO: Reconcile filtering with pagination when we use pagination back
  const isFiltered = (row) => {
    if (!search) return false
    for (const i in columns) {
      const column = columns[i]
      if (!column.searchable) continue
      const fieldContent = row[column.id] + ''
      if (fieldContent.toLowerCase().includes(search.toLowerCase())) return false
    }
    return true
  }

  const nFilteredRows = rows.filter(isFiltered).length
  const nTableColumns =
    columns.length + (itemActions.length ? 1 : 0) + (selectionActions.length ? 1 : 0)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    pageSizes.length === 0
      ? 0
      : page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - rows.length)
      : 0

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          title={title}
          numSelected={selected.length}
          selected={selected}
          search={search}
          onSearchEdited={(ev) => {
            setSearch(ev.target.value)
          }}
          actions={actions}
          selectionActions={selectionActions}
        />
        {pageSizes.length !== 0 && (
          <TablePagination
            rowsPerPageOptions={pageSizes}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
        <TableContainer>
          <Table aria-labelledby="tableTitle" size={'small'} stickyHeader>
            <EnhancedTableHead
              columns={columns}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              hasCheckbox={selectionActions.length !== 0}
              hasItemActions={itemActions.length !== 0}
            />
            <TableBody sx={{ position: 'relative' }}>
              {loading ? (
                <Loading nCols={nTableColumns} />
              ) : rows.length === 0 ? (
                noDataPlaceHolder
              ) : (
                stableSort(rows, getComparator(order, orderBy))
                  .slice(
                    pageSizes.length === 0 ? 0 : page * rowsPerPage,
                    pageSizes.length === 0
                      ? rows.length
                      : page * rowsPerPage + rowsPerPage,
                  )
                  .map((row, index) => {
                    const isItemSelected = isSelected(row[idField])
                    const labelId = `enhanced-table-checkbox-${index}`
                    const isItemFiltered = isFiltered(row)

                    return (
                      <TableRow
                        sx={{
                          '& td': {
                            paddingBlock: isItemFiltered ? 0 : 'inherited',
                            marginBlock: isItemFiltered ? 0 : 'inherited',
                            border: isItemFiltered ? 0 : 'inherited',
                          },
                        }}
                        hover
                        onClick={(event) => handleClick(row[idField])}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row[idField]}
                        selected={isItemSelected}
                        id={labelId}
                      >
                        {selectionActions.length !== 0 && (
                          <TableCell padding="checkbox">
                            <Collapse in={!isItemFiltered}>
                              <Checkbox
                                sx={{ padding: 0 }}
                                color="primary"
                                checked={isItemSelected}
                                onClick={(e) => {
                                  handleSelect(row[idField])
                                  e.stopPropagation()
                                }}
                                inputProps={{
                                  'aria-labelledby': labelId,
                                }}
                              />
                            </Collapse>
                          </TableCell>
                        )}
                        {columns.map((column, i) => {
                          return (
                            <TableCell
                              align={column.numeric ? 'right' : 'left'}
                              key={row[idField] + '_' + column.id}
                              padding={
                                i || selectionActions.length === 0 ? 'normal' : 'none'
                              }
                            >
                              <Collapse in={!isItemFiltered} component={null}>
                                {column.view
                                  ? column.view(row)
                                  : row[column.id] === undefined
                                  ? '-'
                                  : row[column.id] === null
                                  ? '-'
                                  : row[column.id]}
                              </Collapse>
                            </TableCell>
                          )
                        })}
                        {itemActions.length !== 0 && (
                          <TableCell>
                            <Collapse in={!isItemFiltered} component={null}>
                              <ActionButtons
                                size="small"
                                actions={itemActions}
                                context={row}
                              />
                            </Collapse>
                          </TableCell>
                        )}
                      </TableRow>
                    )
                  })
              )}
              {nFilteredRows > 0 && (
                <TableRow>
                  <TableCell colSpan={nTableColumns}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        {t('TABLE_EDITOR.N_ITEMS_FILTERED', { n: nFilteredRows })}
                      </div>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => setSearch('')}
                      >
                        {t('TABLE_EDITOR.CLEAR_FILTER')}
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: denseRowHeight * emptyRows,
                  }}
                >
                  <TableCell colSpan={nTableColumns} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

const ColumnsType = PropTypes.arrayOf(
  PropTypes.shape({
    /** The field to be search in rows */
    id: PropTypes.string.required,
    /** The field label to show on the column header */
    label: PropTypes.string.required,
    /** When truish aligns right instead of left */
    numeric: PropTypes.boolean,
    /** When truish, the field is considered for searches */
    searchable: PropTypes.boolean,
    /** A functor receiving the full row object and returning the cell content.
      By default, stringifies the value of the field refered by `id`,
      unless such value is null or undefined which are turned into '-'. */
    view: PropTypes.Element,
  }),
)

TableEditor.propTypes = {
  /** The title of the table */
  title: PropTypes.string.isRequired,
  /** Data to display. A list of objects with the keys defined in `columns` */
  rows: PropTypes.arrayOf(PropTypes.object),
  /** Column definitions for the table */
  columns: ColumnsType,
  /** List of actions to be applied in global, context is the whole set of rows */
  actions: ActionsType,
  /** List of actions available for each single row, row data is passed the handler. */
  itemActions: ActionsType,
  /** Action to be executed when clicked, row data is passed. If not defined and selection enabled, default action is to select the row. */
  defaultAction: PropTypes.func,
  /** Actions to apply to selected rows. Selection ui is not shown if none provided. The action function receives a list of row identifiers. */
  selectionActions: ActionsType,
  /** Data field to be used as row identifier (default 'id'). Values must be unique. */
  idField: PropTypes.string,
  /** Default page size. Default -1 meaning not paginated */
  defaultPageSize: PropTypes.number,
  /** Array of available page sizes. If provided, a page size chooser will be presented to the user */
  pageSizes: PropTypes.arrayOf(PropTypes.number),
  /** Set to true to activate loading status */
  loading: PropTypes.bool,
  /** Node to show in case of no data is to be presented */
  noDataPlaceHolder: PropTypes.node,
}

export default TableEditor
