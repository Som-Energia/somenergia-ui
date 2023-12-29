import Logo from '../../src/assets/logo.svg'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { keyframes } from '@mui/system'

export default function Loading({
  color = '#96b633',
  width = '150px',
  trailWidth = '3px',
  ballWidth = '16px',
  logoCoverage = '78%',
  logoOffset = '-12%',
  sx,
}) {
  const electronSpin = keyframes`
    to { rotate: 1turn; }
  `

  return (
    <Box
      sx={{
        boxSizing: 'content-box',
        position: 'relative',
        width: '100%',
        minHeight: '80%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignContent: 'center',
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: width,
          height: width,
          borderRadius: '50%',
          textAlign: 'center',
          background: 'transparent',
          color: `${color}`,
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            animation: `${electronSpin} 2s linear infinite`,
            width: '100%',
            height: '100%',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: `-${trailWidth}`,
              left: `-${trailWidth}`,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `${trailWidth} solid transparent`,
              borderTopColor: color,
              borderRightColor: color,
              rotate: '-45deg',
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              width: ballWidth,
              height: ballWidth,
              top: `calc(50% - ${ballWidth} / 2)`,
              right: `calc((-${ballWidth} - ${trailWidth}) / 2)`,
              borderRadius: '50%',
              backgroundColor: color,
              boxShadow: `0 0 20px`,
              boxShadowColor: color,
            },
          }}
        ></Box>
        <img
          src={Logo}
          style={{
            marginTop: logoOffset,
            maxWidth: logoCoverage,
            maxHeight: logoCoverage,
          }}
        />
      </Box>
    </Box>
  )
}
Loading.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  trailWidth: PropTypes.string,
  ballWidth: PropTypes.string,
  logoCoverage: PropTypes.string,
  logoOffset: PropTypes.string,
  sx: PropTypes.object,
}
