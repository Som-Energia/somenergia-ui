import dayjs from 'dayjs'

export const generateRandomData = (hours = 2 * 24) => {
  const today = dayjs()
  return new Array(hours).fill(0).map((_, index) => ({
    date: today.add(index, 'hour').valueOf(),
    value: Math.floor(Math.random() * 10) + 10,
  }))
}
