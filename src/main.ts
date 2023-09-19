import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

import { registerServices } from './services/service.registrator'
import { serviceContainer } from './services/service.container'

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import '@/assets/styles/main.scss'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createI18n } from 'vue-i18n'
import { loadLocaleMessages } from '@/plugins/i18n'

const app = createApp(App)

export const defaultLanguage = 'nl'
export const i18n = createI18n({ locale: defaultLanguage, legacy: false })
loadLocaleMessages(i18n, defaultLanguage).then(() => {
  app.use(ToastService)
  app.use(createPinia())
  app.use(router)
  app.use(PrimeVue)
  app.use(i18n)

  app.directive('tooltip', Tooltip)

  registerServices(serviceContainer, app)

  app.mount('#app')
})
