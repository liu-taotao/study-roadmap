/**
 * 学习进度状态管理
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAllProgress, getRouteProgress, updateProgress } from '@/api/index.js'

export const useProgressStore = defineStore('progress', () => {
  const allProgress = ref([])           // 全部进度记录
  const currentRouteProgress = ref(null) // 当前路线的进度统计
  const progressMap = ref({})           // { knowledgePointId: status } 快速查询
  const loading = ref(false)

  /** 获取全部学习进度 */
  async function fetchAllProgress() {
    loading.value = true
    try {
      const res = await getAllProgress()
      allProgress.value = res.data
      // 构建快速查询映射
      const map = {}
      res.data.forEach(p => {
        map[p.knowledgePointId] = p.status
      })
      progressMap.value = map
    } catch (err) {
      console.error('获取学习进度失败:', err)
    } finally {
      loading.value = false
    }
  }

  /** 获取指定路线的进度 */
  async function fetchRouteProgress(routeId) {
    loading.value = true
    try {
      const res = await getRouteProgress(routeId)
      currentRouteProgress.value = res.data
    } catch (err) {
      console.error('获取路线进度失败:', err)
    } finally {
      loading.value = false
    }
  }

  /** 更新知识点学习状态 */
  async function setKnowledgeStatus(knowledgePointId, status) {
    try {
      await updateProgress(knowledgePointId, status)
      // 同步更新本地映射
      progressMap.value[knowledgePointId] = status
    } catch (err) {
      console.error('更新学习进度失败:', err)
    }
  }

  /** 获取某个知识点的状态 */
  function getStatus(knowledgePointId) {
    return progressMap.value[knowledgePointId] || 'not_started'
  }

  return {
    allProgress, currentRouteProgress, progressMap, loading,
    fetchAllProgress, fetchRouteProgress, setKnowledgeStatus, getStatus
  }
})
