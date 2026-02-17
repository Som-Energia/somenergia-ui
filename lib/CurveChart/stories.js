import CurveChart from '.'
import { generateRandomData } from './mockData/randomData'

const data = generateRandomData()
const compareData = generateRandomData()

export default {
  title: 'Energy components/CurveChart',
  component: CurveChart,
  tags: ['autodocs'],
}

export const LineChart = {
  args: {
    period: 'DAILY',
    data: data,
    lang: 'gl',
  },
}

export const LineChartCompare = {
  args: {
    period: 'DAILY',
    data: data,
    compareData: compareData,
    lang: 'eu',
  },
}
