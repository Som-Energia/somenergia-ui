import { I18nextProvider } from 'react-i18next'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'

import SomEnergiaTheme from '../lib/SomEnergiaTheme'
import i18n from './i18next'

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
    // Decorator for i18n
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
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
