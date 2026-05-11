import { Box, Typography } from "@mui/material"

function SummaryPrice(props) {
  const { value, unit, description } = props
  return (
    <>
      <Box
        sx={{
          padding: "2px 4px",
          alignItems: "center",
          textAlign: "center",
          flex: "1",
        }}>
        <Box
          sx={{
            padding: "0 4px 0 8px",
            display: "flex",
            flexDirection: "column",
            whiteSpace: "nowrap",
          }}>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "400",
            }}>
            {value}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "0.8rem",
            }}>
            {unit}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "4px 4px 0 8px",
          }}>
          <Typography
            sx={{
              lineHeight: "1.2rem",
              fontWeight: "700",
              fontSize: "0.7rem",
              whiteSpace: "nowrap",
            }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default SummaryPrice
