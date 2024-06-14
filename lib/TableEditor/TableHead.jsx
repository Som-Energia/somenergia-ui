import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'
import MuiTableHead from '@mui/material/TableHead'
import Checkbox from '@mui/material/Checkbox'
import { useTranslation } from 'react-i18next'

export default function TableHead({
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
    <MuiTableHead>
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
    </MuiTableHead>
  )
}

TableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  hasCheckbox: PropTypes.bool.isRequired,
}

