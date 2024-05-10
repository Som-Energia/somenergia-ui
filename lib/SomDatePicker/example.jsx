import React from 'react'
import dayjs from 'dayjs'
import SomDatePicker from '.'

export default function SomDatePickerExample() {
  const [date, setDate] = React.useState(dayjs())

  return (
    <SomDatePicker
      period={'DAILY'}
      currentTime={date}
      setCurrentTime={setDate}
      styles={{
        datePicker: {
          border: '1px solid darkblue',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
          minWidth: '110px',
        },
      }}
    />
  )
}
