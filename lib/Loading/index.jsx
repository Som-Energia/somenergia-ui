import { Box, CircularProgress, Typography } from '@mui/material'

const Loading = (props) => {
  const { description } = props
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
      }}
    >
      <Box data-testid={'loading-component'} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 3
      }} >
        <CircularProgress sx={{ color: 'primary2.main' }} />
        {description && <Typography variant="pagesubtitle">{description}</Typography>}
      </Box>
    </Box>
  )
}

export default Loading
