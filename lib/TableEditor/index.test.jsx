import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import TableEditor from "./index"

vi.mock("../i18n", () => ({
  useTranslation: () => ({ t: (k, p) => (p?.count ? `${k}:${p.count}` : k) }),
}))

describe("TableEditor", () => {
  const columns = [
    { id: "id", label: "ID", searchable: true },
    { id: "name", label: "Name", searchable: true },
  ]

  it("renders rows when data is provided", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Table"
        columns={columns}
        rows={[
          { id: "1", name: "Anna" },
          { id: "2", name: "Pol" },
        ]}
      />,
    )

    expect(html).toContain("Anna")
    expect(html).toContain("Pol")
  })

  it("renders placeholder when there is no data", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Table"
        columns={columns}
        rows={[]}
        noDataPlaceHolder={<span>No data</span>}
      />,
    )

    expect(html).toContain("No data")
  })

  it("shows loading state when loading is true", () => {
    const html = renderToStaticMarkup(
      <TableEditor title="Table" columns={columns} rows={[]} loading />,
    )

    expect(html).toContain("progressbar")
  })

  it("renders pagination controls when pageSizes is provided", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Table"
        columns={columns}
        rows={[]}
        pageSizes={[5, 10]}
        defaultPageSize={5}
      />,
    )

    expect(html).toContain("Rows per page")
  })

  it("shows '-' when a cell value is null or undefined", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Table"
        columns={columns}
        rows={[{ id: "1", name: null }, { id: "2" }]}
      />,
    )

    expect(html).toContain("-")
  })

  it("renders selection controls and per-item actions", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Table"
        columns={columns}
        rows={[{ id: "1", name: "Anna" }]}
        selectionActions={[{ title: "Remove selection" }]}
        itemActions={[{ title: "Edit", icon: <span>i</span> }]}
      />,
    )

    expect(html).toContain("TABLE_EDITOR.SELECT_ALL")
    expect(html).toContain("Edit")
  })
})
