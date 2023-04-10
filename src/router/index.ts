import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由
const routes = [
  { path: '/', component: import('@/views/Layout.vue'), redirect: '/index', children: [{ path: '/index', component: import('@/views/Index.vue') }] },
  //   { path: '/about', component: About },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
