import { getContrastRatio } from "@mui/material/styles"

import SomEnergiaTheme from "."

describe("SomEnergiaTheme built from tokens", () => {
  test("follows the somenergia.coop light palette", () => {
    const { palette, typography } = SomEnergiaTheme(false)

    expect(typography.fontFamily).toMatch(/^Outfit, /)
    expect(palette.mode).toBe("light")
    expect(palette.primary.main).toBe("#cdff80")
    expect(palette.primary.dark).toBe("#b6e471")
    expect(palette.primary.contrastText).toBe("#0b2e34")
    expect(palette.accent.main).toBe("#97d700")
    expect(palette.text.primary).toBe("#0b2e34")
    expect(palette.background.default).toBe("#f0f3ec")
    expect(palette.background.paper).toBe("#ffffff")
    expect(palette.divider).toBe("#ced5d0")
    expect(palette.chartlines).toEqual({
      production: "#96b633",
      foreseen: "#f2970f",
    })
  })

  test("follows the somenergia.coop dark palette", () => {
    const { palette } = SomEnergiaTheme(true)

    expect(palette.mode).toBe("dark")
    expect(palette.primary.main).toBe("#cdff80")
    expect(palette.text.primary).toBe("#f0f3ec")
    expect(palette.background.default).toBe("#061c20")
    expect(palette.background.paper).toBe("#0b2e34")
  })

  test.each([false, true])(
    "keeps text readable on backgrounds (dark mode: %s)",
    (isDarkMode) => {
      const { palette } = SomEnergiaTheme(isDarkMode)

      for (const background of Object.values(palette.background)) {
        expect(
          getContrastRatio(palette.text.primary, background),
        ).toBeGreaterThanOrEqual(4.5)
        expect(
          getContrastRatio(palette.text.secondary, background),
        ).toBeGreaterThanOrEqual(4.5)
      }
      expect(
        getContrastRatio(palette.primary.contrastText, palette.primary.main),
      ).toBeGreaterThanOrEqual(4.5)
    },
  )
})
