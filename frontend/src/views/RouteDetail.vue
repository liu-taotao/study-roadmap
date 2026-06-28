<template>
  <!-- 路线详情页：完整学习路线展示 + 知识点列表 + B站素材 + 悬浮目录 -->
  <div class="route-detail-page">
    <!-- 面包屑 -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- 加载状态 -->
    <div v-if="routeStore.loading" class="loading-state">
      <el-icon class="is-loading"><Loading /></el-icon>
      加载中...
    </div>

    <template v-else-if="routeStore.currentRoute">
      <!-- 路线标题区 -->
      <div class="route-header">
        <div class="route-header-top">
          <span class="route-type-badge" :class="routeTypeClass">
            {{ routeTypeLabel }}
          </span>
          <h1 class="doc-h1" style="border-bottom:none;margin-bottom:0;flex:1;">
            {{ routeStore.currentRoute.title }}
          </h1>
          <!-- 收藏按钮 -->
          <el-button
            :type="favStore.isFavorited(routeStore.currentRoute.id) ? 'warning' : 'default'"
            :icon="favStore.isFavorited(routeStore.currentRoute.id) ? StarFilled : Star"
            @click="favStore.toggleFavorite(routeStore.currentRoute.id)"
          >
            {{ favStore.isFavorited(routeStore.currentRoute.id) ? '已收藏' : '收藏' }}
          </el-button>
        </div>
        <p class="route-desc">{{ routeStore.currentRoute.description }}</p>
        <div class="route-meta-row">
          <span class="meta-item">{{ routeStore.currentRoute.gradeName }}</span>
          <span class="meta-sep">|</span>
          <span class="meta-item">{{ routeStore.currentRoute.subject }}</span>
          <span class="meta-sep">|</span>
          <span class="meta-item">{{ routeStore.currentRoute.knowledgePoints?.length || 0 }} 个知识点</span>
          <span v-if="routeStore.currentRoute.track" class="meta-sep">|</span>
          <span v-if="routeStore.currentRoute.track" class="meta-item track">{{ routeStore.currentRoute.track }}</span>
        </div>
        <!-- 进度条 -->
        <div v-if="progress" class="progress-bar-wrap">
          <div class="progress-info">
            <span>学习进度：{{ progress.percentage }}%</span>
            <span class="progress-detail">
              {{ progress.completed }}/{{ progress.total }} 已完成
            </span>
          </div>
          <el-progress
            :percentage="progress.percentage"
            :stroke-width="8"
            :color="progressColor"
          />
        </div>
        <!-- 标签 -->
        <div v-if="routeStore.currentRoute.tags?.length" class="route-tags">
          <span v-for="tag in routeStore.currentRoute.tags" :key="tag" class="doc-tag">{{ tag }}</span>
        </div>
      </div>

      <div class="doc-divider" />

      <!-- 思维导图 -->
      <MindMap :data="routeStore.currentRoute.mindMap" />

      <!-- 知识点列表 -->
      <h2 class="doc-h2">📋 知识点学习列表</h2>
      <div class="knowledge-list">
        <KnowledgeCard
          v-for="kp in routeStore.currentRoute.knowledgePoints"
          :key="kp.id"
          :kp="kp"
        />
      </div>
    </template>

    <div v-else class="empty-state">未找到该学习路线</div>

    <!-- 悬浮目录 -->
    <FloatingToc
      v-if="routeStore.currentRoute?.knowledgePoints"
      :items="tocItems"
    />
  </div>
</template>

<script setup>
/**
 * 路线详情页 - 最核心页面
 * 展示完整学习路线的所有知识点、B站视频素材、学习进度
 * 右侧悬浮目录对标 programmercarl.com
 */
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Loading, Star, StarFilled } from '@element-plus/icons-vue'
import { useRouteStore } from '@/stores/route'
import { useFavoriteStore } from '@/stores/favorite'
import { useProgressStore } from '@/stores/progress'
import Breadcrumb from '@/components/Breadcrumb.vue'
import MindMap from '@/components/MindMap.vue'
import KnowledgeCard from '@/components/KnowledgeCard.vue'
import FloatingToc from '@/components/FloatingToc.vue'

const route = useRoute()
const routeStore = useRouteStore()
const favStore = useFavoriteStore()
const progressStore = useProgressStore()
const progress = ref(null)

// 面包屑
const breadcrumbItems = computed(() => {
  const r = routeStore.currentRoute
  if (!r) return []
  return [
    { label: r.gradeName, path: `/grade/${r.gradeId}` },
    { label: r.title }
  ]
})

// 悬浮目录数据
const tocItems = computed(() => {
  return (routeStore.currentRoute?.knowledgePoints || []).map(kp => ({
    id: kp.id,
    name: kp.name,
    importance: kp.importance
  }))
})

// 路线类型样式
const routeTypeClass = computed(() => {
  const map = { sync: 'type-sync', advance: 'type-advance', exam: 'type-exam' }
  return map[routeStore.currentRoute?.routeType] || ''
})
const routeTypeLabel = computed(() => {
  return routeStore.currentRoute?.routeTypeName || ''
})

// 进度条颜色
const progressColor = computed(() => {
  const pct = progress.value?.percentage || 0
  if (pct >= 80) return '#22c55e'
  if (pct >= 40) return '#3b82f6'
  return '#e5e7eb'
})

// 加载数据
async function loadData(routeId) {
  await routeStore.fetchRouteDetail(routeId)
  await favStore.fetchFavorites()
  const res = await progressStore.fetchRouteProgress(routeId)
  progress.value = progressStore.currentRouteProgress
}

onMounted(() => {
  loadData(route.params.routeId)
})

watch(() => route.params.routeId, (newId) => {
  if (newId) loadData(newId)
})
</script>

<style scoped>
.route-detail-page {
  max-width: 860px;
}

.loading-state, .empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 60px 20px;
  color: var(--doc-muted);
}

/* ===== 路线标题区 ===== */
.route-header {
  margin-bottom: 8px;
}
.route-header-top {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.route-type-badge {
  padding: 3px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
}
.route-type-badge.type-sync { background: var(--doc-primary); }
.route-type-badge.type-advance { background: #8b5cf6; }
.route-type-badge.type-exam { background: #f59e0b; }

.route-desc {
  color: var(--doc-text);
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0 12px;
}
.route-meta-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  font-size: 13px;
  color: var(--doc-muted);
  margin-bottom: 16px;
}
.meta-sep {
  color: var(--doc-border);
}
.meta-item.track {
  color: #16a34a;
  font-weight: 500;
}
.route-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 12px;
}

/* ===== 进度条 ===== */
.progress-bar-wrap {
  margin-top: 14px;
  padding: 12px 16px;
  background: var(--doc-sidebar);
  border-radius: 8px;
}
.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--doc-text);
  margin-bottom: 8px;
}
.progress-detail {
  color: var(--doc-muted);
}

.knowledge-list {
  margin-top: 16px;
}
</style>
