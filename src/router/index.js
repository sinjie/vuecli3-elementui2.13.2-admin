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
  {
    path: "/order",
    component: Layout,
    redirect: "/order/index",
    name: "order",
    meta: {
      title: "订单管理",
      icon: "chart",
    },
    children: [
      {
        path: "index",       
        component: () => import("@/views/Order/Order"),
      }    
    ],
  },
  {
    path: "/product",
    component: Layout,
    redirect: "/product/index",
    name: "product",
    meta: {
      title: "产品管理",
      icon: "chart",
    },
    children: [
      {
        path: "index",
        name: "productList",
        meta: {
          title: "产品列表",
        },
        component: () => import("@/views/Product/ProductList"),
      },
      {
        path: "productPutaway",
        name: "ProductPutaway",
        meta: {
          title: "产品上架",
        },
        component: () => import("@/views/Product/ProductPutaway"),
      }      
    ],
  },
  {
    path: "/generalize",
    component: Layout,
    redirect: "/generalize/index",
    name: "generalize",
    meta: {
      title: "推广管理",
      icon: "chart",
    },
    children: [
      {
        path: "index",
        name: "marketing",
        meta: {
          title: "营销管理",
        },
        component: () => import("@/views/Generalize/Marketing"),
      },
      {
        path: "advertising",
        name: "advertising",
        meta: {
          title: "广告管理",
        },
        component: () => import("@/views/Generalize/Advertising"),
      },
      {
        path: "information",
        name: "information",
        meta: {
          title: "消息管理",
        },
        component: () => import("@/views/Generalize/Information"),
      },
      {
        path: "discountCoupon",
        name: "discountCoupon",
        meta: {
          title: "优惠券管理",
        },
        component: () => import("@/views/Generalize/DiscountCoupon"),
      },
      {
        path: "shareWeChat",
        name: "shareWeChat",
        meta: {
          title: "分享微信设置",
        },
        component: () => import("@/views/Generalize/ShareWeChat"),
      },     
    ],
  },
  {
    path: "/systemSettings",
    component: Layout,
    redirect: "/systemSettings/index",
    name: "systemSettings",
    meta: {
      title: "系统设置",
      icon: "chart",
    },
    children: [
      {
        path: "index",
        name: "administrator",
        meta: {
          title: "管理员",
        },
        component: () => import("@/views/SystemSettings/Administrator"),
      },
      {
        path: "role",
        name: "role",
        meta: {
          title: "角色管理",
        },
        component: () => import("@/views/SystemSettings/Role"),
      },
      {
        path: "operationLog",
        name: "operationLog",
        meta: {
          title: "操作日志",
        },
        component: () => import("@/views/SystemSettings/OperationLog"),
      }      
    ],
  },
  {
    path: "/statisticalStatement",
    component: Layout,
    redirect: "/statisticalStatement/index",
    name: "statisticalStatement",
    meta: {
      title: "统计报表",
      icon: "chart",
    },
    children: [
      {
        path: "index",
        name: "platformEarnings",
        meta: {
          title: "平台收益",
        },
        component: () => import("@/views/StatisticalStatement/PlatformEarnings"),
      },
      {
        path: "productEarnings",
        name: "productEarnings",
        meta: {
          title: "产品收益",
        },
        component: () => import("@/views/StatisticalStatement/ProductEarnings"),
      },
      {
        path: "userEarnings",
        name: "userEarnings",
        meta: {
          title: "用户收益",
        },
        component: () => import("@/views/StatisticalStatement/UserEarnings"),
      }, 
      {
        path: "waterSubsidiary",
        name: "waterSubsidiary",
        meta: {
          title: "流水明细",
        },
        component: () => import("@/views/StatisticalStatement/WaterSubsidiary"),
      }     
    ],
  },
]

export const asyncRoutes = []

export default new Router({
  routes: defaultRoutes,
})
