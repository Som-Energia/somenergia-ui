import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import SummaryDisplay from "./index"

describe("SummaryDisplay", () => {
  it("formats numbers using Spanish locale", () => {
    const html = renderToStaticMarkup(
      <SummaryDisplay
        value={12345}
        valueUnit="kWh"
        title="Consumption"
        description="01/2025"
      />,
    )

    expect(html).toContain("12.345")
    expect(html).toContain("kWh")
  })

  it("shows em dash when value is not greater than zero", () => {
    const html = renderToStaticMarkup(
      <SummaryDisplay
        value={0}
        valueUnit="kWh"
        title="Consumption"
        description="x"
      />,
    )

    expect(html).toContain("—")
  })
})
