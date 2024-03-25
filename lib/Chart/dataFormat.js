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

export const formatDecimal = (item, base = 100) =>
  formatNumber(Math.round((item + Number.EPSILON) * base) / base)

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

export const formatTooltipLabel = (period, values, date2, date3, type = 'barChart') => {
  const formatWithHour = (values) =>
    dayjs(values).format('DD/MM/YYYY HH') +
    'h - ' +
    dayjs(values).add(1, 'hour').format('HH') +
    ' h'

  switch (period) {
    case 'DAILY':
      return formatWithHour(values)
    case 'WEEKLY':
    case 'MONTHLY':
      return type === 'barChart'
        ? dayjs(values).format('DD/MM/YYYY')
        : formatWithHour(values)
    default:
      return dayjs(values).format('DD/MM/YYYY')
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
