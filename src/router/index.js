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
        component: () => import("@/views/Home/Home"),
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
        name: "member",
        meta: {
          title: "会员管理",
        },
        component: () => import("@/views/User/Member"),
      },
      {
        path: "mentionMoney",
        name: "mentionMoney",
        meta: {
          title: "提币管理",
        },
        component: () => import("@/views/User/MentionMoney"),
      },
      {
        path: "invitation",
        name: "invitation",
        meta: {
          title: "邀请管理",
        },
        component: () => import("@/views/User/Invitation"),
      },
    ],
  },
  
]

export const asyncRoutes = []

export default new Router({
  routes: defaultRoutes,
})
