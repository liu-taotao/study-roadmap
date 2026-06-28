<template>
  <!-- 年级详情页：年级介绍 + 科目筛选 + 路线列表 -->
  <div class="grade-detail-page">
    <!-- 面包屑 -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- 加载状态 -->
    <div v-if="gradeStore.loading" class="loading-state">
      <el-icon class="is-loading"><Loading /></el-icon>
      <span>加载中...</span>
    </div>

    <template v-else-if="gradeStore.currentGrade">
      <!-- 年级标题区 -->
      <div class="grade-header">
        <h1 class="doc-h1">{{ gradeStore.currentGrade.name }}</h1>
        <div class="grade-stats">
          <span class="stat-item">
            <strong>{{ gradeStore.currentGrade.routeStats?.total || 0 }}</strong> 条学习路线
          </span>
          <span class="stat-item sync">
            <strong>{{ gradeStore.currentGrade.routeStats?.sync || 0 }}</strong> 课内同步
          </span>
          <span class="stat-item advance">
            <strong>{{ gradeStore.currentGrade.routeStats?.advance || 0 }}</strong> 培优拓展
          </span>
          <span class="stat-item exam">
            <strong>{{ gradeStore.currentGrade.routeStats?.exam || 0 }}</strong> 考前冲刺
          </span>
        </div>
      </div>

      <!-- 筛选栏 -->
      <div class="filter-bar">
        <div class="filter-group">
          <span class="filter-label">科目：</span>
          <el-radio-group v-model="filterSubject" size="small" @change="applyFilter">
            <el-radio-button label="all">全部</el-radio-button>
            <el-radio-button
              v-for="subj in gradeStore.currentGrade.subjects"
              :key="subj"
              :label="subj"
            >{{ subj }}</el-radio-button>
          </el-radio-group>
        </div>
        <div class="filter-group">
          <span class="filter-label">类型：</span>
          <el-radio-group v-model="filterType" size="small" @change="applyFilter">
            <el-radio-button label="all">全部</el-radio-button>
            <el-radio-button label="sync">课内同步</el-radio-button>
            <el-radio-button label="advance">培优拓展</el-radio-button>
            <el-radio-button label="exam">考前冲刺</el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <!-- 路线列表 -->
      <div class="routes-section">
        <div v-if="filteredRoutes.length === 0" class="empty-state">
          暂无匹配的学习路线
        </div>
        <RouteCard
          v-for="routeItem in filteredRoutes"
          :key="routeItem.id"
          :route="routeItem"
        />
      </div>
    </template>

    <!-- 错误状态 -->
    <div v-else class="empty-state">未找到该年级信息</div>
  </div>
</template>

<script setup>
/**
 * 年级详情页
 * 展示某年级下的所有学习路线，支持按科目和路线类型筛选
 */
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Loading } from '@element-plus/icons-vue'
import { useGradeStore } from '@/stores/grade'
import { useRouteStore } from '@/stores/route'
import Breadcrumb from '@/components/Breadcrumb.vue'
import RouteCard from '@/components/RouteCard.vue'

const route = useRoute()
const gradeStore = useGradeStore()
const routeStore = useRouteStore()

const filterSubject = ref('all')
const filterType = ref('all')

// 面包屑
const breadcrumbItems = computed(() => {
  const grade = gradeStore.currentGrade
  return grade ? [{ label: grade.name }] : []
})

// 当前年级下的所有路线
const currentRoutes = computed(() => routeStore.routes)

// 筛选后的路线
const filteredRoutes = computed(() => {
  let list = currentRoutes.value
  if (filterSubject.value !== 'all') {
    list = list.filter(r => r.subject === filterSubject.value)
  }
  if (filterType.value !== 'all') {
    list = list.filter(r => r.routeType === filterType.value)
  }
  return list
})

function applyFilter() {
  // 响应式计算属性自动处理
}

// 加载数据
async function loadData(gradeId) {
  await gradeStore.fetchGradeDetail(gradeId)
  await routeStore.fetchRoutes({ grade: gradeId })
}

onMounted(() => {
  loadData(route.params.gradeId)
})

// 路由参数变化时重新加载
watch(() => route.params.gradeId, (newId) => {
  if (newId) loadData(newId)
})
</script>

<style scoped>
.grade-detail-page {
  max-width: 900px;
}

.loading-state, .empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 60px 20px;
  color: var(--doc-muted);
  font-size: 14px;
}

/* ===== 年级标题区 ===== */
.grade-header {
  margin-bottom: 20px;
}
.grade-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.stat-item {
  font-size: 13px;
  color: var(--doc-text);
  padding: 4px 10px;
  border-radius: 4px;
  background: var(--doc-sidebar);
}
.stat-item strong {
  color: var(--doc-title);
  font-size: 16px;
}
.stat-item.sync strong { color: var(--doc-primary); }
.stat-item.advance strong { color: #8b5cf6; }
.stat-item.exam strong { color: #f59e0b; }

/* ===== 筛选栏 ===== */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 20px;
  background: var(--doc-sidebar);
  border-radius: 8px;
  margin-bottom: 24px;
}
.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}
.filter-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--doc-text);
  white-space: nowrap;
}
</style>
