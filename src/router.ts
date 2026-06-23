import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@pages/HomePage.vue'
import NotePage from '@pages/NotePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/note/:id/:mode',
      component: NotePage,
      meta: { withToolbar: true }
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router