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
  BarChart,
  ReferenceLine,
} from 'recharts'

import {
  formatXAxis,
  formatDecimal,
  setChartLang,
  buildTicks,
} from '../utils/chart.utils'

import { CustomTooltip } from './CustomTooltip'
import { CustomLegend } from './CustomLegend'

function SummaryPeriodChart({
  data,
  period,
  legend = false,
  lang,
  Ylegend = 'kWh',
  showTooltipKeys = true,
  referenceLineData,
  numberOfDecimals,
  maxYAxisValue = 'auto',
  minYAxisValue = 'auto',
  tickCountValue = 7,
  displaced = false,
  scale = 'band',
}) {
  setChartLang(lang)
  return (
    <div style={{ height: '450px' }}>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data.periods}>
          <CartesianGrid stroke="#616161" strokeWidth={0.5} vertical={false} />
          <XAxis dataKey="range" padding={{ left: 24, right: 24 }} hide />
          <XAxis
            dataKey="date"
            tickFormatter={(tickItem) => formatXAxis(period, tickItem)}
            tick={{ fontSize: '1rem', transform: 'translate(0, 8)'}}
            padding={{ left: 24, right: 24 }}
            scale={scale}
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
              <CustomTooltip period={period} Ylegend={Ylegend} showTooltipKeys={showTooltipKeys} displaced={displaced} />
            }
            cursor={{ fill: '#f2f2f2bb' }}
          />

          {legend && !referenceLineData && <Legend />}
          {legend && referenceLineData &&
            <Legend
              content={<CustomLegend referenceLineData={referenceLineData} />}
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
      </ResponsiveContainer>
    </div>
  )
}

SummaryPeriodChart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  period: PropTypes.string,
  legend: PropTypes.bool,
  lang: PropTypes.string,
  Ylegend: PropTypes.string,
  showTooltipKeys: PropTypes.bool,
  referenceLineData: PropTypes.oneOfType([PropTypes.array]),
  displaced: PropTypes.bool,
  scale: PropTypes.string,
}

export default SummaryPeriodChart
