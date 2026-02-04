import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next('/')
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router