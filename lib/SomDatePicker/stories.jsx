import SomDatePickerExample from './example'
import dayjs from 'dayjs'

export default {
  title: 'Base Components/SomDatePicker',
  component: SomDatePickerExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    period: {
      control: { type: 'select' },
      options: ['DAILY', 'WEEKLY','MONTHLY', 'YEARLY'],
    },
    currentTime: { type: 'date' },
    toolbarTitle: { type: 'string' },
    prevNextButtons: {
      type: 'boolean'
    },
  }
}


export const YearlyWithoutPrevNextButon = {
  args: {
    period: 'YEARLY',
    styles: {
      datePicker: {
        borderColor: 'secondary.main',
        '& .MuiOutlinedInput-root': { borderRadius: '8px' },
        input: {
          textAlign: 'center',
        },
      }
    },
    toolbarTitle: 'Select date',
    currentTime: dayjs(),
    prevNextButtons: true
  }
}