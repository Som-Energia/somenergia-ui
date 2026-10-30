import SomEnergiaTheme from "."

describe("SomEnergiaTheme built from tokens", () => {
  test("keeps the light palette it had before tokens", () => {
    const { palette, typography } = SomEnergiaTheme(false)

    expect(typography.fontFamily).toBe(
      '"Outfit", "Helvetica", "Arial", sans-serif',
    )
    expect(palette.mode).toBe("light")
    expect(palette.primary.main).toBe("#c5f47c")
    expect(palette.primary.dark).toBe("#b6e471")
    expect(palette.primary.contrastText).toBe("#0B2E34")
    expect(palette.secondary.main).toBe("#c4c4c4")
    expect(palette.accent.main).toBe("#ff632b")
    expect(palette.text.primary).toBe("#4d4d4d")
    expect(palette.text.caption).toBe("#0B2E34")
    expect(palette.background.default).toBe("#fff")
    expect(palette.chartlines).toEqual({
      production: "#96b633",
      foreseen: "#f2970f",
    })
  })

  test("keeps the dark palette it had before tokens", () => {
    const { palette } = SomEnergiaTheme(true)

    expect(palette.mode).toBe("dark")
    expect(palette.text.primary).toBe("#bdbdbd")
    expect(palette.background.default).toBe("#121212")
    expect(palette.background.paper).toBe("#121212")
  })
})
