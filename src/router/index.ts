import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由
const routes = [
  {
    path: '/',
    component: import('@/views/Layout.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: import('@/views/Index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/label',
        component: import('@/views/Labels.vue'),
        meta: {
          title: '标签体系',
        },
      },
      {
        path: '/malfunction',
        component: import('@/views/Malfunction.vue'),
        meta: {
          title: '事故报告',
        },
      },
      {
        path: '/information',
        component: import('@/views/Information.vue'),
        meta: {
          title: '消防咨询',
        },
      },
      {
        path: '/standard',
        component: import('@/views/Standard.vue'),
        meta: {
          title: '标准规范',
        },
      },
      {
        path: '/reserve',
        component: import('@/views/Reserve.vue'),
        meta: {
          title: '预案',
        },
      },
      {
        path: '/content',
        component: import('@/views/Content.vue'),
        meta: {
          title: '内容管理',
        },
      },
      {
        path: '/maldetail',
        component: import('@/views/MalDetail.vue'),
        meta: {
          title: '事故报告详情页',
        },
      },
      {
        path: '/detail',
        component: import('@/views/CommonDetail.vue'),
        meta: {
          title: '通用详情页',
        },
      },
    ],
  },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
