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
      path: '/note',
      name: 'write-note',
      component: NotePage,
      props: { mode: 'write' },
      meta: { withToolbar: true }
    },
    {
      path: '/note',
      name: 'read-note',
      component: NotePage,
      props: { mode: 'read' },
      meta: { withToolbar: true }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
