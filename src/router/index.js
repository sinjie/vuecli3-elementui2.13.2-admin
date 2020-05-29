import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const defaultRoutes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import ('@/views/Home/home'),
  }
]

export const asyncRoutes = [

]

export default new Router({
  routes: defaultRoutes
}) 