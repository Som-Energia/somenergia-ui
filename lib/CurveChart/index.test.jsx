import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import CurveChart from "./index"

vi.mock("recharts", () => {
  const tag = (name) => {
    const MockComp = (props) => <div data-comp={name}>{props.children}</div>
    MockComp.displayName = name
    return MockComp
  }
  return {
    CartesianGrid: tag("CartesianGrid"),
    Label: tag("Label"),
    Line: tag("Line"),
    LineChart: tag("LineChart"),
    ResponsiveContainer: tag("ResponsiveContainer"),
    Tooltip: tag("Tooltip"),
    XAxis: tag("XAxis"),
    YAxis: tag("YAxis"),
  }
})

describe("CurveChart", () => {
  it("renders comparison line when compareData exists", () => {
    const html = renderToStaticMarkup(
      <CurveChart
        data={[{ date: 1, value: 10 }]}
        period="DAILY"
        compareData={[{ date: 1, value: 8 }]}
      />,
    )

    expect(html.match(/data-comp="Line"/g)?.length).toBe(2)
  })
})
