/**
 * Vue Router 路由配置
 * 页面路由：首页、年级详情、路线详情、搜索、收藏
 */

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // 首页：展示所有年级入口及推荐路线
    component: () => import('@/views/Home.vue'),
    meta: { title: '学习路线规划平台' }
  },
  {
    path: '/grade/:gradeId',
    name: 'GradeDetail',
    // 年级分类页：展示该年级下所有学习路线
    component: () => import('@/views/GradeDetail.vue'),
    meta: { title: '年级学习路线' }
  },
  {
    path: '/route/:routeId',
    name: 'RouteDetail',
    // 路线详情页：展示完整学习路线及知识点+B站素材
    component: () => import('@/views/RouteDetail.vue'),
    meta: { title: '学习路线详情' }
  },
  {
    path: '/search',
    name: 'Search',
    // 全局检索页
    component: () => import('@/views/Search.vue'),
    meta: { title: '全局检索' }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    // 我的收藏页
    component: () => import('@/views/Favorites.vue'),
    meta: { title: '我的收藏' }
  },
  {
    // 404 兜底
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // 切换页面时滚动到顶部
    return { top: 0 }
  }
})

// 全局路由守卫：动态设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '学习路线规划平台'
  next()
})

export default router
