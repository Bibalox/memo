import { createApp } from 'vue'

import App from './App.vue'
import router from './router.ts'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'

import { useStore } from '@store'
import { loadAssets } from '@utils/assets.ts'
import { setTheme } from '@utils/theme.ts'
import { preventZoomOnDoubleTap } from '@utils/touch.ts'

registerSW({
  immediate: true,
})

const app = createApp(App)
const pinia = createPinia()

app
  .use(router)
  .use(pinia)
  .mount('#app')

const store = useStore()

const init = async () => {
  preventZoomOnDoubleTap()
  setTheme()
  store.watchOnlineStatus()
  store.initializeAuth()
  await loadAssets()
}

init()
