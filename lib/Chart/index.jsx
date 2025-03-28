import PropTypes from 'prop-types'
import { getNiceTickValues } from 'recharts-scale'

import {
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  Legend,
  LineChart,
  BarChart,
  Line,
  ReferenceLine,
} from 'recharts'

import {
  formatTooltipLabel,
  formatXAxis,
  ticksFromData,
  domainFromData,
  formatDecimal,
  formatTooltip,
  mergeData,
  setChartLang,
} from './dataFormat'
import { CustomTooltip } from './CustomTooltip'
import { CustomLegend } from './CustomLegend'

export function buildTicks(minYAxisValue, maxYAxisValue, tickCountValue) {
  let builtTicks = false
  if (
    minYAxisValue !== 'auto' &&
    maxYAxisValue !== 'auto'
  ) {
    builtTicks = getNiceTickValues(
      [minYAxisValue, maxYAxisValue],
      tickCountValue,
      true
    )
  }
  return builtTicks
}

function Chart({
  data,
  period,
  legend = false,
  compareData,
  type,
  lang,
  Ylegend = 'kWh',
  showTooltipKeys = true,
  referenceLineData,
  numberOfDecimals,
  decimalSeparator,
  maxYAxisValue = 'auto',
  minYAxisValue = 'auto',
  tickCountValue = 7,
  displaced = false,
}) {
  const getChartType = (type, data, period, legend, compareData) => {
    setChartLang(lang)
    if (type === 'LINE') {
      const mixedData = mergeData(data, compareData)
      return (
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
            tick={{ fontSize: '1rem', transform: 'translate(0, 8)' }}
          />
          <YAxis
            type="number"
            domain={[0, 'auto']}
            axisLine={false}
            tickCount={8}
            tickLine={false}
            tickFormatter={(tickItem) => `${formatDecimal(tickItem)}`}
            tick={{ fontSize: '1rem', transform: 'translate(0, 0)' }}
          >
            <Label value={Ylegend} angle={-90} position="insideLeft" fill="#969696" />
          </YAxis>
          <Tooltip
            formatter={(value) => formatTooltip(value, Ylegend)}
            labelFormatter={(value) => formatTooltipLabel(period, value, 'lineChart', displaced)}
            contentStyle={{ fontWeight: 'bold' }}
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
      )
    } else {
      return (
        <BarChart width={730} height={250} data={data.periods}>
          <CartesianGrid stroke="#616161" strokeWidth={0.5} vertical={false} />
          <XAxis dataKey="range" padding={{ left: 24, right: 24 }} hide />
          <XAxis
            dataKey="date"
            tickFormatter={(tickItem) => formatXAxis(period, tickItem)}
            tick={{ fontSize: '1rem', transform: 'translate(0, 8)' }}
            padding={{ left: 24, right: 24 }}
            scale="band"
            xAxisId="values"
          />
          <YAxis
            type="number"
            domain={[minYAxisValue, maxYAxisValue]}
            axisLine={false}
            tickCount={tickCountValue}
            width={75}
            tickLine={false}
            tick={{ fontSize: '1rem', transform: 'translate(0, 0)' }}
            ticks={buildTicks(minYAxisValue, maxYAxisValue, tickCountValue)}
            tickFormatter={(tickItem) =>
              `${formatDecimal(tickItem, numberOfDecimals)}`
            }
          >
            <Label value={Ylegend} angle={-90} position="insideLeft" fill="#969696" />
          </YAxis>
          <Tooltip
            content={
              <CustomTooltip Ylegend={Ylegend} showTooltipKeys={showTooltipKeys} />
            }
            cursor={{ fill: '#f2f2f2bb' }}
          />

          {legend && !referenceLineData && <Legend/>}
          {legend && referenceLineData &&
            <Legend
              content={<CustomLegend referenceLineData={referenceLineData}/>}
            />
          }
          {data.keys.map((element) => {
            return (
              <Bar
                key={element}
                stackId="current"
                dataKey={element}
                fill={data.fills[element]}
              />
            )
          })}

          {referenceLineData && referenceLineData.map((element, index) => {
            return (
              <ReferenceLine
                key={index}
                y={element.value}
                stroke={element.color}
                strokeDasharray={element.stroke}
                strokeWidth={element.strokeWidth}
                text={element.text}
              />
            )
            })
          }

          </BarChart>
      )
    }
  }

  return (
    <div style={{ height: '450px' }}>
      <ResponsiveContainer>
        {getChartType(type, data, period, legend, compareData)}
      </ResponsiveContainer>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  period: PropTypes.string,
  legend: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  compareData: PropTypes.oneOfType([PropTypes.array]),
  type: PropTypes.string,
  lang: PropTypes.string,
  Ylegend: PropTypes.string,
  showTooltipKeys: PropTypes.bool,
  referenceLineData: PropTypes.oneOfType([PropTypes.array]),
}

export default Chart
