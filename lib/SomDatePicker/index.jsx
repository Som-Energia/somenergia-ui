import React from 'react'
import PropTypes from 'prop-types'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs  from 'dayjs'
import minMax from 'dayjs/plugin/minMax'
import { i18n } from '../i18n'

dayjs.extend(minMax)

export default function SomDatePicker({
  firstDate = null,
  lastDate = null,
  period = 'DAILY',
  currentTime = dayjs(),
  setCurrentTime,
}) {
  const dayjsperiods = {
    DAILY: 'd',
    WEEKLY: 'w',
    MONTHLY: 'M',
    YEARLY: 'y',
  }

  function prevTimeWindow() {
    const prev = currentTime.subtract(1, dayjsperiods[period])
    setCurrentTime(dayjs.max(firstDate, prev))
  }

  function nextTimeWindow() {
    const next = currentTime.add(1, dayjsperiods[period])
    setCurrentTime(dayjs.min(lastDate, next))
  }

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={i18n.language}>
        <Button onClick={prevTimeWindow} data-cy="prev-button">
          <ArrowBackIosOutlined />
        </Button>
        <DatePicker
          value={currentTime}
          onChange={(newValue) => {
            setCurrentTime(newValue)
          }}
          minDate={dayjs(firstDate)}
          maxDate={dayjs(lastDate)}
          format="DD/MM/YYYY"
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            minWidth: '100px',
          }}
        ></DatePicker>
        <Button onClick={nextTimeWindow} data-cy="next-button">
          <ArrowForwardIosOutlined />
        </Button>
      </LocalizationProvider>
    </Box>
  )
}
SomDatePicker.propTypes = {
  firstDate: () => {},
  lastDate: () => {},
  period: PropTypes.string,
  currentTime: () => {},
  setCurrentTime: PropTypes.func,
}
