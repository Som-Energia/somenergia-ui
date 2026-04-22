import { Divider, Stack } from '@mui/material'
import useMediaQuery from '@mui/system/useMediaQuery'
import useTheme from '@mui/system/useTheme'

import SummaryPrice from '../SummaryPrice/SummaryPrice'

function SummaryPricesDisplay(props) {
  const { totalPrices } = props
  const theme = useTheme()

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      divider={
        <Divider
          flexItem
          orientation={
            useMediaQuery(theme.breakpoints.down('md'))
              ? 'horizontal'
              : 'vertical'
          }
        />
      }>
      {totalPrices.map((item, index) => (
        <SummaryPrice
          key={index}
          unit={item.unit}
          value={item.value}
          description={item.description}
        />
      ))}
    </Stack>
  )
}

export default SummaryPricesDisplay
