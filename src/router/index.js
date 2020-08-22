import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/networkInquiry',
    name: 'NetworkInquiry',
    component: () => import('../views/networkInquiry/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
