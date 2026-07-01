import { createApp } from 'vue'

import App from './App.vue'
import router from './router.ts'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'


registerSW({
  immediate: true,
})

const app = createApp(App)
const pinia = createPinia()

app
  .use(router)
  .use(pinia)
  .mount('#app')
