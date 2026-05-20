import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import Loading from "./index"

describe("Loading", () => {
  it("shows description when provided", () => {
    const html = renderToStaticMarkup(<Loading description="Loading data" />)

    expect(html).toContain("Loading data")
    expect(html).toContain("loading-component")
  })

  it("does not show description when missing", () => {
    const html = renderToStaticMarkup(<Loading />)

    expect(html).not.toContain("pagesubtitle")
  })
})
