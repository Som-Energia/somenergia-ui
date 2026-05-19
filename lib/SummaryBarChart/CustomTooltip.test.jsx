import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import { CustomTooltip } from "./CustomTooltip"

describe("CustomTooltip", () => {
  it("no renderiza si no esta activo", () => {
    const html = renderToStaticMarkup(
      <CustomTooltip active={false} payload={[]} />,
    )

    expect(html).toBe("")
  })

  it("renderiza valores y unidad", () => {
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
