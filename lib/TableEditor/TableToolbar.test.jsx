import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import TableToolbar from "./TableToolbar"

vi.mock("../i18n", () => ({
  useTranslation: () => ({ t: (k, p) => (p?.count ? `${k}:${p.count}` : k) }),
}))

describe("TableToolbar", () => {
  it("muestra titulo cuando no hay seleccion", () => {
    const html = renderToStaticMarkup(
      <TableToolbar
        title="Usuarios"
        selected={[]}
        numSelected={0}
        setSearch={() => {}}
        search=""
        actions={[]}
        selectionActions={[]}
      />,
    )

    expect(html).toContain("Usuarios")
  })

  it("muestra contador cuando hay seleccion", () => {
    const html = renderToStaticMarkup(
      <TableToolbar
        title="Usuarios"
        selected={["1"]}
        numSelected={1}
        setSearch={() => {}}
        search=""
        actions={[]}
        selectionActions={[]}
      />,
    )

    expect(html).toContain("TABLE_EDITOR.N_SELECTED:1")
  })
})
