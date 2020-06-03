import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

/* Layout */
import Layout from "@/views/layout/Layout"
import layoutLogin from "@/views/layoutLogin/layoutLogin"

export const defaultRoutes = [
  {
    path: "/",
    name: "home",
    component: Layout,
    redirect: "/index",
    meta: {
      title: "首页",
      icon: "chart",
    },
    children: [
      {
        path: "/index",
        component: () => import("@/views/Home/home"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: layoutLogin,
    children: [
      {
        path: "/login",
        component: () => import("@/views/layoutLogin/components/login"),
      },
    ],
    hidden: true,
  },
  {
    path: "/user",
    component: Layout,
    redirect: "/user/index",
    name: "user",
    meta: {
      title: "用户管理",
      icon: "chart",
    },
    children: [
      {
        path: "index",
        name: "usermange",
        meta: {
          title: "用户管理",
        },
        component: () => import("@/views/User/user"),
      },
      {
        path: "level",
        name: "level",
        meta: {
          title: "等级管理",
        },
        component: () => import("@/views/User/level"),
      },
    ],
  },
]

export const asyncRoutes = []

export default new Router({
  routes: defaultRoutes,
})
