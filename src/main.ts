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

// Init functions
setTheme()
preventZoomOnDoubleTap()
store.watchOnlineStatus()
await store.initializeAuth()
await store.fetchData()
await loadAssets()

store.state.initialized = true
