export const labelTotalPeriod = (period) => {
  switch (period) {
    case 'DAILY':
      return 'SUMDISPLAY.TOTAL_DAILY'
    case 'WEEKLY':
      return 'SUMDISPLAY.TOTAL_WEEKLY'
    case 'MONTHLY':
      return 'SUMDISPLAY.TOTAL_MONTHLY'
    case 'YEARLY':
      return 'SUMDISPLAY.TOTAL_YEARLY'
    default:
      return ''
  }
}
