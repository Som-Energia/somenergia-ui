import SumPricesDisplay from '.'

export default {
  title: 'Components/FascinatingSumPricesDisplay🧮',
  component: SumPricesDisplay,
  tags: ['autodocs'],
}

export const DisplaySumPrices = {
  args: {
    totalPrices: [
      {
        description: 'PRECIO MÍNIMO',
        unit: '€/kWh',
        value: '0,148228'
      },
      {
        description: 'PRECIO MÁXIMO',
        unit: '€/kWh',
        value: '0,267025'
      },
      {
        description: 'PROMEDIO DEL DIA',
        unit: '€/kWh',
        value: '0,192623'
      },
      {
        description: 'PROMEDIO ÚLTIMOS 7 DÍAS',
        unit: '€/kWh',
        value: '0,159804'
      }
    ]
  }
}
