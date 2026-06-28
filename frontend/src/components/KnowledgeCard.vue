<template>
  <!-- 知识点卡片：展示名称、描述、标签、学习状态、重难点标记 -->
  <div
    class="knowledge-card"
    :class="{ 'is-important': kp.importance === 3, 'is-completed': status === 'completed' }"
    :id="`kp-${kp.id}`"
  >
    <div class="kp-header">
      <!-- 序号 -->
      <span class="kp-order">{{ kp.order }}</span>

      <!-- 知识点名称 -->
      <span class="kp-name">{{ kp.name }}</span>

      <!-- 重难点标记 -->
      <span v-if="kp.importance === 3" class="badge-important">核心考点</span>
      <span v-else-if="kp.importance === 2" class="badge-key">重点</span>

      <!-- 学习状态切换 -->
      <div class="kp-status">
        <el-select
          :model-value="status"
          size="small"
          class="status-select"
          @change="handleStatusChange"
          placeholder="状态"
        >
          <el-option label="未开始" value="not_started" />
          <el-option label="学习中" value="in_progress" />
          <el-option label="已完成" value="completed" />
        </el-select>
      </div>
    </div>

    <!-- 知识点描述 -->
    <p v-if="kp.description" class="kp-desc">{{ kp.description }}</p>

    <!-- 标签 -->
    <div v-if="kp.tags?.length" class="kp-tags">
      <span v-for="tag in kp.tags" :key="tag" class="doc-tag">{{ tag }}</span>
    </div>

    <!-- 详细知识点（展开/收起） -->
    <div v-if="kp.detailedPoints?.length" class="kp-detailed">
      <div class="detailed-toggle" @click="showDetailed = !showDetailed">
        <el-icon class="toggle-icon" :class="{ rotated: showDetailed }"><ArrowRight /></el-icon>
        <span class="detailed-label">📋 详细知识点 ({{ kp.detailedPoints.length }}个子项)</span>
      </div>
      <div v-show="showDetailed" class="detailed-list">
        <div v-for="(dp, idx) in kp.detailedPoints" :key="idx" class="detailed-item">
          <span class="detailed-num">{{ idx + 1 }}</span>
          <span>{{ dp }}</span>
        </div>
      </div>
    </div>

    <!-- 关联B站素材列表 -->
    <div v-if="kp.materials?.length" class="kp-materials">
      <div class="materials-label">📺 推荐学习视频 ({{ kp.materials.length }})</div>
      <VideoCard
        v-for="mat in kp.materials"
        :key="mat.id"
        :material="mat"
      />
    </div>
  </div>
</template>

<script setup>
/**
 * KnowledgeCard - 知识点卡片
 * 展示知识点的详细信息、学习状态、B站素材
 */
import { computed, ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useProgressStore } from '@/stores/progress'
import VideoCard from './VideoCard.vue'

const props = defineProps({
  kp: {
    type: Object,
    required: true
    // { id, name, description, order, importance, tags, materials }
  }
})

const progressStore = useProgressStore()

// 详细知识点展开状态
const showDetailed = ref(false)

// 获取当前知识点的学习状态
const status = computed(() => progressStore.getStatus(props.kp.id))

// 切换学习状态
function handleStatusChange(newStatus) {
  progressStore.setKnowledgeStatus(props.kp.id, newStatus)
}
</script>

<style scoped>
.knowledge-card {
  border: 1px solid var(--doc-border);
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 16px;
  background: #fff;
  transition: box-shadow 0.2s;
}
.knowledge-card:hover {
  box-shadow: 0 1px 8px rgba(0,0,0,0.04);
}
/* 核心考点特殊样式 */
.knowledge-card.is-important {
  border-left: 3px solid var(--doc-hot-text);
}
/* 已完成的知识点 */
.knowledge-card.is-completed {
  background: #f9fafb;
}
.knowledge-card.is-completed .kp-name {
  color: var(--doc-muted);
}
.kp-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.kp-order {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--doc-hover);
  color: var(--doc-primary);
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
}
.kp-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--doc-title);
}
.badge-key {
  display: inline-flex;
  align-items: center;
  padding: 1px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 500;
  background: #fffbeb;
  color: #d97706;
  border: 1px solid #fde68a;
}
.kp-status {
  margin-left: auto;
}
.status-select {
  width: 100px;
}
.kp-desc {
  margin-top: 10px;
  font-size: 14px;
  color: var(--doc-text);
  line-height: 1.6;
}
.kp-tags {
  margin-top: 8px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
/* ===== 详细知识点 ===== */
.kp-detailed {
  margin-top: 12px;
}
.detailed-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
  user-select: none;
}
.detailed-toggle:hover {
  background: #dcfce7;
}
.toggle-icon {
  font-size: 12px;
  color: #16a34a;
  transition: transform 0.2s;
}
.toggle-icon.rotated {
  transform: rotate(90deg);
}
.detailed-label {
  font-size: 13px;
  font-weight: 500;
  color: #166534;
}
.detailed-list {
  margin-top: 8px;
  padding: 10px 14px;
  background: #f9fafb;
  border-radius: 6px;
  border: 1px solid var(--doc-border);
}
.detailed-item {
  display: flex;
  gap: 8px;
  padding: 4px 0;
  font-size: 13px;
  color: var(--doc-text);
  line-height: 1.5;
}
.detailed-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #e5e7eb;
  color: #6b7280;
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
}

.kp-materials {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed var(--doc-border);
}
.materials-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--doc-text);
  margin-bottom: 8px;
}
</style>
