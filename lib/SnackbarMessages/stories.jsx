import SnackbarMessages from './'
import { default as SnackbarMessagesExample } from './example'

export default {
  title: 'Components/SnackbarMessages',
  component: SnackbarMessages,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Exemple = {
  render: () => <SnackbarMessagesExample />,
}
