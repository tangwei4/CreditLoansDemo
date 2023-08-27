import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import store from '@/store'
Vue.use(VueRouter)

// 避免刷线时路由消失的问题
if (localStorage.getItem('token')) {
  store.dispatch('getMenuList')
}


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
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
