import { renderToStaticMarkup } from "react-dom/server"

import { describe, expect, it, vi } from "vitest"

import ActionButtons from "./ActionButtons"

describe("ActionButtons", () => {
  it("renders custom and standard actions", () => {
    const handler = vi.fn()
    const html = renderToStaticMarkup(
      <ActionButtons
        context={{ id: 1 }}
        actions={[
          { view: () => <span>custom</span> },
          { title: "Edit", icon: <span>i</span>, handler },
        ]}
      />,
    )

    expect(html).toContain("custom")
    expect(html).toContain("Edit")
  })
})
