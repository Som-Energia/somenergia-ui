import { describe, expect, it } from "vitest"

import { buildTicks, formatTooltipLabel } from "./chart.utils"

describe("buildTicks", () => {
  it("should return false when minYAxisValue is auto", () => {
    const result = buildTicks("auto", 10, 5)
    expect(result).toBe(false)
  })

  it("should return false when maxYAxisValue is auto", () => {
    const result = buildTicks(-10, "auto", 5)
    expect(result).toBe(false)
  })

  it("should return tick values when conditions are met", () => {
    const ticks = buildTicks(-10, 10, 5)
    expect(ticks).toEqual([-10, -5, 0, 5, 10]) // Assuming getNiceTickValues returns these values
  })
})

describe("formatTooltipLabel", () => {
  it("uses the previous date when a displaced interval ends at midnight", () => {
    expect(
      formatTooltipLabel("DAILY", "2026-08-06T00:00:00", "barChart", true),
    ).toBe("05/08/2026 23h - 00h")
  })

  it("keeps the date at the start of a non-displaced interval", () => {
    expect(formatTooltipLabel("DAILY", "2026-08-06T23:00:00", "barChart")).toBe(
      "06/08/2026 23h - 00h",
    )
  })

  it("handles a displaced interval that crosses a year boundary", () => {
    expect(
      formatTooltipLabel("DAILY", "2026-01-01T00:00:00", "barChart", true),
    ).toBe("31/12/2025 23h - 00h")
  })

  it("keeps the weekly label at the original date when displaced", () => {
    expect(
      formatTooltipLabel("WEEKLY", "2026-08-06T00:00:00", "barChart", true),
    ).toBe("06/08/2026")
  })

  it("keeps the monthly bar label at the original date when displaced", () => {
    expect(
      formatTooltipLabel("MONTHLY", "2026-08-06T00:00:00", "barChart", true),
    ).toBe("06/08/2026")
  })

  it("keeps the yearly label at the original date when displaced", () => {
    expect(
      formatTooltipLabel("YEARLY", "2026-01-01T00:00:00", "barChart", true),
    ).toBe("01/01/2026")
  })
})
