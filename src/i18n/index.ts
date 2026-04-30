import { createI18n } from 'vue-i18n'

import en from './en.json'
import km from './kh.json'

const i18n = createI18n({
  legacy: false, // important for Vue 3 Composition API
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    km
  }
})

export default i18n