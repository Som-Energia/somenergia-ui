import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import SummaryPrice from "./SummaryPrice"

describe("SummaryPrice", () => {
  it("shows value, unit and description", () => {
    const html = renderToStaticMarkup(
      <SummaryPrice value={"123"} unit={"EUR"} description={"Total"} />,
    )

    expect(html).toContain("123")
    expect(html).toContain("EUR")
    expect(html).toContain("Total")
  })
})
