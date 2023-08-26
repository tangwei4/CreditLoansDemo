import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: LoginView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')//懒加载
  },
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页'
    },
    component: () => import('@/layout/layout.vue'),//懒加载
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      }
    ]
  },
  {
    path: '/loan',
    redirect: '/loan-input/index',
    component: () => import('@/layout/layout.vue'),//懒加载
    children: [
      {
        meta: {
          title: '贷款申请'
        },
        path: '/loan-input/index',
        name: '/loan-input',
        component: () => import('@/views/loan/IndexView.vue'),
      }
    ]
  },
  {
    path: "/application-manager",
    component: () => import('@/layout/layout.vue'),
    redirect: "/application-manager/index",
    meta: {
      roles: [
        "input"
      ],
      title: "申请管理"
    },
    children: [
      {
        path: "/application-manager/index",
        component: () => import("@/views/application-manager/index.vue"),
        name: "/application-manager",
        meta: {
          title: "申请列表"
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
