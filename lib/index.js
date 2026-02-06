import Firebug from './Firebug'
import Loading from './Loading'
import DizzyError from './DizzyError'
import TableEditor from './TableEditor'
import SnackbarMessages from './SnackbarMessages'
import Chart from './Chart'
import SumDisplay from './SumDisplay'
import SomDatePicker from './SomDatePicker'
import SumPricesDisplay from './SumPricesDisplay'
import ColorModeButton from './ColorModeButton'
import GlobalTheming, { ColorModeContext } from './GlobalTheming'
import SomEnergiaTheme from './SomEnergiaTheme'
import LocalStorage from './hooks/LocalStorage'
import messages from './services/messages'
import { registerSomEnergiaI18n } from './i18n'

export {
  Firebug,
  Loading,
  TableEditor,
  SnackbarMessages,
  Chart,
  DizzyError,
  SumDisplay,
  SomDatePicker,
  SumPricesDisplay,
  ColorModeButton,
  GlobalTheming,
  ColorModeContext,
  SomEnergiaTheme,
  LocalStorage,
  messages,
  registerSomEnergiaI18n
}

// FIXME: Compatibility
export default {
  Firebug,
  Loading,
  TableEditor,
  SnackbarMessages,
  Chart,
  SumDisplay,
  DizzyError,
  SomDatePicker,
  ColorModeButton,
  GlobalTheming,
  ColorModeContext,
  SomEnergiaTheme,
  LocalStorage,
  messages,
  registerSomEnergiaI18n
}

