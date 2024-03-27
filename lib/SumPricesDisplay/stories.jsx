import SumPricesDisplay from '.'

// const totalPrices = [
//   {
//     type: 'MIN',
//     totalPriceKwh: '0,148228'
//   },
//   {
//     type: 'MAX',
//     totalPriceKwh: '0,267025'
//   },
//   {
//     type: 'AVERAGE',
//     totalPriceKwh: '0,192623'
//   },
//   {
//     type: 'WEEKLY_AVERAGE',
//     totalPriceKwh: '0,159804'
//   }
// ]

const totalPrices = {
  'MIN': '0,148228',
  'MAX': '0,267025',
  'AVERAGE': '0,192623',
  'WEEKLY_AVERAGE': '0,159804'
}

export default {
  title: 'Components/FascinatingSumPricesDisplay🧮',
  component: SumPricesDisplay,
  tags: ['autodocs'],
}

export const DisplaySumPrices = {
  args: {
    totalPrices
  }
}


