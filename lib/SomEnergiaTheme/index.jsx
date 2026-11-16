import { createTheme, responsiveFontSizes } from "@mui/material"

import tokens from "@somenergia/design-tokens"

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
  const { text } = tokens
  // Standard alerts use the WCAG AA *-surface / *-text token pairs
  // instead of colors MUI derives from the base status color.
  const alertVariants = ["error", "warning", "success", "info"].map(
    (severity) => {
      const status = severity === "error" ? "danger" : severity
      return {
        props: { variant: "standard", severity },
        style: {
          backgroundColor: color[`${status}Surface`],
          color: color[`${status}Text`],
          "& .MuiAlert-icon": { color: color[status] },
        },
      }
    },
  )
  const theme = createTheme({
    components: {
      MuiAlert: {
        styleOverrides: { root: { variants: alertVariants } },
      },
    },
    shape: {
      // MUI multiplies borderRadius as a number of px
      borderRadius: parseFloat(tokens.radius.sm) * 16,
    },
    typography: {
      fontFamily: tokens.font.family,
      fontWeightRegular: tokens.font.weight.regular,
      fontWeightMedium: tokens.font.weight.medium,
      fontWeightBold: tokens.font.weight.bold,
      // Figma text styles from @somenergia/design-tokens
      h1: text.h1,
      h2: text.h2,
      h3: text.h3,
      h4: text.h4,
      h5: { ...text.h4, fontWeight: tokens.font.weight.medium },
      h6: text.label,
      subtitle1: text.label,
      subtitle2: { ...text.bodyS, fontWeight: tokens.font.weight.medium },
      body1: text.bodyM,
      body2: text.bodyS,
      caption: text.bodyXs,
      button: text.buttonM,
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
      divider: color.border,
      text: {
        primary: color.text,
        secondary: color.textMuted,
        caption: color.textCaption,
      },
      error: {
        main: color.danger,
        light: color.dangerSurface,
        dark: color.dangerText,
      },
      warning: {
        main: color.warning,
        light: color.warningSurface,
        dark: color.warningText,
      },
      success: {
        main: color.success,
        light: color.successSurface,
        dark: color.successText,
      },
      info: {
        main: color.info,
        light: color.infoSurface,
        dark: color.infoText,
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
