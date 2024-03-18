import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { useState } from 'react'
import minMax from 'dayjs/plugin/minMax'

dayjs.extend(minMax)

export default function SomDatePicker({
  firstDate = dayjs().subtract(7, 'day'),
  lastDate = dayjs().add(1, 'day'),
  period = 'DAILY',
  sx,
}) {
  const dayjsperiods = {
    DAILY: 'd',
    WEEKLY: 'w',
    MONTHLY: 'M',
    YEARLY: 'y',
  }
  const [currentTime, setCurrentTime] = useState(dayjs(firstDate))

  function prevTimeWindow() {
    setCurrentTime(
      dayjs.max(dayjs(firstDate), currentTime.subtract(1, dayjsperiods[period])),
    )
  }

  function nextTimeWindow() {
    setCurrentTime(dayjs.min(dayjs(lastDate), currentTime.add(1, dayjsperiods[period])))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        ...sx,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Button onClick={prevTimeWindow}>
          <ArrowBackIosOutlinedIcon />
        </Button>
        <DatePicker
          value={currentTime}
          onChange={setCurrentTime}
          minDate={dayjs(firstDate)}
          maxDate={dayjs(lastDate)}
          format="DD/MM/YYYY"
        ></DatePicker>
        <Button onClick={nextTimeWindow}>
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </LocalizationProvider>
    </Box>
  )
}
SomDatePicker.propTypes = {
  firstDate: dayjs,
  lastDate: dayjs,
  period: PropTypes.string,
  sx: PropTypes.object,
}
