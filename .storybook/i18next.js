import "dayjs/locale/gl"
import "dayjs/locale/eu"
import "dayjs/locale/es"
import "dayjs/locale/ca"

import { initReactI18next } from "react-i18next"

import i18n from "i18next"

import {
  registerSomEnergiaI18n,
  somenergiaLibLocaleResources,
} from "../lib/i18n"

i18n.use(initReactI18next).init({
  fallbackLng: "es",
  interpolation: { escapeValue: false },
  resources: somenergiaLibLocaleResources,
  detection: {
    order: ["path", "navigator"],
    lookupFromPathIndex: 0,
  },
})

registerSomEnergiaI18n(i18n)

export default i18n
