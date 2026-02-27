import React from 'react'
import dayjs from 'dayjs'
import SomDatePicker from '.'

export default function SomDatePickerExample(args) {
  const {
    period,
    styles,
    toolbarTitle,
    prevNextButtons
  } = args

  const [date, setDate] = React.useState(dayjs())

  return (
    <SomDatePicker
      period={period}
      currentTime={date}
      setCurrentTime={setDate}
      styles={styles}
      toolbarTitle={toolbarTitle}
      prevNextButtons={prevNextButtons}
    />
  )
}