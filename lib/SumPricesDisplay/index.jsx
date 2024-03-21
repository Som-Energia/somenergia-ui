import React from 'react'
import styled from 'styled-components'
import Total from './Total'
import { useTranslation } from 'react-i18next'

const CounterWrapper = styled.div`
  display: flex;
  & > div {
    margin-left: 8px;
  }
  div:last-child {
    border: none;
  }
`
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
  const {
    totalPrices
  } = props
  const { t } = useTranslation()
  return (
    <CounterWrapper>
      {Object.entries(totalPrices).map(([type, totalPriceKwh]) => {
        console.log(totalPriceKwh, type, t(labelTotal(type)));
        return (
          <Total
            value={totalPriceKwh}
            description={t(labelTotal(type))}
          />
        )
      })}
    </CounterWrapper>
  )
}

export default SumPricesDisplay
