<template>
  <!-- 学习路线卡片：路线概览信息，点击可跳转详情 -->
  <div class="route-card" @click="goDetail">
    <div class="route-card-header">
      <!-- 路线类型图标 -->
      <span class="route-type-icon">{{ typeIcon }}</span>
      <!-- 路线标题 -->
      <h3 class="route-title">{{ route.title }}</h3>
      <!-- 收藏按钮 -->
      <el-button
        :type="isFav ? 'warning' : 'default'"
        size="small"
        circle
        :icon="isFav ? StarFilled : Star"
        @click.stop="favStore.toggleFavorite(route.id)"
        title="收藏"
      />
    </div>

    <!-- 描述 -->
    <p class="route-desc">{{ route.description }}</p>

    <!-- 元数据行 -->
    <div class="route-meta">
      <span class="meta-badge">{{ route.subject }}</span>
      <span class="meta-badge">{{ route.routeTypeName }}</span>
      <span v-if="route.track" class="meta-badge track">{{ route.track }}</span>
      <span class="meta-badge count">{{ route.knowledgePoints?.length || 0 }} 个知识点</span>
    </div>

    <!-- 标签 -->
    <div v-if="route.tags?.length" class="route-tags">
      <span v-for="tag in route.tags" :key="tag" class="doc-tag">{{ tag }}</span>
    </div>

    <!-- 知识点预览（前5个） -->
    <div v-if="route.knowledgePoints?.length" class="kp-preview">
      <div class="kp-preview-title">包含知识点：</div>
      <div class="kp-preview-list">
        <span
          v-for="kp in route.knowledgePoints.slice(0, 5)"
          :key="kp.id"
          class="kp-preview-item"
          :class="{ 'is-key': kp.importance >= 2 }"
        >
          {{ kp.name }}
        </span>
        <span v-if="route.knowledgePoints.length > 5" class="kp-more">
          ...等{{ route.knowledgePoints.length }}个
        </span>
      </div>
    </div>

    <!-- 底部操作 -->
    <div class="route-card-footer">
      <el-button type="primary" size="small" @click.stop="goDetail">
        查看完整路线 →
      </el-button>
    </div>
  </div>
</template>

<script setup>
/**
 * RouteCard - 学习路线卡片组件
 * 展示路线概览，用于年级详情页的路线列表
 */
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Star, StarFilled } from '@element-plus/icons-vue'
import { useFavoriteStore } from '@/stores/favorite'

const props = defineProps({
  route: { type: Object, required: true }
})

const router = useRouter()
const favStore = useFavoriteStore()

// 路线类型对应的图标
const typeIcon = computed(() => {
  const icons = { sync: '📘', advance: '🚀', exam: '🎯' }
  return icons[props.route.routeType] || '📖'
})

// 是否已收藏
const isFav = computed(() => favStore.isFavorited(props.route.id))

function goDetail() {
  router.push(`/route/${props.route.id}`)
}
</script>

<style scoped>
.route-card {
  border: 1px solid var(--doc-border);
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 16px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
}
.route-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transform: translateY(-1px);
}
.route-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.route-type-icon {
  font-size: 22px;
}
.route-title {
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  color: var(--doc-title);
  margin: 0;
}
.route-desc {
  color: var(--doc-text);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 12px;
}
.route-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.meta-badge {
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  background: var(--doc-tag-bg);
  color: var(--doc-primary);
  font-weight: 500;
}
.meta-badge.track {
  background: #f0fdf4;
  color: #16a34a;
}
.meta-badge.count {
  background: #f5f5f5;
  color: var(--doc-muted);
}
.route-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.kp-preview {
  padding: 10px 12px;
  background: var(--doc-sidebar);
  border-radius: 6px;
  margin-bottom: 14px;
}
.kp-preview-title {
  font-size: 12px;
  color: var(--doc-muted);
  margin-bottom: 6px;
}
.kp-preview-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.kp-preview-item {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background: #fff;
  color: var(--doc-text);
  border: 1px solid var(--doc-border);
}
.kp-preview-item.is-key {
  color: var(--doc-hot-text);
  border-color: #fecaca;
}
.kp-more {
  font-size: 12px;
  color: var(--doc-muted);
  align-self: center;
}
.route-card-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
