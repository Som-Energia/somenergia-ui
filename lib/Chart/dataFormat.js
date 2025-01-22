import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/gl'
import 'dayjs/locale/eu'
import 'dayjs/locale/es'
import 'dayjs/locale/ca'

dayjs.extend(weekday)
dayjs.extend(localeData)

export const setChartLang = (lang) => {
  switch (lang) {
    case 'eu':
      dayjs.locale('eu')
      break
    case 'ca':
      dayjs.locale('ca')
      break
    case 'gl':
      dayjs.locale('gl')
      break
    default:
      dayjs.locale('es')
      break
  }
}

export const formatNumber = (num) => {
  return num.toLocaleString('es-ES')
}

export const formatTooltip = (value, Ylegend = 'kWh') => {
  return [`${value} ${Ylegend}`, null]
}

export const formatDecimal = (item, numberOfDecimals = 2, decimalSeparator = ',', base = 100) =>
  formatNumber((Math.round((item + Number.EPSILON) * base) / base).toFixed(numberOfDecimals).replace('.', decimalSeparator))

export const formatXAxis = (period, item) => {
  switch (period) {
    case 'DAILY':
      return dayjs(item).format('HH') + 'h'
    case 'WEEKLY':
      return dayjs(item).format('dddd')
    case 'MONTHLY':
      return dayjs(item).format('D')
    default:
      return dayjs(item).format('MMMM')
  }
}

export const formatTooltipLabel = (period, values, type = 'barChart', displaced = false) => {
  // Displaced parameter: indicates if values are final or initial.
  // If true, values are final. Ex: for hour 1 label should be '00h - 01h'
  // If false, values are initial. Ex: fir hour 1 label should be '01h - 02h'
  const formatDay = (values) => dayjs(values).format('DD/MM/YYYY')
  const hour = (values) => dayjs(values).format('HH')
  var initialHour, finalHour

  if (displaced) {
    initialHour = (values) => dayjs(values).add(-1, 'hour').format('HH')
    finalHour = hour
  } else {
    initialHour = hour
    finalHour = (values) => dayjs(values).add(1, 'hour').format('HH')
  }

  const formatWithHour = (values) => formatDay(values) + ' ' + initialHour(values) + 'h - ' + finalHour(values) + 'h'

  switch (period) {
    case 'DAILY':
      return formatWithHour(values)
    case 'WEEKLY':
    case 'MONTHLY':
      return type === 'barChart'
        ? formatDay(values)
        : formatWithHour(values)
    default:
      return formatDay(values)
  }
}

export const domainFromData = (data, period) => {
  const firstDate = dayjs(data?.[0]?.date)
  if (period === 'WEEKLY') {
    return [firstDate.weekday(0).valueOf(), firstDate.weekday(7).valueOf()]
  }

  if (period === 'MONTHLY') {
    return [firstDate.date(1).valueOf(), firstDate.date(1).add(1, 'month').valueOf()]
  }

  if (period === 'YEARLY') {
    return [
      firstDate.month(0).date(1).valueOf(),
      firstDate.month(0).date(1).add(1, 'year').valueOf(),
    ]
  }

  return ['auto', 'auto']
}

export const mergeData = (arrData1 = [], arrData2 = []) => {
  return arrData1 > arrData2
    ? arrData1.map((item, index) => ({
        date: item.date,
        value: item.value,
        compValue: arrData2[index]?.value,
      }))
    : arrData2.map((item, index) => ({
        date: item.date,
        value: arrData1[index]?.value,
        compValue: item.value,
      }))
}

export const ticksFromData = (data, period) => {
  const firstDate = dayjs(data?.[0]?.date)
  if (period === 'WEEKLY') {
    return [...Array(7).keys()].map((item) => {
      const day = firstDate.weekday(item).valueOf()
      return day
    })
  }

  if (period === 'MONTHLY') {
    return [...Array(firstDate.daysInMonth()).keys()].map((item) => {
      const day = firstDate.date(item + 1)
      return day.valueOf()
    })
  }

  if (period === 'YEARLY') {
    return [...Array(12).keys()].map((item) => {
      const day = firstDate.month(item)
      return day.valueOf()
    })
  }
}
