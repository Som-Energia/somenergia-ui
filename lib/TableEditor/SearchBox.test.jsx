import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import SearchBox from "./SearchBox"

vi.mock("../i18n", () => ({
  useTranslation: () => ({ t: (k) => k }),
}))

describe("SearchBox", () => {
  it("usa placeholders traducidos", () => {
    const html = renderToStaticMarkup(
      <SearchBox search="" setSearch={() => {}} />,
    )

    expect(html).toContain("TABLE_EDITOR.PLACEHOLDER_SEARCH")
    expect(html).toContain("TABLE_EDITOR.LABEL_SEARCH")
  })
})
