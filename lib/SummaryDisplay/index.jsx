import { Box, Typography } from '@mui/material'

export default function SummaryDisplay(props) {
  const { value, valueUnit, title, description, color = 'primary' } = props

  const formatValue = (value) => {
    return Number.isNaN(value)
      ? value
      : new Intl.NumberFormat('es').format(value)
  }

  return (
    <>
      <Box
        sx={{
          color: color === 'primary' ? '#96b633' : '#f2970f',
          justifyContent: 'flex-end',
          display: 'flex',
          gap: '0.6em',
          alignItems: 'center',
        }}>
        <Box
          sx={{
            display: 'flex',
            gap: '0.2em',
            whiteSpace: 'nowrap',
            alignItems: 'baseline',
          }}>
          <Typography
            sx={{
              fontSize: '2.2rem',
              fontWeight: '800',
              display: 'inline-block',
            }}>
            {value ? formatValue(value) : '—'}
          </Typography>
          <Typography
            sx={{
              fontSize: '2rem',
              fontWeight: '400',
              display: 'inline-block',
            }}>
            {valueUnit}
          </Typography>
        </Box>
        <Box
          sx={{
            fontSize: '1rem',
            fontWeight: '500',
            padding: '0 4px 0 8px',
            lineHeight: '1.2rem',
          }}>
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              color: '#616161',
            }}>
            {title}
          </Typography>
          <Typography sx={{ whiteSpace: 'nowrap' }}>{description}</Typography>
        </Box>
      </Box>
    </>
  )
}
