import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import GlobalTheming from "./index"

vi.mock("../hooks/LocalStorage", () => ({
  default: () => [null, vi.fn()],
}))

vi.mock("@mui/material/useMediaQuery", () => ({
  default: () => false,
}))

describe("GlobalTheming", () => {
  it("renders children inside the provider", () => {
    const html = renderToStaticMarkup(
      <GlobalTheming>
        <span>content</span>
      </GlobalTheming>,
    )

    expect(html).toContain("content")
  })
})
