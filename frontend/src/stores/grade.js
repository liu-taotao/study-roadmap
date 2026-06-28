/**
 * 年级状态管理
 * 管理当前选中的年级、年级列表、年级筛选等状态
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getGrades, getGradeDetail } from '@/api/index.js'

export const useGradeStore = defineStore('grade', () => {
  // ========== 状态 ==========
  const grades = ref([])              // 所有年级列表
  const currentGradeId = ref(null)    // 当前选中的年级ID
  const currentGrade = ref(null)      // 当前年级详情数据
  const loading = ref(false)

  // ========== 计算属性 ==========

  /** 按学段分组 */
  const gradesByStage = computed(() => {
    const groups = { primary: [], junior: [], senior: [] }
    grades.value.forEach(g => {
      if (groups[g.stage]) groups[g.stage].push(g)
    })
    return groups
  })

  /** 学段中文名映射 */
  const stageNames = { primary: '小学', junior: '初中', senior: '高中' }

  // ========== 方法 ==========

  /** 获取所有年级列表 */
  async function fetchGrades() {
    loading.value = true
    try {
      const res = await getGrades()
      grades.value = res.data
    } catch (err) {
      console.error('获取年级列表失败:', err)
    } finally {
      loading.value = false
    }
  }

  /** 获取并设置当前年级 */
  async function fetchGradeDetail(gradeId) {
    loading.value = true
    currentGradeId.value = gradeId
    try {
      const res = await getGradeDetail(gradeId)
      currentGrade.value = res.data
    } catch (err) {
      console.error('获取年级详情失败:', err)
    } finally {
      loading.value = false
    }
  }

  /** 切换年级 */
  function selectGrade(gradeId) {
    if (currentGradeId.value !== gradeId) {
      fetchGradeDetail(gradeId)
    }
  }

  return {
    grades, currentGradeId, currentGrade, loading,
    gradesByStage, stageNames,
    fetchGrades, fetchGradeDetail, selectGrade
  }
})
