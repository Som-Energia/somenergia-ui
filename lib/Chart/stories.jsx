import Chart from '.'
import data from './mockData/exampleData'
import compareData from './mockData/compareData'

export default {
  title: 'Components/IncredibleChart📈',
  component: Chart,
  tags: ['autodocs'],
}

export const BarChart = {
  args: {
    period: 'MONTHLY',
      data: {
        periods: [{ values: 100, date: new Date().getTime(), P1: 20, P2: 30, P3: 50 }],
        keys: ['P1', 'P2', 'P3'],
        fills: { P1: '#FFC300', P2: '#900C3F', P3: '#581845' },
      },
      legend: true,
      type: 'BAR'
  },
};

export const LineChart = {
  args: {
    period: 'DAILY',
      data: data,
      legend: true,
      type: 'LINE'
  },
};

export const LineChartCompare = {
  args: {
    period: 'DAILY',
      data: data,
      legend: true,
      compareData: compareData,
      type: 'LINE',
  },
};