import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import ActionButtons from "./ActionButtons"

describe("ActionButtons", () => {
  it("renderiza acciones custom y estandar", () => {
    const handler = vi.fn()
    const html = renderToStaticMarkup(
      <ActionButtons
        context={{ id: 1 }}
        actions={[
          { view: () => <span>custom</span> },
          { title: "Editar", icon: <span>i</span>, handler },
        ]}
      />,
    )

    expect(html).toContain("custom")
    expect(html).toContain("Editar")
  })
})
