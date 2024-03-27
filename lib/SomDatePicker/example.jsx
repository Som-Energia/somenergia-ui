import React from 'react'
import dayjs from 'dayjs'
import SomDatePicker from '.'

export default function SomDatePickerExample() {
  const [date, setDate] = React.useState(dayjs())

  return <SomDatePicker currentTime={date} setCurrentTime={setDate} />
}
