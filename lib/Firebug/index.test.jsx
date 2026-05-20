import React from "react"
import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import Firebug from "./index"

describe("Firebug", () => {
  it("renders button with logo", () => {
    const html = renderToStaticMarkup(<Firebug />)

    expect(html).toContain('alt="firebug"')
  })
})
