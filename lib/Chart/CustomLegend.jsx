import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

export const CustomLegend = ({ referenceLineData }) => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
    >
      {referenceLineData.map((element, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          key={index}
          sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}
        >
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg key={index} style={{ width: 30, height: 10, marginTop: '10px' }}>
              <line
                x1="0"
                y1="0"
                x2="30"
                y2="0"
                style={{
                  stroke: element.color,
                  strokeDasharray: element.stroke,
                  strokeWidth: element.strokeWidth * 2,
                }}
              />
            </svg>
            <div
              style={{
                color: element.color,
                fontSize: 12,
                marginLeft: '5px',
                verticalAlign: 'middle',
                lineHeight: '1',
              }}
            >
              {element.text}
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

CustomLegend.propTypes = {
  referenceLineData: PropTypes.array,
}
