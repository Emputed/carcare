import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
