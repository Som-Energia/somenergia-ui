import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import TableEditor from '.'
import ConfettiExplosion from 'react-confetti-explosion'

export default function Example(params) {
  const { t, i18n } = useTranslation()
  const [isLoading, beLoading] = React.useState(false)
  const [hasDefaultAction, enableDefaultAction] = React.useState(true)
  const [hasSelection, haveSelection] = React.useState(true)
  const [hasItemActions, haveItemActions] = React.useState(true)
  const [hasGlobalActions, haveGlobalActions] = React.useState(true)
  const [pageSizes, setPageSizes] = React.useState('')
  const [rows, setRows] = React.useState([])
  const [log, setLog] = React.useState('')
  const [isConfettiShown, showConfetti] = React.useState(false)

  React.useEffect(() => {
    handleAdd()
    handleAdd()
    handleAdd()
    handleAdd()
    return () => setRows([])
  }, [])

  function handleDeleteMultiple(items) {
    setLog(`Deleting ${items}`)
    setRows((rows) => rows.filter((r) => !items.includes(r.contract_number)))
  }

  function handleAdd() {
    const cities = ['Manlleu', 'Manacor', 'Manresa', 'Tivisa']
    const setups = ['Piscina', 'Pavellò', 'Deixalleria', 'Mercat']
    function randomChoice(array) {
      return array[Math.floor(Math.random() * array.length)]
    }
    setLog(`Adding row`)
    setRows((rows) => [
      ...rows,
      {
        contract_number: `0${Math.floor(Math.random() * 100000) + 1}`,
        installation_name: `${randomChoice(cities)} ${randomChoice(setups)}`,
        power: 1000 * (10 + Math.floor(Math.random() * 100)),
      },
    ])
  }
  function localnumber(n) {
    if (n === undefined) return '-'
    return new Intl.NumberFormat('es', {
      maximumFractionDigits: 1,
      minimumFractionDigits: 1,
      useGrouping: true,
    }).format(n)
  }

  const processedPageSizes =
    pageSizes
      ?.split(',')
      ?.map((x) => parseInt(x))
      ?.filter((x) => !isNaN(x)) || []

  const idField = 'contract_number'
  const columns = [
    {
      id: 'contract_number', // TODO: can we name it contract?
      label: 'Contract number',
      searchable: true,
      numeric: false,
    },
    {
      id: 'installation_name',
      label: 'Plant name',
      searchable: true,
      numeric: false,
    },
    {
      id: 'power',
      label: 'Nominal Power',
      searchable: false,
      numeric: true,
      view: (row) => localnumber(row.power),
    },
  ]
  const defaultAction = (id) => {
    setLog(`Clicked ${id}`)
  }
  const actions = [
    {
      icon: <AddCircleIcon />,
      title: 'Add',
      handler: handleAdd,
    },
    {
      title: 'Celebrate!',
      view: () => (
        <IconButton
          onClick={() => {
            setLog('Celebrate!')
            showConfetti(true)
          }}
        >
          <CelebrationIcon />
        </IconButton>
      ),
    },
  ]
  const selectionActions = [
    {
      icon: <DeleteIcon />,
      title: 'Delete',
      handler: handleDeleteMultiple,
    },
  ]
  const itemActions = [
    {
      title: 'Edit',
      icon: <EditIcon />,
      handler: (row) => setLog(`Editing ${row[idField]}`),
    },
  ]
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gridAutoColumns: '10rem',
        }}
      >
        {[
          [hasDefaultAction, enableDefaultAction, 'Click action', 'On clicking in a row'],
          [
            hasSelection,
            haveSelection,
            'Selection actions',
            'Actions to apply on selections',
          ],
          [
            hasItemActions,
            haveItemActions,
            'Item actions',
            'Actions to apply on each row',
          ],
          [
            hasGlobalActions,
            haveGlobalActions,
            'Global actions',
            'Actions applied globally',
          ],
          [isLoading, beLoading, 'Loading'],
        ].map(([getter, setter, label, description], i) => (
          <FormControlLabel
            key={i}
            control={
              <Switch checked={getter} onChange={(e) => setter(e.target.checked)} />
            }
            label={
              <>
                <b>{label}: </b>
                {description}
              </>
            }
          ></FormControlLabel>
        ))}
        <TextField
          variant="filled"
          label="Page sizes"
          helperText="Comma separated list of sizes"
          value={pageSizes}
          onChange={(ev) => {
            setPageSizes(ev.target.value)
          }}
        />
        <Box>
          <b>Actions Log:</b> {log}
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            justifySelf: 'center',
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          {isConfettiShown && (
            <ConfettiExplosion
              style={{ textAlign: 'center' }}
              zIndex={9000}
              onComplete={() => showConfetti(false)}
            />
          )}
        </Box>
      </Box>
      <TableEditor
        title={'Title'}
        defaultPageSize={12}
        pageSizes={processedPageSizes}
        columns={columns}
        rows={rows}
        actions={hasGlobalActions ? actions : undefined}
        selectionActions={hasSelection ? selectionActions : undefined}
        itemActions={hasItemActions ? itemActions : undefined}
        defaultAction={hasDefaultAction ? defaultAction : undefined}
        idField={idField}
        loading={isLoading}
        noDataPlaceHolder={
          <TableRow>
            <TableCell colSpan={4} sx={{ textAlign: 'center' }}>
              <Typography variant="h4">{'No items found'}</Typography>
            </TableCell>
          </TableRow>
        }
      ></TableEditor>
    </>
  )
}
