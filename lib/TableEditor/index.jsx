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
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import { visuallyHidden } from '@mui/utils'
import { alpha } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import Loading from './Loading'
import SearchBox from './SearchBox'
import i18n from '../i18n'

/* eslint-enable */

const denseRowHeight = 33

function ActionButtons(props) {
  const { actions, context, ...rest } = props
  return (
    <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'right' }}>
      {actions.map((action, i) => {
        return action.view ? (
          <React.Fragment key={i}>{action.view(context)}</React.Fragment>
        ) : (
          <Tooltip title={action.title} key={i}>
            <IconButton
              {...rest}
              onClick={(ev) => {
                ev.stopPropagation()
                action.handler && action.handler(context)
              }}
            >
              {action.icon}
            </IconButton>
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

const ItemRow = React.memo(
  ({
    row,
    idField,
    selected,
    hidden,
    columns,
    selectable,
    actions,
    handleClick,
    handleSelect,
  }) => {
    console.log('r')
    const id = row[idField]
    const labelId = `enhanced-table-checkbox-${id}`

    const result = (
      <TableRow
        sx={{
          '& td': {
            paddingBlock: hidden ? 0 : undefined,
            marginBlock: hidden ? 0 : undefined,
            border: hidden ? 0 : undefined,
            transition: '1s padding margin border',
          },
        }}
        hover
        onClick={(event) => handleClick(id)}
        role="checkbox"
        aria-checked={selected}
        tabIndex={-1}
        selected={selected}
        id={labelId}
      >
        {selectable && (
          <TableCell padding="checkbox">
            <Collapse in={!hidden}>
              <Checkbox
                sx={{ padding: 0 }}
                color="primary"
                checked={selected}
                onClick={(e) => {
                  handleSelect(id)
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
              key={`${column.id}_${id}`}
              padding={i !== 0 || !selectable ? 'normal' : 'none'}
            >
              <Collapse in={!hidden} component={null}>
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
        {actions.length !== 0 && (
          <TableCell>
            <Collapse in={!hidden} component={null}>
              <ActionButtons size="small" actions={actions} context={row} />
            </Collapse>
          </TableCell>
        )}
      </TableRow>
    )
    return result
  },
)

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

function EnhancedTableToolbar({
  title,
  selected,
  numSelected,
  setSearch,
  search,
  actions,
  selectionActions,
}) {
  const { t } = useTranslation()
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
          {t('TABLE_EDITOR.N_SELECTED', { count: numSelected })}
        </Typography>
      ) : (
        <Box sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          {title}
        </Box>
      )}

      <Box variant="h6" id="Filter" component="div">
        <SearchBox {...{ setSearch, search }} />
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
  setSearch: PropTypes.func,
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
  const handleSelect = React.useCallback((id) => {
    if (selectionActions.length === 0) {
      return
    }
    setSelected((selected) => {
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
      return newSelected
    })
  }, [])

  const handleClick = React.useCallback((id) => {
    if (defaultAction) return defaultAction(id)
    handleSelect(id)
  }, []) // TODO: use useCallback for defaultAction and add it as dependency

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (id) => selected.indexOf(id) !== -1
  // TODO: Reconcile filtering with pagination when we use pagination back
  const isFilteredOut = (row) => {
    if (!search) return false
    for (const i in columns) {
      const column = columns[i]
      if (!column.searchable) continue
      const fieldContent = row[column.id] + ''
      if (fieldContent.toLowerCase().includes(search.toLowerCase())) return false
    }
    return true
  }

  const hiddenIds = React.useMemo(() => {
    return new Set(rows.filter(isFilteredOut).map((row) => row[idField]))
  }, [rows, search])

  const nFilteredRows = hiddenIds.length
  const nTableColumns =
    columns.length + (itemActions.length ? 1 : 0) + (selectionActions.length ? 1 : 0)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    pageSizes.length === 0
      ? 0
      : page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - rows.length)
      : 0
  const sortedRows = React.useMemo(() => {
    if (loading) return []
    if (!rows) return []
    return stableSort(rows, getComparator(order, orderBy)).slice(
      pageSizes.length === 0 ? 0 : page * rowsPerPage,
      pageSizes.length === 0 ? rows.length : page * rowsPerPage + rowsPerPage,
    )
  }, [rows, order, orderBy, pageSizes, rowsPerPage, page])

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          title={title}
          numSelected={selected.length}
          selected={selected}
          search={search}
          setSearch={setSearch}
          actions={actions}
          selectionActions={selectionActions}
        />
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
                noDataPlaceHolder && (
                  <TableRow>
                    <TableCell colSpan={nTableColumns}>{noDataPlaceHolder}</TableCell>
                  </TableRow>
                )
              ) : (
                sortedRows.map((row, index) => {
                  const id = row[idField]
                  return (
                    <ItemRow
                      key={id}
                      idField={idField}
                      row={row}
                      selected={isSelected(id)}
                      hidden={hiddenIds.has(id)}
                      columns={columns}
                      actions={itemActions}
                      selectable={selectionActions.length !== 0}
                      handleSelect={handleSelect}
                      handleClick={handleClick}
                    />
                  )
                })
              )}
              <TableRow
                sx={{
                  '& td': {
                    paddingBlock: nFilteredRows <= 0 ? 0 : undefined,
                    marginBlock: nFilteredRows <= 0 ? 0 : undefined,
                    border: nFilteredRows <= 0 ? 0 : undefined,
                    transition: '1s padding margin all',
                  },
                }}
              >
                <TableCell colSpan={nTableColumns}>
                  <Collapse in={nFilteredRows > 0} component={null}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        {t('TABLE_EDITOR.N_ITEMS_FILTERED', { count: nFilteredRows })}
                      </div>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => setSearch('')}
                      >
                        {t('TABLE_EDITOR.CLEAR_FILTER')}
                      </Button>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
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
      </Paper>
    </Box>
  )
}

const ColumnsType = PropTypes.arrayOf(
  PropTypes.shape({
    /** The field to be search in rows */
    id: PropTypes.string.isRequired,
    /** The field label to show on the column header */
    label: PropTypes.string.isRequired,
    /** When truish aligns right instead of left */
    numeric: PropTypes.bool,
    /** When truish, the field is considered for searches */
    searchable: PropTypes.bool,
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
