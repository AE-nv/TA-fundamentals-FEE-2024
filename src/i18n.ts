import { createI18n } from 'vue-i18n'

export const defaultLanguage = 'en'
export const i18n = createI18n({
  locale: defaultLanguage,
  fallbackLocale: defaultLanguage,
  legacy: false,
  allowComposition: true,
})
