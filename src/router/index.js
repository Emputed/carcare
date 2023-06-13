import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import CotiView from '../views/CotiView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Form',
    name: 'FormView',
    component: FormView
  },
  {
    path: '/Cotizacion',
    name: 'CotiView',
    component: CotiView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
