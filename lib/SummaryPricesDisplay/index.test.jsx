import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import SummaryPricesDisplay from "./index"

vi.mock("@mui/system/useTheme", () => ({
  default: () => ({ breakpoints: { down: () => "@media" } }),
}))

vi.mock("@mui/system/useMediaQuery", () => ({
  default: () => false,
}))

vi.mock("../SummaryPrice/SummaryPrice", () => ({
  default: ({ value, unit, description }) => (
    <span>{`${value}-${unit}-${description}`}</span>
  ),
}))

describe("SummaryPricesDisplay", () => {
  it("renders one SummaryPrice per item", () => {
    const html = renderToStaticMarkup(
      <SummaryPricesDisplay
        totalPrices={[
          { value: 1, unit: "EUR", description: "A" },
          { value: 2, unit: "EUR", description: "B" },
        ]}
      />,
    )

    expect(html).toContain("1-EUR-A")
    expect(html).toContain("2-EUR-B")
  })
})
