import { Paper, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { alpha } from "@mui/system/colorManipulator"

import dayjs from "dayjs"
import PropTypes from "prop-types"

import { formatTooltipLabel } from "../utils/chart.utils"

export const CustomTooltip = ({
  active,
  payload,
  period,
  Ylegend,
  showTooltipKeys,
  displaced = false,
}) => {
  if (active && payload && payload.length) {
    const date = dayjs(payload[0].payload.date)
    const dateFormat = `${date.format("DD/MM/YYYY")}`
    const formatWithHour = formatTooltipLabel(
      period,
      date,
      "barChart",
      displaced,
    )
    return (
      <Paper variant="outlined" sx={{ padding: "10px" }}>
        <Box
          pt={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#585857",
              fontWeight: "bold",
            }}>{`${dateFormat}`}</Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#585857",
              fontWeight: "bold",
            }}>{`${formatWithHour}`}</Typography>
          <Box p={1}>
            {payload.map((pld, index) => (
              <Typography
                variant="subtitle1"
                key={index}
                sx={{ color: alpha(pld.fill, 1), fontWeight: "bold" }}>
                {(showTooltipKeys ? pld.dataKey + ": " : "") +
                  pld.value.toString().replace(".", ",") +
                  " " +
                  Ylegend}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  Ylegend: PropTypes.string,
  period: PropTypes.string,
  showTooltipKeys: PropTypes.bool,
}
