import { createI18n } from 'vue-i18n'

import en from './en.json'
import kh from './kh.json'
import fr from './fr.json'

const i18n = createI18n({
  legacy: false, // important for Vue 3 Composition API
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    kh,
    fr,
  },
})

export default i18n
