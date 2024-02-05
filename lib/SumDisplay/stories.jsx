import SumDisplay from '.'

export default {
  title: 'Components/FascinatingSumDisplay🧮',
  component: SumDisplay,
  tags: ['autodocs'],
}

export const DisplaySum = {
  args: {
    period: 'DAILY',
    currentDate: '05/02/2024',
    totalKwh: 5
  }
}

export const DisplaySumWithComparation = {
  args: {
    period: 'DAILY',
    currentDate: '05/02/2024',
    totalKwh: 5,
    compareDate: '04/02/2024',
    compareTotalKwh: 6
  }
}
