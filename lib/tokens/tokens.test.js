import SomEnergiaTheme from "../SomEnergiaTheme"
import tokensToCss from "./css"
import tokens from "."

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

describe("tokensToCss", () => {
  const css = tokensToCss(tokens)

  test("exposes shared tokens as --som-* variables on :root", () => {
    expect(css).toContain(`--som-font-family: ${tokens.fontFamily};`)
    expect(css).toContain(`--som-radius-xl: ${tokens.radius.xl};`)
    expect(css).toContain(`--som-space-4: ${tokens.space[4]};`)
  })

  test("converts nested camelCase keys to kebab-case", () => {
    expect(css).toContain(
      `--som-color-primary-hover: ${tokens.color.light.primaryHover};`,
    )
    expect(css).toContain(
      `--som-color-chart-axis-label: ${tokens.color.light.chart.axisLabel};`,
    )
  })

  test("overrides colors for data-theme dark and the system preference", () => {
    const darkText = `--som-color-text: ${tokens.color.dark.text};`

    expect(css).toMatch(
      /:root\[data-theme="dark"\] \{[^}]*--som-color-text: #bdbdbd;/,
    )
    expect(css).toMatch(
      /:root:not\(\[data-theme="light"\]\) \{[^}]*--som-color-text: #bdbdbd;/,
    )
    expect(css.split(darkText)).toHaveLength(3)
  })
})
