/**
 * API 请求层 —— 封装所有后端接口调用
 * 使用 axios 进行 HTTP 通信
 */

import axios from 'axios'

// 创建 axios 实例，配置基础地址
const http = axios.create({
  baseURL: '/api',        // Vite 代理转发到后端 localhost:3001
  timeout: 10000,         // 10秒超时
  headers: {
    'Content-Type': 'application/json'
  }
})

// 响应拦截器：统一错误处理
http.interceptors.response.use(
  response => response.data,   // 直接返回 data 部分
  error => {
    console.error('API请求失败:', error.message)
    return Promise.reject(error)
  }
)

// ==================== 年级接口 ====================

/** 获取所有年级列表 */
export function getGrades() {
  return http.get('/grades')
}

/** 获取单个年级详情（含路线统计） */
export function getGradeDetail(gradeId) {
  return http.get(`/grades/${gradeId}`)
}

// ==================== 学习路线接口 ====================

/** 获取学习路线列表（支持筛选参数） */
export function getRoutes(params = {}) {
  return http.get('/routes', { params })
}

/** 获取单条路线详情（含知识点+素材） */
export function getRouteDetail(routeId) {
  return http.get(`/routes/${routeId}`)
}

// ==================== B站素材接口 ====================

/** 获取素材列表 */
export function getMaterials(params = {}) {
  return http.get('/materials', { params })
}

// ==================== 收藏接口 ====================

/** 获取收藏列表 */
export function getFavorites() {
  return http.get('/favorites')
}

/** 添加收藏 */
export function addFavorite(routeId) {
  return http.post('/favorites', { routeId })
}

/** 取消收藏 */
export function removeFavorite(routeId) {
  return http.delete(`/favorites/${routeId}`)
}

// ==================== 学习进度接口 ====================

/** 获取全部学习进度 */
export function getAllProgress() {
  return http.get('/progress')
}

/** 获取指定路线的学习进度 */
export function getRouteProgress(routeId) {
  return http.get(`/progress/${routeId}`)
}

/** 更新知识点学习状态 */
export function updateProgress(knowledgePointId, status) {
  return http.post('/progress', { knowledgePointId, status })
}

// ==================== 搜索接口 ====================

/** 全局搜索 */
export function search(keyword, filters = {}) {
  return http.get('/search', { params: { q: keyword, ...filters } })
}

export default http
