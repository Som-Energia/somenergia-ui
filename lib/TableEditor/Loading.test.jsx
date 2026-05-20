import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import Loading from "./Loading"

describe("TableEditor Loading", () => {
  it("renders skeleton rows based on column count", () => {
    const html = renderToStaticMarkup(<Loading nCols={4} />)

    expect(html).toContain("progressbar")
    expect((html.match(/MuiSkeleton-root/g) || []).length).toBeGreaterThan(0)
  })
})
