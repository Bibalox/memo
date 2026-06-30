import { createApp } from 'vue'

import App from './App.vue'
import router from './router.ts'
import { createPinia } from 'pinia'

import { setTheme } from '@utils/theme-manager.ts'
import { loadAssets } from '@utils/asset-loaded.ts'
import { useStore } from '@store'
import { initSupabase } from '@utils/supabase-helper.ts'
import { preventZoomOnDoubleTap } from '@utils/touch-management.ts'

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
  await initSupabase()
  await loadAssets()
}

init()
