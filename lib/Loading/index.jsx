import { Box } from '@mui/material'
import './style.css'

const Loading = () => {
  const logo = '/logo.svg'
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
          src={logo}
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

export default Loading
