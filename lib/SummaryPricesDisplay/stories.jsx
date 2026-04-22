import SummaryPricesDisplay from '.'

export default {
  title: 'Energy components/SummaryPricesDisplay',
  component: SummaryPricesDisplay,
  tags: ['autodocs'],
}

export const Example = {
  args: {
    totalPrices: [
      {
        description: 'PRECIO MÍNIMO',
        unit: '€/kWh',
        value: '0,148228',
      },
      {
        description: 'PRECIO MÁXIMO',
        unit: '€/kWh',
        value: '0,267025',
      },
      {
        description: 'PROMEDIO DEL DIA',
        unit: '€/kWh',
        value: '0,192623',
      },
      {
        description: 'PROMEDIO ÚLTIMOS 7 DÍAS',
        unit: '€/kWh',
        value: '0,159804',
      },
    ],
  },
}
