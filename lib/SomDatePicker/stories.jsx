import SomDatePicker from '.'
import SomDatePickerExample from './example'

export default {
  title: 'Base Components/SomDatePicker',
  component: SomDatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Example = {
  render: () => <SomDatePickerExample />,
}
