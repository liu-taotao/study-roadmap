/**
 * 学习路线状态管理
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getRoutes, getRouteDetail } from '@/api/index.js'

export const useRouteStore = defineStore('route', () => {
  const routes = ref([])           // 路线列表
  const currentRoute = ref(null)   // 当前查看的路线详情
  const loading = ref(false)
  const filters = ref({            // 当前筛选条件
    grade: null,
    type: null,
    subject: null,
    track: null
  })

  /** 获取路线列表（支持筛选） */
  async function fetchRoutes(params = {}) {
    loading.value = true
    try {
      const res = await getRoutes({ ...filters.value, ...params })
      routes.value = res.data
    } catch (err) {
      console.error('获取路线列表失败:', err)
    } finally {
      loading.value = false
    }
  }

  /** 获取路线详情 */
  async function fetchRouteDetail(routeId) {
    loading.value = true
    try {
      const res = await getRouteDetail(routeId)
      currentRoute.value = res.data
    } catch (err) {
      console.error('获取路线详情失败:', err)
    } finally {
      loading.value = false
    }
  }

  /** 设置筛选条件 */
  function setFilter(key, value) {
    filters.value[key] = value
  }

  /** 重置筛选条件 */
  function resetFilters() {
    filters.value = { grade: null, type: null, subject: null, track: null }
  }

  return {
    routes, currentRoute, loading, filters,
    fetchRoutes, fetchRouteDetail, setFilter, resetFilters
  }
})
