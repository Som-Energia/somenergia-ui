import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import { CustomTooltip } from "./CustomTooltip"

describe("CustomTooltip", () => {
  it("does not render when tooltip is inactive", () => {
    const html = renderToStaticMarkup(
      <CustomTooltip active={false} payload={[]} />,
    )

    expect(html).toBe("")
  })

  it("renders value and unit", () => {
    const html = renderToStaticMarkup(
      <CustomTooltip
        active
        period="DAILY"
        Ylegend="kWh"
        showTooltipKeys
        payload={[
          {
            fill: "#000",
            dataKey: "P1",
            value: 12.3,
            payload: { date: "2025-01-01" },
          },
        ]}
      />,
    )

    expect(html).toContain("P1:")
    expect(html).toContain("12,3 kWh")
  })
})
