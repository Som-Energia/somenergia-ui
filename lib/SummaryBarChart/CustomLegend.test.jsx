import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it } from "vitest"

import { CustomLegend } from "./CustomLegend"

describe("CustomLegend", () => {
  it("renders text for all reference lines", () => {
    const html = renderToStaticMarkup(
      <CustomLegend
        referenceLineData={[
          { text: "Target", color: "#000", stroke: "1 1", strokeWidth: 1 },
          { text: "Average", color: "#111", stroke: "2 2", strokeWidth: 2 },
        ]}
      />,
    )

    expect(html).toContain("Target")
    expect(html).toContain("Average")
  })
})
