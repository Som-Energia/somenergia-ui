import CucaMarejada from './cuca-marejada.svg'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

export default function DizzyError({
  width = '200px',
  sx,
}) {
  return (
    <>
      <Box sx={sx}>
        <img
          src={CucaMarejada}
          style={{
            width: width,
          }}
          alt="Error image"
        />
      </Box>
    </>
  )
}
DizzyError.propTypes = {
  width: PropTypes.string,
  sx: PropTypes.object,
}
