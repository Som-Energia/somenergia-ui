// This module controls the global theme and its light
// and dark modes.

import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import SomEnergiaTheme from '../SomEnergiaTheme'
import useLocalStorage from '../hooks/LocalStorage'

const ColorModeContext = React.createContext({
  current: null,
  set: (value) => {},
  toggle: () => {},
})

/**
 * GlobalTheme is a wrapper to be used at top level of the application
 * before rendering anything that should be styled.
 *
 * - It applies the global css reset with CssBaseline.
 * - It activates the SomEnergiaTheme or any other provided,
 * - It provides a context, ColorModeContext, to switch among
 *   color light and dark modes and syncs it among all the tabs
 *   of the browser.
 */
function GlobalTheme({ children, customTheme }) {
  const [colorMode, setColorMode] = useLocalStorage('colorMode', null)
  const colorModeContext = React.useMemo(
    () => ({
      current: colorMode,
      set: (value) => {
        setColorMode(value)
      },
      toggle: () => {
        if (colorMode === 'dark') return setColorMode('light')
        if (colorMode === 'light') return setColorMode(null)
        return setColorMode('dark')
      },
    }),
    [colorMode],
  )

  const darkModeMediaQuery = useMediaQuery('(prefers-color-scheme: dark)')
  const isDarkMode = colorMode === 'dark' || (colorMode === null && darkModeMediaQuery)
  const theme = React.useMemo(() => (customTheme ?? SomEnergiaTheme)(isDarkMode), [isDarkMode, customTheme])

  return (
    <ColorModeContext.Provider value={colorModeContext}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default GlobalTheme
export { ColorModeContext }
