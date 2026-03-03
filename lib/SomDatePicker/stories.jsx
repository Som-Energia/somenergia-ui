import SomDatePickerExample from './example'
import dayjs from 'dayjs'

export default {
  title: 'Base Components/SomDatePicker',
  component: SomDatePickerExample,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    firstDate: {
      control: false,
      description: 'Minimal date allowed, if `null` no initial limit is set in the calendar'
    },
    lastDate: {
      control: false,
      description: 'Maximum date allowed, if `null` no final limit is set in the calendar'
    },
    period: {
      control: { type: 'select' },
      options: ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'],
    },
    styles: {
      description: 'Allow define `container` and `datepicker` styles'
    },
    currentTime: { type: 'date' },
    toolbarTitle: { type: 'string' },
    prevNextButtons: {
      type: 'boolean'
    },
    disabledNextPrev: { type: 'boolean' },
    shouldDisableDate: {
      control: false,
      description: 'Function that disables the selection of a date'
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
    prevNextButtons: true,
    disabledNextPrev: false,
  }
}

export const YearlyWithFirstLastDate = {
  args: {
    firstDate: dayjs().year(2024),
    lastDate: dayjs().year(2028),
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
    prevNextButtons: true,
    disabledNextPrev: false,
  }
}