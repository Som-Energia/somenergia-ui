import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import TableHead from "./TableHead"

vi.mock("../i18n", () => ({
  useTranslation: () => ({ t: (k) => k }),
}))

describe("TableHead", () => {
  it("renders table columns and actions header", () => {
    const html = renderToStaticMarkup(
      <table>
        <TableHead
          columns={[{ id: "name", label: "Name" }]}
          onSelectAllClick={() => {}}
          order="asc"
          orderBy="name"
          numSelected={0}
          rowCount={2}
          onRequestSort={vi.fn()}
          hasCheckbox
          hasItemActions
        />
      </table>,
    )

    expect(html).toContain("Name")
    expect(html).toContain("TABLE_EDITOR.ACTIONS")
  })
})
