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
    component: () => import('@/layout/layout.vue'),//懒加载
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
