import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import Loading from "./index"

describe("Loading", () => {
  it("muestra descripcion cuando existe", () => {
    const html = renderToStaticMarkup(<Loading description="Cargando datos" />)

    expect(html).toContain("Cargando datos")
    expect(html).toContain("loading-component")
  })

  it("no muestra descripcion si no se pasa", () => {
    const html = renderToStaticMarkup(<Loading />)

    expect(html).not.toContain("pagesubtitle")
  })
})
