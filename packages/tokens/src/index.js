// Design tokens: the single source of truth for Som Energia styles.
//
// @somenergia/somenergia-ui builds its MUI theme from these values and
// scripts/build-css.js turns them into dist/tokens.css
// (as --som-* CSS custom properties) for projects without MUI.
//
// Values must be literal (no var(...)) because MUI color helpers
// such as alpha() or getContrastText() need to parse them.

const fontFamily = '"Outfit", "Helvetica", "Arial", sans-serif'

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

const lightColor = {
  primary: "#c5f47c",
  primaryHover: "#b6e471",
  onPrimary: "#0B2E34",
  secondary: "#c4c4c4",
  accent: "#ff632b",
  text: "#4d4d4d",
  textCaption: "#0B2E34",
  textMuted: "#616161",
  pageTitle: "#4d4d4d",
  background: "#fff",
  surface: "#fff",
  table: {
    title: "rgb(150,182,51,0.7)",
    contentLight: "rgba(0, 0, 0, 0.03)",
    contentDark: "#1A2027",
    line: "#8080804a",
  },
  chart: {
    production: "#96b633",
    foreseen: "#f2970f",
    grid: "#616161",
    gridSoft: "#cccccc",
    axisLabel: "#969696",
    cursor: "#f2f2f2bb",
    tooltipTitle: "#585857",
  },
}

const darkColor = {
  ...lightColor,
  text: "#bdbdbd",
  background: "#121212",
  surface: "#121212",
}

const tokens = {
  fontFamily,
  radius,
  space,
  color: {
    light: lightColor,
    dark: darkColor,
  },
}

export default tokens
