import { renderToStaticMarkup } from "react-dom/server"

import dayjs from "dayjs"
import { describe, expect, it, vi } from "vitest"

import SomDatePicker from "./index"

vi.mock("../i18n", () => ({
  useTranslation: () => ({ i18n: { language: "es" } }),
}))

describe("SomDatePicker", () => {
  it("renderiza botones prev/next por defecto", () => {
    const html = renderToStaticMarkup(
      <SomDatePicker
        firstDate={dayjs("2025-01-01")}
        lastDate={dayjs("2025-12-31")}
        currentTime={dayjs("2025-06-01")}
        setCurrentTime={() => {}}
      />,
    )

    expect(html).toContain("prev-button")
    expect(html).toContain("next-button")
  })

  it("no renderiza botones si prevNextButtons=false", () => {
    const html = renderToStaticMarkup(
      <SomDatePicker
        prevNextButtons={false}
        firstDate={dayjs("2025-01-01")}
        lastDate={dayjs("2025-12-31")}
        currentTime={dayjs("2025-06-01")}
        setCurrentTime={() => {}}
      />,
    )

    expect(html).not.toContain("prev-button")
    expect(html).not.toContain("next-button")
  })
})
