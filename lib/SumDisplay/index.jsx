import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

const CounterWrapper = styled.div`
  display: flex;
  & > div {
    margin-left: 8px;
  }
`
export const labelTotalPeriod = (period) => {
  switch (period) {
    case 'DAILY':
      return 'SUMDISPLAY.TOTAL_DAILY'
    case 'WEEKLY':
      return 'SUMDISPLAY.TOTAL_WEEKLY'
    case 'MONTHLY':
      return 'SUMDISPLAY.TOTAL_MONTHLY'
    case 'YEARLY':
      return 'SUMDISPLAY.TOTAL_YEARLY'
    default:
      return ''
  }
}

function SumDisplay(props) {
  const {
    period,
    currentDate,
    totalKwh,
    compareDate = false,
    compareTotalKwh = false,
  } = props
  const { t } = useTranslation()
  return (
    <CounterWrapper>
      <Counter
        value={totalKwh}
        title={t(labelTotalPeriod(period))}
        date={dayjs(currentDate).format('DD/MM/YYYY')}
      />
      {compareDate && (
        <Counter
          value={compareTotalKwh}
          title={t(labelTotalPeriod(period))}
          date={dayjs(compareDate).format('DD/MM/YYYY')}
          color="secondary"
        />
      )}
    </CounterWrapper>
  )
}

export default SumDisplay
