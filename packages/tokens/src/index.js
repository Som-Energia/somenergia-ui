// Design tokens: the single source of truth for Som Energia styles.
// Colors and type follow somenergia.coop (Outfit, #0b2e34, #cdff80, #e2e8de, #ced5d0).
//
// @somenergia/somenergia-ui builds its MUI theme from these values and
// scripts/build-css.js turns them into dist/tokens.css
// (as --som-* CSS custom properties) for projects without MUI.
//
// Values must be literal (no var(...)) and use comma separated rgba()
// because MUI color helpers such as alpha() or getContrastText() parse them.

const font = {
  family:
    'Outfit, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  familyMono:
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
}

const radius = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "2rem",
  pill: "999px",
}

const space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
}

const chart = {
  production: "#96b633",
  foreseen: "#f2970f",
  grid: "#616161",
  gridSoft: "#cccccc",
  axisLabel: "#969696",
  cursor: "#f2f2f2bb",
  tooltipTitle: "#585857",
}

const lightColor = {
  primary: "#cdff80",
  primaryHover: "#b6e471",
  primarySoft: "#cdff80",
  onPrimary: "#0b2e34",
  onPrimarySoft: "#0b2e34",
  secondary: "#ced5d0",
  accent: "#97d700",
  text: "#0b2e34",
  textCaption: "#0b2e34",
  textMuted: "#3d5a5f",
  pageTitle: "#0b2e34",
  background: "#f0f3ec",
  surface: "#ffffff",
  surfaceCard: "#e2e8de",
  surfaceMuted: "#f0f3ec",
  surfaceSunken: "#ced5d0",
  border: "#ced5d0",
  borderStrong: "#9aa8a2",
  link: "#0c4c27",
  linkHover: "#0b2e34",
  danger: "#dc3545",
  dangerSurface: "#fbe3e5",
  dangerText: "#a71d2a",
  codeText: "#0c4c27",
  codeBackground: "#f0f3ec",
  focusRing: "#0b2e34",
  switchOff: "#9aa8a2",
  switchOn: "#0b2e34",
  backdrop: "rgba(11, 46, 52, 0.55)",
  shadow: "rgba(11, 46, 52, 0.18)",
  table: {
    title: "rgba(150, 182, 51, 0.7)",
    contentLight: "rgba(0, 0, 0, 0.03)",
    contentDark: "#0f3a41",
    line: "#ced5d0",
  },
  chart,
}

const darkColor = {
  ...lightColor,
  primarySoft: "rgba(205, 255, 128, 0.16)",
  onPrimarySoft: "#cdff80",
  secondary: "#3c6870",
  text: "#f0f3ec",
  textCaption: "#f0f3ec",
  textMuted: "#b5c4bf",
  pageTitle: "#f0f3ec",
  background: "#061c20",
  surface: "#0b2e34",
  surfaceCard: "#0f3a41",
  surfaceMuted: "#134650",
  surfaceSunken: "#082428",
  border: "#1d4b52",
  borderStrong: "#3c6870",
  link: "#cdff80",
  linkHover: "#e4ffbb",
  danger: "#ff7b86",
  dangerSurface: "#3d1418",
  dangerText: "#ffb3ba",
  codeText: "#cdff80",
  codeBackground: "rgba(205, 255, 128, 0.1)",
  focusRing: "#cdff80",
  switchOff: "#3c6870",
  switchOn: "#97d700",
  backdrop: "rgba(2, 10, 12, 0.7)",
  shadow: "rgba(0, 0, 0, 0.5)",
  table: {
    ...lightColor.table,
    line: "#1d4b52",
  },
  chart: {
    ...chart,
    cursor: "rgba(205, 255, 128, 0.1)",
    tooltipTitle: "#b5c4bf",
  },
}

const tokens = {
  font,
  radius,
  space,
  color: {
    light: lightColor,
    dark: darkColor,
  },
}

export default tokens
