import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import SummaryDisplay from "./index"

describe("SummaryDisplay", () => {
  it("formatea numeros con locale es", () => {
    const html = renderToStaticMarkup(
      <SummaryDisplay
        value={12345}
        valueUnit="kWh"
        title="Consumo"
        description="01/2025"
      />,
    )

    expect(html).toContain("12.345")
    expect(html).toContain("kWh")
  })

  it("muestra guion largo cuando no hay valor", () => {
    const html = renderToStaticMarkup(
      <SummaryDisplay
        value={0}
        valueUnit="kWh"
        title="Consumo"
        description="x"
      />,
    )

    expect(html).toContain("—")
  })
})
