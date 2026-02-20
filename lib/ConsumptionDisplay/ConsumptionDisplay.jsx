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
  return (
    <Wrapper>
      {currentDate && (
        <SummaryDisplay
          title={t(labelTotalPeriod(period))}
          value={totalKwh}
          valueUnit={'kWh'}
          description={dayjs(currentDate).format('DD/MM/YYYY')}></SummaryDisplay>
      )}
      {compareDate && (
        <SummaryDisplay
          title={t(labelTotalPeriod(period))}
          value={compareTotalKwh}
          color='secondary'
          valueUnit={'kWh'}
          description={dayjs(compareDate).format('DD/MM/YYYY')}></SummaryDisplay>
      )}
    </Wrapper>
  )
}

