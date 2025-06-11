import React from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

const Loading = (props) => {
    const { t } = useTranslation()
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

            <Typography variant="pagesubtitle">
                {t(description)}
            </Typography>

        </Box>
      </Box>
    )
}

export default Loading
