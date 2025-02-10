import { createRouter, createWebHistory } from 'vue-router'
import CardDetailComponent from '@/components/CardDetail.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card/:id',
    name: 'CardDetail',
    component: CardDetailComponent
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
