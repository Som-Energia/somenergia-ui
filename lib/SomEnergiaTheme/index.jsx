import { createTheme, responsiveFontSizes } from "@mui/material"

import tokens from "../tokens"

// TODO: This list must be updated if standard MUI typographies change
const standardTypographies = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "caption",
  "button",
  "overline",
]

const customTypographies = ["pagetitle", "pagesubtitle", "homeButtons"]

export default function SomEnergiaTheme(isDarkMode) {
  const color = isDarkMode ? tokens.color.dark : tokens.color.light
  const theme = createTheme({
    typography: {
      fontFamily: tokens.fontFamily,
      // Custom variant for home page paragraphs
      homeButtons: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 1,
      },
      pagetitle: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1,
      },
      pagesubtitle: {
        fontSize: 20,
        //fontWeight: 800, // from style guide
        fontWeight: 700,
        lineHeight: 1,
      },
    },
    palette: {
      mode: isDarkMode ? "dark" : "light",
      //contrastThreshold: 0.2, // From webforms-ui
      contrastThreshold: 4.5, // Recommended by WCAG 2.1 Rule 1.4.3
      tonalOffset: 0.2,
      background: {
        default: color.background,
        paper: color.surface,
      },
      text: {
        primary: color.text,
        caption: color.textCaption,
      },
      primary: {
        main: color.primary,
        contrastText: color.onPrimary,
        dark: color.primaryHover,
      },
      secondary: {
        main: color.secondary,
      },
      accent: {
        main: color.accent,
      },
      pagetitle: {
        main: color.pageTitle,
      },
      table: {
        titleColor: color.table.title,
        contentLight: color.table.contentLight,
        contentDark: color.table.contentDark,
        line: color.table.line,
      },
      chartlines: {
        production: color.chart.production,
        foreseen: color.chart.foreseen,
      },
    },
  })
  return responsiveFontSizes(theme, {
    variants: standardTypographies.concat(customTypographies),
  })
}
