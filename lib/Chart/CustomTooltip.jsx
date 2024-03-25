import PropTypes from 'prop-types'
import { Box, Paper, Typography } from '@mui/material'
import dayjs from 'dayjs'

export const CustomTooltip = ({ active, payload, Ylegend, showTooltipKeys }) => {
  if (active && payload && payload.length) {
    const date = dayjs(payload[0].payload.date)
    const dateFormat = `${date.format('DD/MM/YYYY')}`
    const formatWithHour = `${date.format('HH')}h - ${date.add(1, 'hour').format('HH')}h`
    return (
      <Paper variant="outlined" sx={{ padding: '10px' }}>
        <Box
          pt={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: '#585857', fontWeight: 'bold' }}
          >{`${dateFormat}`}</Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: '#585857', fontWeight: 'bold' }}
          >{`${formatWithHour}`}</Typography>
          <Box p={1}>
            {payload.map((pld, index) => (
              <Typography
                variant="subtitle1"
                key={index}
                sx={{ color: pld.fill, fontWeight: 'bold' }}
              >
                {(showTooltipKeys && pld.dataKey + ': ') + pld.value + ' ' + Ylegend}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  Ylegend: PropTypes.string,
  showTooltipKeys: PropTypes.bool,
}
