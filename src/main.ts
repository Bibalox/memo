import { createApp } from 'vue'

import App from './App.vue'
import router from './router.ts'
import { createPinia } from 'pinia'

import { useStore } from '@store'
import { loadAssets } from '@utils/asset-loaded.ts'
import { setTheme } from '@utils/theme-manager.ts'
import { preventZoomOnDoubleTap } from '@utils/touch-management.ts'
import { initServiceworker } from '@utils/servce-worker-helper.ts'
import { initSupabase } from '@utils/supabase-helper.ts'

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
  initServiceworker()
  store.watchOnlineStatus()
  await initSupabase()
  await loadAssets()
}

init()
