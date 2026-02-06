import CucaMarejada from '../../src/assets/cuca-marejada.svg'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

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
        />
      </Box>
    </>
  )
}
DizzyError.propTypes = {
  width: PropTypes.string,
  sx: PropTypes.object,
}
