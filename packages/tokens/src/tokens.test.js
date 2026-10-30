import tokensToCss from "./css.js"
import tokens from "./index.js"

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
