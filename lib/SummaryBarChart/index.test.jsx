import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import SummaryPeriodChart from "./index"

vi.mock("recharts", () => {
  const tag = (name) => (props) => <div data-comp={name}>{props.children}</div>
  return {
    Bar: tag("Bar"),
    BarChart: tag("BarChart"),
    CartesianGrid: tag("CartesianGrid"),
    Label: tag("Label"),
    Legend: tag("Legend"),
    ReferenceLine: tag("ReferenceLine"),
    ResponsiveContainer: tag("ResponsiveContainer"),
    Tooltip: tag("Tooltip"),
    XAxis: tag("XAxis"),
    YAxis: tag("YAxis"),
  }
})

describe("SummaryPeriodChart", () => {
  it("renderiza una barra por key", () => {
    const html = renderToStaticMarkup(
      <SummaryPeriodChart
        period="MONTHLY"
        data={{
          periods: [{ date: 1 }],
          keys: ["p1", "p2"],
          fills: { p1: "#1", p2: "#2" },
        }}
      />,
    )

    expect(html.match(/data-comp="Bar"/g)?.length).toBe(2)
  })
})
