<template>
  <!-- 我的收藏页 -->
  <div class="favorites-page">
    <Breadcrumb :items="[{ label: '我的收藏' }]" />

    <div class="page-header">
      <h1 class="doc-h1">⭐ 我的收藏</h1>
      <span class="fav-count">共 {{ favStore.favorites.length }} 条收藏</span>
    </div>

    <!-- 加载中 -->
    <div v-if="favStore.loading" class="loading-state">
      <el-icon class="is-loading"><Loading /></el-icon>
      加载中...
    </div>

    <!-- 收藏列表 -->
    <div v-else-if="favStore.favorites.length > 0" class="fav-list">
      <div
        v-for="fav in favStore.favorites"
        :key="fav.id"
        class="fav-item"
      >
        <div class="fav-main" @click="goRoute(fav.routeId)">
          <div class="fav-header">
            <span class="fav-type-badge" :class="`badge-${fav.route?.routeType}`">
              {{ routeTypeLabel(fav.route?.routeType) }}
            </span>
            <h3 class="fav-title">{{ fav.route?.title }}</h3>
          </div>
          <div class="fav-meta">
            <span>{{ fav.route?.gradeName }}</span>
            <span class="meta-sep">·</span>
            <span>{{ fav.route?.subject }}</span>
            <span class="meta-sep">·</span>
            <span>{{ fav.route?.knowledgePoints?.length || 0 }}个知识点</span>
            <span v-if="fav.route?.track" class="meta-sep">·</span>
            <span v-if="fav.route?.track" class="track-label">{{ fav.route.track }}</span>
          </div>
          <p v-if="fav.route?.description" class="fav-desc">{{ fav.route.description }}</p>
          <div class="fav-tags">
            <span v-for="tag in (fav.route?.tags || [])" :key="tag" class="doc-tag">{{ tag }}</span>
          </div>
        </div>
        <div class="fav-actions">
          <el-button size="small" type="primary" @click="goRoute(fav.routeId)">
            查看详情
          </el-button>
          <el-button size="small" type="danger" plain @click="handleRemove(fav.routeId)">
            取消收藏
          </el-button>
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-else class="empty-state">
      <div class="empty-icon">📭</div>
      <p>还没有收藏任何学习路线</p>
      <p class="empty-hint">浏览学习路线时，点击⭐按钮即可收藏</p>
      <el-button type="primary" @click="$router.push('/')">去浏览路线</el-button>
    </div>
  </div>
</template>

<script setup>
/**
 * 我的收藏页
 * 展示用户收藏的所有学习路线，支持取消收藏和跳转详情
 */
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Loading } from '@element-plus/icons-vue'
import { useFavoriteStore } from '@/stores/favorite'
import Breadcrumb from '@/components/Breadcrumb.vue'

const router = useRouter()
const favStore = useFavoriteStore()

const routeTypeLabels = { sync: '课内同步', advance: '培优拓展', exam: '考前冲刺' }
function routeTypeLabel(type) { return routeTypeLabels[type] || type }

function goRoute(routeId) {
  router.push(`/route/${routeId}`)
}

async function handleRemove(routeId) {
  await favStore.toggleFavorite(routeId)
}

onMounted(() => {
  favStore.fetchFavorites()
})
</script>

<style scoped>
.favorites-page {
  max-width: 860px;
}

.page-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 20px;
}
.fav-count {
  font-size: 14px;
  color: var(--doc-muted);
}

.loading-state, .empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--doc-muted);
}
.empty-icon {
  font-size: 48px;
  margin-bottom: 12px;
}
.empty-hint {
  font-size: 13px;
  margin-bottom: 16px;
}

/* ===== 收藏列表 ===== */
.fav-item {
  border: 1px solid var(--doc-border);
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 14px;
  background: #fff;
  transition: box-shadow 0.2s;
}
.fav-item:hover {
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.fav-main {
  cursor: pointer;
}
.fav-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.fav-type-badge {
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 11px;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
}
.fav-type-badge.badge-sync { background: var(--doc-primary); }
.fav-type-badge.badge-advance { background: #8b5cf6; }
.fav-type-badge.badge-exam { background: #f59e0b; }
.fav-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--doc-title);
  margin: 0;
}
.fav-meta {
  font-size: 13px;
  color: var(--doc-muted);
  margin-bottom: 8px;
}
.meta-sep {
  margin: 0 4px;
  color: var(--doc-border);
}
.track-label {
  color: #16a34a;
  font-weight: 500;
}
.fav-desc {
  font-size: 13px;
  color: var(--doc-text);
  line-height: 1.5;
  margin-bottom: 10px;
}
.fav-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.fav-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding-top: 12px;
  border-top: 1px solid var(--doc-sidebar);
}
</style>
