import './tokens/colors.scss'
import './tokens/fonts.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Insert the icon board into the HTML file

fetch('assets/icons.svg')
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))


// Insert the logo into the HTML file

fetch('assets/logo.svg')
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))
