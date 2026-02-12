import Firebug from './Firebug'
import Loading from './Loading'
import DizzyError from './DizzyError'
import TableEditor from './TableEditor'
import SnackbarMessages from './SnackbarMessages'
import Chart from './CurveChart'
import ConsumptionDisplay from './ConsumptionDisplay'
import SomDatePicker from './SomDatePicker'
import SummaryPricesDisplay from './SummaryPricesDisplay'
import ColorModeButton from './ColorModeButton'
import GlobalTheming, { ColorModeContext } from './GlobalTheming'
import SomEnergiaTheme from './SomEnergiaTheme'
import LocalStorage from './hooks/LocalStorage'
import messages from './services/messages'
import { registerSomEnergiaI18n } from './i18n'

// TODO: posible organization:
//                             import { Button } from '@somenergia/somenergia-ui'
//                             import { ConsumptionDisplay } from '@somenergia/somenergia-ui/energy'
export {
  Firebug,
  Loading,
  TableEditor,
  SnackbarMessages,
  Chart,
  DizzyError,
  ConsumptionDisplay,
  SomDatePicker,
  SummaryPricesDisplay,
  ColorModeButton,
  GlobalTheming,
  ColorModeContext,
  SomEnergiaTheme,
  LocalStorage,
  messages,
  registerSomEnergiaI18n
}

