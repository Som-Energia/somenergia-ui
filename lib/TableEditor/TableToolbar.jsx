import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { alpha } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import ActionsType from './proptypes'
import ActionButtons from './ActionButtons'
import SearchBox from './SearchBox'

export default function TableToolbar({
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

TableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  search: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.string),
  setSearch: PropTypes.func,
  actions: ActionsType,
  selectionActions: ActionsType,
}

