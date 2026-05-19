import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import { CustomLegend } from "./CustomLegend"

describe("CustomLegend", () => {
  it("renderiza texto de todas las lineas de referencia", () => {
    const html = renderToStaticMarkup(
      <CustomLegend
        referenceLineData={[
          { text: "Objetivo", color: "#000", stroke: "1 1", strokeWidth: 1 },
          { text: "Media", color: "#111", stroke: "2 2", strokeWidth: 2 },
        ]}
      />,
    )

    expect(html).toContain("Objetivo")
    expect(html).toContain("Media")
  })
})
