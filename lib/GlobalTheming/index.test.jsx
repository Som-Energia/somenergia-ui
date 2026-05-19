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
  it("renderiza children dentro del provider", () => {
    const html = renderToStaticMarkup(
      <GlobalTheming>
        <span>contenido</span>
      </GlobalTheming>,
    )

    expect(html).toContain("contenido")
  })
})
