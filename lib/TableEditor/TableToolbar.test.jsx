import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import TableToolbar from "./TableToolbar"

vi.mock("../i18n", () => ({
  useTranslation: () => ({ t: (k, p) => (p?.count ? `${k}:${p.count}` : k) }),
}))

describe("TableToolbar", () => {
  it("shows title when no rows are selected", () => {
    const html = renderToStaticMarkup(
      <TableToolbar
        title="Users"
        selected={[]}
        numSelected={0}
        setSearch={() => {}}
        search=""
        actions={[]}
        selectionActions={[]}
      />,
    )

    expect(html).toContain("Users")
  })

  it("shows selection counter when rows are selected", () => {
    const html = renderToStaticMarkup(
      <TableToolbar
        title="Users"
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
