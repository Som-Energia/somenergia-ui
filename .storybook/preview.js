import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import SomEnergiaTheme from '../lib/SomEnergiaTheme'
import '../lib/i18n'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        // Provide your custom themes here
        mui: createTheme(),
        'SomEnergia Light': SomEnergiaTheme(false),
        'SomEnergia Dark': SomEnergiaTheme(true),
      },
      defaultTheme: 'mui',
    }),
  ],
}

export default preview
