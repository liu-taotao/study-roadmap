/**
 * 收藏状态管理
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getFavorites, addFavorite, removeFavorite } from '@/api/index.js'

export const useFavoriteStore = defineStore('favorite', () => {
  const favorites = ref([])       // 收藏列表
  const favoriteIds = ref(new Set())  // 收藏的路线ID集合（快速判断是否已收藏）
  const loading = ref(false)

  /** 是否已收藏某条路线 */
  const isFavorited = computed(() => {
    return (routeId) => favoriteIds.value.has(routeId)
  })

  /** 获取收藏列表 */
  async function fetchFavorites() {
    loading.value = true
    try {
      const res = await getFavorites()
      favorites.value = res.data
      favoriteIds.value = new Set(res.data.map(f => f.routeId))
    } catch (err) {
      console.error('获取收藏列表失败:', err)
    } finally {
      loading.value = false
    }
  }

  /** 切换收藏状态 */
  async function toggleFavorite(routeId) {
    try {
      if (favoriteIds.value.has(routeId)) {
        await removeFavorite(routeId)
        favoriteIds.value.delete(routeId)
      } else {
        await addFavorite(routeId)
        favoriteIds.value.add(routeId)
      }
      // 重新拉取收藏列表以保持同步
      await fetchFavorites()
    } catch (err) {
      console.error('切换收藏失败:', err)
    }
  }

  return {
    favorites, favoriteIds, loading, isFavorited,
    fetchFavorites, toggleFavorite
  }
})
