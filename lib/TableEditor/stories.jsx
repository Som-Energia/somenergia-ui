import AddCircleIcon from '@mui/icons-material/AddCircle'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TableEditor from './'
import { default as TableEditorExample } from './example'

const actions = [
  {
    title: 'Add item',
    icon: <AddCircleIcon />,
  },
]
const itemActions = [
  {
    title: 'Edit item',
    icon: <EditIcon />,
  },
]

const selectionActions = [
  {
    title: 'Delete item',
    icon: <DeleteIcon />,
  },
]

export default {
  title: 'Components/TableEditor',
  component: TableEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    actions: {
      options: ['None', 'Add'],
      mapping: {
        Add: actions,
      },
    },
  },
}

const columns = [
  {
    id: 'contract_number',
    label: 'Contract',
    searchable: true,
  },
  {
    id: 'installation_name',
    label: 'Plant name',
    searchable: true,
  },
  {
    id: 'power',
    label: 'Nominal Power',
    numeric: true,
  },
]

const rows = [
  {
    contract_number: '213213',
    installation_name: 'one installation',
    power: 2000,
  },
  {
    contract_number: '714152',
    installation_name: 'other installation',
    power: 3000,
  },
]

export const Default = {
  args: {
    idField: 'contract_number',
    columns,
    rows,
    actions,
    itemActions,
    selectionActions,
  },
}

export const Exemple = {
  render: () => <TableEditorExample />,
}
