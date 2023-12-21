import Logo from '../../src/assets/logo.svg'
import Box from '@mui/material/Box'
import './style.css'

export default Loading = () => {
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
      <div className="ring">
        <img
          src={Logo}
          style={{
            maxHeight: '7rem',
            marginTop: '0.5rem',
          }}
        />
        <span className="rotation"></span>
      </div>
    </Box>
  )
}
