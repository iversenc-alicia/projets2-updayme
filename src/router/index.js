import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Td01View from '../views/Td01View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',        name: 'HomeView',      component: HomeView },
    { path: '/td01',    name: 'Td01View',      component: Td01View },
  ]
})

export default router


