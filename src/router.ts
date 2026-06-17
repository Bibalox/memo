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
      props: { mode: 'write' }
    },
    {
      path: '/note',
      name: 'read-note',
      component: NotePage,
      props: { mode: 'read' }
    },
  ],
})

export default router
