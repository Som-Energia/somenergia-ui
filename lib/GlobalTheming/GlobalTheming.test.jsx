import React from "react"

import { act, render } from "@testing-library/react"

import GlobalTheming, { ColorModeContext } from "."

function ColorModeSetter({ onReady }) {
  onReady(React.useContext(ColorModeContext))
  return null
}

describe("GlobalTheming", () => {
  beforeEach(() => {
    localStorage.clear()
    delete document.documentElement.dataset.theme
  })

  test("sets data-theme on <html> following the selected color mode", () => {
    let colorMode
    render(
      <GlobalTheming>
        <ColorModeSetter onReady={(context) => (colorMode = context)} />
      </GlobalTheming>,
    )

    expect(document.documentElement.dataset.theme).toBe("light")

    act(() => colorMode.set("dark"))
    expect(document.documentElement.dataset.theme).toBe("dark")

    act(() => colorMode.set("light"))
    expect(document.documentElement.dataset.theme).toBe("light")
  })
})
