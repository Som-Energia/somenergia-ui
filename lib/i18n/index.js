import { useTranslation as useTranslationReact } from "react-i18next"

const translationsImport = import.meta.glob("./locale-*.yaml", { eager: true })

/**
 * Lib locale translations array
 */
export const somenergiaLibLocaleResources = Object.fromEntries(
  Object.keys(translationsImport).map((file) => {
    const code = file.slice("./locale-".length, -".yaml".length)
    return [code, translationsImport[file].default]
  }),
)

/**
 * Internal lib useTranslation hook. Use the uniq lib namespace 'somenergia-ui'.
 */
export function useTranslation(ns = "somenergia-ui", options = {}) {
  return useTranslationReact(ns, options)
}

/**
 * Add all somenergia-ui lib translations to project i18n instance.
 * These translations puts inside namespace 'somenergia-ui'
 */
export function registerSomEnergiaI18n(i18nInstance) {
  Object.entries(somenergiaLibLocaleResources).forEach(([lang, bundle]) => {
    i18nInstance.addResourceBundle(lang, "somenergia-ui", bundle, true, true)
  })
}
