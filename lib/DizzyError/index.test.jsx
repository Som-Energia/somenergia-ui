import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import DizzyError from "./index"

describe("DizzyError", () => {
  it("renderiza imagen de error con ancho por defecto", () => {
    const html = renderToStaticMarkup(<DizzyError />)

    expect(html).toContain('alt="Error image"')
    expect(html).toContain("200px")
  })

  it("permite sobreescribir el ancho", () => {
    const html = renderToStaticMarkup(<DizzyError width="320px" />)

    expect(html).toContain("320px")
  })
})
