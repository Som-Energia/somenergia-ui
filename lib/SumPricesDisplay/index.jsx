import React from 'react'
import Total from './Total'
import { useTranslation } from 'react-i18next'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { useTheme, useMediaQuery } from '@mui/material'

export const labelTotal = (type) => {
  switch (type) {
    case 'MIN':
      return 'SUMPRICESDISPLAY.TOTAL_MIN'
    case 'MAX':
      return 'SUMPRICESDISPLAY.TOTAL_MAX'
    case 'AVERAGE':
      return 'SUMPRICESDISPLAY.TOTAL_AVERAGE'
    case 'WEEKLY_AVERAGE':
      return 'SUMPRICESDISPLAY.TOTAL_WEEKLY_AVERAGE'
    default:
      return ''
  }
}

function SumPricesDisplay(props) {
  const { totalPrices } = props
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      divider={
        <Divider
          orientation={
            useMediaQuery(theme.breakpoints.down('md'))
              ? 'horizontal'
              : 'vertical'
          }
          flexItem
        />
      }
    >
      {Object.entries(totalPrices).map(([type, totalPriceKwh], index) => {
        return <Total value={totalPriceKwh} description={t(labelTotal(type))} />
      })}
    </Stack>
  )
}

export default SumPricesDisplay
