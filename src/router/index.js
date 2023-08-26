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
  },
  {
    path: "/loan-approve",
    component: () => import('@/layout/layout.vue'),
    redirect: "/loan-approve/first",
    meta: {
      roles: [
        "approve"
      ],
      title: "贷款审批"
    },
    children: [
      {
        path: "/loan-approve/first",
        component: () => import("@/views/loan-approve/first.vue"),
        name: "first",
        meta: {
          title: "初审"
        }
      },
      {
        path: "/loan-approve/end",
        component: () => import("@/views/loan-approve/end.vue"),
        name: "end",
        meta: {
          title: "终审"
        }
      }
    ]
  },
  {
    path: '/contract-manage',
    redirect: '/contract-manage/index',
    meta: {
      title: '合同管理'
    },
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        path: '/contract-manage/index',
        name: 'contract-manage',
        meta: {
          title: '合同列表'
        },
        component: () => import('@/views/contract-manage/IndexView.vue'),
      },
    ]
  },
  {
    path: "/permission",
    component: () => import('@/layout/layout.vue'),
    redirect: "/permission/create",
    meta: {
      title: "权限管理"
    },
    children: [
      {
        path: "/permission/create",
        component: () => import("@/views/permission/create.vue"),
        name: "create",
        meta: {
          title: "创建管理员"
        }
      },
      {
        path: "/permission/list",
        component: () => import("@/views/permission/list.vue"),
        name: "list",
        meta: {
          title: "列表展示"
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
