import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
import LayoutLogin from '@/views/LayoutLogin/LayoutLogin'


export const defaultRoutes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'chart'
    },
    children: [{
      path: '/index',
      component: () => import('@/views/Home/home'),
    },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LayoutLogin,
    children: [{
      path: '/login',
      component: () => import('@/views/LayoutLogin/components/login'),
    },
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user',
    name:'user',
    meta: {
      title: '用户管理',
      icon: 'chart'
    },
    children: [{
      path: '/user',
      name: 'usermange',
      meta: {
        title: '用户管理',
      },
      component: () => import('@/views/User/user'),
    },
    {
      path: '/level',
      name: 'level',
      meta: {
        title: '等级管理',
      },
      component: () => import('@/views/User/level'),
    }
    ]
  }
]

export const asyncRoutes = [

]

export default new Router({
  routes: defaultRoutes
}) 