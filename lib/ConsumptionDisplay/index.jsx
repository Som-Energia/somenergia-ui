import { Box } from '@mui/material'

import dayjs from 'dayjs'

import { useTranslation } from '../i18n'
import SummaryDisplay from '../SummaryDisplay'
import { labelTotalPeriod } from './utils'

export default function ConsumptionDisplay(props) {
  const {
    period,
    currentDate = null,
    totalKwh,
    compareDate = null,
    compareTotalKwh = null,
  } = props
  const { t } = useTranslation()

  const description = (period, date) => {
    return period === 'YEARLY'
      ? dayjs(date).format('YYYY')
      : period === 'MONTHLY'
        ? dayjs(date).format('MM/YYYY')
        : dayjs(date).format('DD/MM/YYYY')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2rem',
      }}>
      {currentDate && (
        <SummaryDisplay
          title={t(labelTotalPeriod(period))}
          value={totalKwh}
          valueUnit={'kWh'}
          description={description(period, currentDate)}></SummaryDisplay>
      )}
      {compareDate && (
        <SummaryDisplay
          title={t(labelTotalPeriod(period))}
          value={compareTotalKwh}
          color="secondary"
          valueUnit={'kWh'}
          description={description(period, compareDate)}></SummaryDisplay>
      )}
    </Box>
  )
}
