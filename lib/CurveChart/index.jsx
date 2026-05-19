import PropTypes from "prop-types"
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import {
  domainFromData,
  formatDecimal,
  formatTooltip,
  formatTooltipLabel,
  formatXAxis,
  mergeData,
  setChartLang,
  ticksFromData,
} from "../utils/chart.utils"

function CurveChart({
  data,
  period,
  compareData,
  lang,
  Ylegend = "kWh",
  displaced = false,
}) {
  setChartLang(lang)
  const mixedData = mergeData(data, compareData)

  return (
    <div style={{ height: "450px" }}>
      <ResponsiveContainer>
        <LineChart width={730} height={250} data={mixedData}>
          <CartesianGrid stroke="#ccc" strokeWidth={0.5} vertical={false} />
          <XAxis
            dataKey="date"
            type="number"
            ticks={ticksFromData(mixedData, period)}
            scale="time"
            domain={domainFromData(mixedData, period)}
            tickFormatter={(tickItem) => formatXAxis(period, tickItem)}
            padding={{ left: 24, right: 24 }}
            tick={{ fontSize: "1rem", transform: "translate(0, 8)" }}
          />
          <YAxis
            type="number"
            domain={[0, "auto"]}
            axisLine={false}
            tickCount={8}
            tickLine={false}
            tickFormatter={(tickItem) => `${formatDecimal(tickItem)}`}
            tick={{ fontSize: "1rem", transform: "translate(0, 0)" }}>
            <Label
              value={Ylegend}
              angle={-90}
              position="insideLeft"
              fill="#969696"
            />
          </YAxis>
          <Tooltip
            formatter={(value) => formatTooltip(value, Ylegend)}
            labelFormatter={(value) =>
              formatTooltipLabel(period, value, "lineChart", displaced)
            }
            contentStyle={{ fontWeight: "bold" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#96b633"
            dot={false}
            strokeWidth={3}
            activeDot={{ r: 6 }}
          />
          {compareData && (
            <Line
              type="monotone"
              dataKey="compValue"
              stroke="#f2970f"
              dot={false}
              strokeWidth={3}
              activeDot={{ r: 6 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

CurveChart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  period: PropTypes.string,
  compareData: PropTypes.oneOfType([PropTypes.array]),
  lang: PropTypes.string,
  Ylegend: PropTypes.string,
  displaced: PropTypes.bool,
}

export default CurveChart
