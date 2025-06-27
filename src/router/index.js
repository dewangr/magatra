import { createRouter, createWebHistory } from 'vue-router'
import Wedding1 from '../views/Wedding1.vue'

const routes = [
  { path: '/' },
  {
    path: '/indra-rika/',
    name: 'Wedding1',
    component: Wedding1,
    props: true,
  },
  {
    path: '/',
    redirect: '/indra-rika/',
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
