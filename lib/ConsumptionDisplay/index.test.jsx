import { renderToStaticMarkup } from "react-dom/server"

import dayjs from "dayjs"
import { describe, expect, it, vi } from "vitest"

import ConsumptionDisplay from "./index"

vi.mock("../i18n", () => ({
  useTranslation: () => ({ t: (k) => k }),
}))

vi.mock("../SummaryDisplay", () => ({
  default: ({ value, description, color }) => (
    <span>{`${value}|${description}|${color || "primary"}`}</span>
  ),
}))

describe("ConsumptionDisplay", () => {
  it("muestra bloque actual y comparativo cuando ambas fechas existen", () => {
    const html = renderToStaticMarkup(
      <ConsumptionDisplay
        period="MONTHLY"
        currentDate={dayjs("2025-01-01")}
        totalKwh={50}
        compareDate={dayjs("2024-01-01")}
        compareTotalKwh={40}
      />,
    )

    expect(html).toContain("50|01/2025|primary")
    expect(html).toContain("40|01/2024|secondary")
  })
})
