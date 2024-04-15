import React from 'react'
import Total from './Total'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import useTheme from '@mui/system/useTheme'
import useMediaQuery from '@mui/system/useMediaQuery'

function SumPricesDisplay(props) {
  const { totalPrices } = props
  const theme = useTheme()

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      divider={
        <Divider
          orientation={
            useMediaQuery(theme.breakpoints.down('md'))
              ? 'horizontal'
              : 'vertical'
          }
          flexItem
        />
      }
    >
      {totalPrices.map((element, index) => {
        return <Total key={index} unit={element.unit} value={element.value} description={element.description} />
      })}
    </Stack>
  )
}

export default SumPricesDisplay
