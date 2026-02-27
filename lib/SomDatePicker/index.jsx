import PropTypes from 'prop-types'
import ArrowBackIosOutlined from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined'
import { Box, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import minMax from 'dayjs/plugin/minMax'
import { useTranslation } from '../i18n'

dayjs.extend(minMax)

export default function SomDatePicker({
  firstDate = null,
  lastDate = null,
  period = 'DAILY',
  currentTime = dayjs(),
  setCurrentTime,
  styles = {},
  toolbarTitle = null,
  handleBlur = null,
  error = null,
  handleError = null,
  prevNextButtons = true,
  shouldDisableDate = () => { }
}) {
  const { i18n } = useTranslation();
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

  const viewsFormat = (period === 'YEARLY')
    ? ['year']
    : (period === 'MONTHLY')
      ? ['month']
      : ['day', 'month', 'year']

  const toolbarFormat = (period === 'YEARLY')
    ? 'YYYY'
    : (period === 'MONTHLY')
      ? 'MMMM YYYY'
      : 'dd., MMM D'

  return (
    <Box
      sx={{
        display: 'flex',
        ...styles.container,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={i18n.language}>
        {prevNextButtons &&
          <Button onClick={prevTimeWindow} data-cy="prev-button">
            <ArrowBackIosOutlined />
          </Button>
        }
        <DatePicker
          sx={styles.datePicker}
          slotProps={{
            textField: {
              fullWidth: true,
              onBlur: handleBlur,
              error: !!error
            },

            toolbar: {
              toolbarFormat: toolbarFormat,
              toolbarTitle: toolbarTitle,
              hidden: false,
              sx: {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',

              }
            }
          }}
          minDate={dayjs(firstDate)}
          maxDate={dayjs(lastDate)}
          views={viewsFormat}
          value={currentTime}
          onChange={(newValue) => {
            setCurrentTime(newValue)
          }}
          onError={{ handleError }}
          shouldDisableDate={shouldDisableDate}
        />
        {prevNextButtons &&
          <Button onClick={nextTimeWindow} data-cy="next-button">
            <ArrowForwardIosOutlined />
          </Button>
        }
      </LocalizationProvider>
    </Box>
  )
}

SomDatePicker.propTypes = {
  firstDate: PropTypes.any,
  lastDate: PropTypes.any,
  period: PropTypes.string,
  currentTime: PropTypes.any,
  setCurrentTime: PropTypes.func,
  styles: PropTypes.shape({
    container: PropTypes.object,
    datePicker: PropTypes.object,
  }),
  toolbarTitle: PropTypes.string,
  prevNextButtons: PropTypes.bool,
  shouldDisableDate: PropTypes.func
}
