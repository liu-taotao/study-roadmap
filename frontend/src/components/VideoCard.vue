<template>
  <!-- B站视频推荐卡片 -->
  <div class="video-card">
    <div class="video-header">
      <span class="video-icon">▶</span>
      <div class="video-info">
        <a :href="material.videoUrl" target="_blank" class="video-title" :title="material.title">
          {{ material.title }}
        </a>
        <div class="video-meta">
          <span class="meta-item">
            <el-icon><User /></el-icon>
            {{ material.up主 }}
          </span>
          <span class="meta-item">
            <el-icon><Clock /></el-icon>
            {{ material.duration }}
          </span>
          <span class="meta-item">
            <el-icon><UserFilled /></el-icon>
            {{ material.suitableFor }}
          </span>
        </div>
      </div>
      <div class="video-rating">
        <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= material.rating }">★</span>
      </div>
    </div>
    <p v-if="material.description" class="video-desc">{{ material.description }}</p>
    <div class="video-footer">
      <span v-for="tag in material.tags" :key="tag" class="doc-tag">{{ tag }}</span>
      <a :href="material.videoUrl" target="_blank" class="video-link-btn">
        去B站观看 →
      </a>
    </div>
  </div>
</template>

<script setup>
/**
 * VideoCard - B站视频素材卡片
 * 展示UP主、标题、时长、适用人群、评分、标签
 */
import { User, Clock, UserFilled } from '@element-plus/icons-vue'

defineProps({
  material: {
    type: Object,
    required: true,
    // { title, up主, videoUrl, description, duration, rating, suitableFor, tags }
  }
})
</script>

<style scoped>
.video-card {
  border: 1px solid var(--doc-border);
  border-radius: 8px;
  padding: 14px 16px;
  margin-bottom: 10px;
  background: #fafbfc;
  transition: box-shadow 0.2s;
}
.video-card:hover {
  box-shadow: 0 1px 8px rgba(0,0,0,0.06);
}
.video-header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.video-icon {
  font-size: 18px;
  color: #fb7299;
  margin-top: 2px;
}
.video-info {
  flex: 1;
  min-width: 0;
}
.video-title {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--doc-title);
  line-height: 1.4;
  margin-bottom: 4px;
}
.video-title:hover {
  color: #fb7299;
}
.video-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  color: var(--doc-muted);
}
.meta-item .el-icon {
  font-size: 13px;
}
.video-rating {
  flex-shrink: 0;
}
.star {
  font-size: 13px;
  color: #e5e7eb;
}
.star.filled {
  color: #f59e0b;
}
.video-desc {
  margin-top: 8px;
  font-size: 13px;
  color: var(--doc-text);
  line-height: 1.5;
}
.video-footer {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.video-link-btn {
  margin-left: auto;
  font-size: 12px;
  color: #fb7299;
  text-decoration: none;
  font-weight: 500;
}
.video-link-btn:hover {
  text-decoration: underline;
}
</style>
