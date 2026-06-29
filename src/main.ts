import { createApp } from 'vue'
import App from './App.vue'
import router from './router.ts'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app
  .use(router)
  .use(pinia)
  .mount('#app')


// Prevent double-tap zoom on Safari for iOS

let lastTouchEnd = 0

document.addEventListener(
  'touchend',
  (event) => {
    const now = Date.now()

    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }

    lastTouchEnd = now
  },
  { passive: false },
)


// Insert the icon board into the HTML file

fetch('/assets/icons.svg')
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))


// Insert the logo into the HTML file

fetch('/assets/logo.svg')
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))


// Set the theme

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
document.documentElement.setAttribute('data-theme', systemTheme)
