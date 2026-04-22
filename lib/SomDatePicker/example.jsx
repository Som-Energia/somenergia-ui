import React from 'react'

import dayjs from 'dayjs'

import SomDatePicker from '.'

export default function SomDatePickerExample(args) {
  const {
    firstDate,
    lastDate,
    period,
    styles,
    toolbarTitle,
    prevNextButtons,
    disabledNextPrev,
  } = args

  const [date, setDate] = React.useState(dayjs())
  return (
    <SomDatePicker
      firstDate={firstDate}
      lastDate={lastDate}
      period={period}
      currentTime={date}
      setCurrentTime={setDate}
      styles={styles}
      toolbarTitle={toolbarTitle}
      prevNextButtons={prevNextButtons}
      disabledNextPrev={disabledNextPrev}
    />
  )
}
