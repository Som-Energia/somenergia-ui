import Logo from '../../src/assets/logo.svg'
import Box from '@mui/material/Box'

export default function Loading() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '80%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '10%',
        p: 3,
      }}
    >
      <Box
        sx={{
          position: 'inherit',
          transform: 'translate(0%, 0%)',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          textAlign: 'center',
          lineHeight: '150px',
          background: 'transparent',
          color: '#96b633',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '-0px',
            left: '-0px',
            width: '100%',
            height: '100%',
            border: '3px solid transparent',
            borderTopColor: '#96b633',
            borderRightColor: '#96b633',
            borderRadius: '50%',
            animation: 'animateDot 2s linear infinite',
          },
          '@keyframes animateDot': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
        }}
      >
        <img
          src={Logo}
          style={{
            maxHeight: '7rem',
            marginTop: '0.5rem',
          }}
        />
        <Box
          sx={{
            display: 'block',
            position: 'absolute',
            top: 'calc(50% - 2px)',
            left: '50%',
            width: '50%',
            height: '4px',
            background: 'transparent',
            transformOrigin: 'left',
            animation: 'animateLine 2s linear infinite',

            '&:before': {
              content: '""',
              position: 'absolute',
              width: '16px',
              height: '16px',
              top: '-6px',
              right: '-8px',
              borderRadius: '50%',
              background: '#96b633',
              boxShadow: '0 0 20px #96b633',
            },
            '@keyframes animateLine': {
              '0%': {
                transform: 'rotate(45deg)',
              },
              '100%': {
                transform: 'rotate(405deg)',
              },
            },
          }}
        ></Box>
      </Box>
    </Box>
  )
}
