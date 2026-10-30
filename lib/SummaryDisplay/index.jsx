import { Box, Typography } from "@mui/material"

import tokens from "../tokens"

const color = tokens.color.light

export default function SummaryDisplay(props) {
  const {
    value,
    valueUnit,
    title,
    description,
    color: valueColor = "primary",
  } = props

  const formatValue = (value) => {
    return Number.isNaN(value)
      ? value
      : new Intl.NumberFormat("es").format(value)
  }

  return (
    <>
      <Box
        sx={{
          color:
            valueColor === "primary"
              ? color.chart.production
              : color.chart.foreseen,
          justifyContent: "flex-end",
          display: "flex",
          gap: "0.6em",
          alignItems: "center",
        }}>
        <Box
          sx={{
            display: "flex",
            gap: "0.2em",
            whiteSpace: "nowrap",
            alignItems: "baseline",
          }}>
          <Typography
            sx={{
              fontSize: "2.2rem",
              fontWeight: "800",
              display: "inline-block",
            }}>
            {value ? formatValue(value) : "—"}
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "400",
              display: "inline-block",
            }}>
            {valueUnit}
          </Typography>
        </Box>
        <Box
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            padding: "0 4px 0 8px",
            lineHeight: "1.2rem",
          }}>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              color: color.textMuted,
            }}>
            {title}
          </Typography>
          <Typography sx={{ whiteSpace: "nowrap" }}>{description}</Typography>
        </Box>
      </Box>
    </>
  )
}
