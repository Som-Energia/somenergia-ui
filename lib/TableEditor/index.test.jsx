import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import TableEditor from "./index"

vi.mock("../i18n", () => ({
  useTranslation: () => ({ t: (k, p) => (p?.count ? `${k}:${p.count}` : k) }),
}))

describe("TableEditor", () => {
  const columns = [
    { id: "id", label: "ID", searchable: true },
    { id: "name", label: "Nombre", searchable: true },
  ]

  it("renderiza filas cuando hay datos", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Tabla"
        columns={columns}
        rows={[
          { id: "1", name: "Ana" },
          { id: "2", name: "Pol" },
        ]}
      />,
    )

    expect(html).toContain("Ana")
    expect(html).toContain("Pol")
  })

  it("renderiza placeholder cuando no hay datos", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Tabla"
        columns={columns}
        rows={[]}
        noDataPlaceHolder={<span>Sin datos</span>}
      />,
    )

    expect(html).toContain("Sin datos")
  })

  it("muestra loading cuando loading=true", () => {
    const html = renderToStaticMarkup(
      <TableEditor title="Tabla" columns={columns} rows={[]} loading />,
    )

    expect(html).toContain("progressbar")
  })

  it("renderiza paginador si se pasan pageSizes", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Tabla"
        columns={columns}
        rows={[]}
        pageSizes={[5, 10]}
        defaultPageSize={5}
      />,
    )

    expect(html).toContain("Rows per page")
  })

  it("muestra '-' cuando una celda es null o undefined", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Tabla"
        columns={columns}
        rows={[{ id: "1", name: null }, { id: "2" }]}
      />,
    )

    expect(html).toContain("-")
  })

  it("renderiza controles de seleccion y acciones por item", () => {
    const html = renderToStaticMarkup(
      <TableEditor
        title="Tabla"
        columns={columns}
        rows={[{ id: "1", name: "Ana" }]}
        selectionActions={[{ title: "Eliminar seleccion" }]}
        itemActions={[{ title: "Editar", icon: <span>i</span> }]}
      />,
    )

    expect(html).toContain("TABLE_EDITOR.SELECT_ALL")
    expect(html).toContain("Editar")
  })
})
