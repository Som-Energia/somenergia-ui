import PropTypes from 'prop-types'

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

function Chart({
  data,
  period,
  legend = false,
  compareData,
  type,
  lang,
  Ylegend = 'kWh',
  showTooltipKeys = true,
  referenceLineData
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
            labelFormatter={(value) => formatTooltipLabel(period, value, 'lineChart')}
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
            domain={[0, 'auto']}
            axisLine={false}
            tickCount={7}
            width={75}
            tickLine={false}
            tick={{ fontSize: '1rem', transform: 'translate(0, 0)' }}
          >
            <Label value={Ylegend} angle={-90} position="insideLeft" fill="#969696" />
          </YAxis>
          <Tooltip
            content={
              <CustomTooltip Ylegend={Ylegend} showTooltipKeys={showTooltipKeys} />
            }
            cursor={{ fill: '#f2f2f2bb' }}
          />
          {legend && <Legend />}

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
          {referenceLineData && referenceLineData.map((element) => {
            return (
              <ReferenceLine
                y={element.value}
                stroke={element.color}
                strokeDasharray={element.stroke}
                strokeWidth={element.strokeWidth}
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
  data: PropTypes.array || PropTypes.object,
  period: PropTypes.string,
  legend: PropTypes.bool || PropTypes.any,
  compareData: PropTypes.array || null,
  type: PropTypes.string,
  lang: PropTypes.string,
  Ylegend: PropTypes.string,
  showTooltipKeys: PropTypes.bool,
  referenceLineData: PropTypes.array || null,
}

export default Chart
