import styled from 'styled-components'
import dayjs from 'dayjs'
import { useTranslation } from '../i18n'
import SummaryDisplay from '../SummaryDisplay/SummaryDisplay'
import { labelTotalPeriod } from './utils'

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`

export default function ConsumptionDisplay(props) {
  const {
    period,
    currentDate = null,
    totalKwh,
    compareDate = null,
    compareTotalKwh = null,
  } = props
  const { t } = useTranslation()
  const description = (period === 'YEARLY')
    ? dayjs(currentDate).format('YYYY')
    : (period === 'MONTHLY')
      ? dayjs(currentDate).format('MM/YYYY')
      : dayjs(currentDate).format('DD/MM/YYYY')

  return (
    <Wrapper>
      {currentDate && (
        <SummaryDisplay
          title={t(labelTotalPeriod(period))}
          value={totalKwh}
          valueUnit={'kWh'}
          description={description}></SummaryDisplay>
      )}
      {compareDate && (
        <SummaryDisplay
          title={t(labelTotalPeriod(period))}
          value={compareTotalKwh}
          color='secondary'
          valueUnit={'kWh'}
          description={description}></SummaryDisplay>
      )}
    </Wrapper>
  )
}

