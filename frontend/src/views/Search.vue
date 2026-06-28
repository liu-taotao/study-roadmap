<template>
  <!-- 全局检索页 -->
  <div class="search-page">
    <Breadcrumb :items="[{ label: '全局检索' }]" />

    <h1 class="doc-h1">🔍 全局检索</h1>

    <!-- 搜索框 -->
    <div class="search-bar">
      <el-input
        v-model="keyword"
        size="large"
        placeholder="输入关键词搜索：知识点、B站视频、UP主、学习路线..."
        :prefix-icon="SearchIcon"
        clearable
        @keyup.enter="doSearch"
      >
        <template #append>
          <el-button type="primary" @click="doSearch" :loading="loading">搜索</el-button>
        </template>
      </el-input>
    </div>

    <!-- 筛选选项 -->
    <div class="search-filters">
      <el-select v-model="filterGrade" placeholder="选择年级" clearable size="small" style="width:150px">
        <el-option
          v-for="g in gradeStore.grades"
          :key="g.id"
          :label="g.name"
          :value="g.id"
        />
      </el-select>
      <el-select v-model="filterType" placeholder="路线类型" clearable size="small" style="width:140px">
        <el-option label="课内同步" value="sync" />
        <el-option label="培优拓展" value="advance" />
        <el-option label="考前冲刺" value="exam" />
      </el-select>
    </div>

    <!-- 搜索结果 -->
    <div v-if="searched" class="search-results">
      <div class="result-summary">
        共找到 <strong>{{ totalResults }}</strong> 条结果
        <span v-if="keyword">（关键词："{{ keyword }}"）</span>
      </div>

      <!-- 空结果 -->
      <div v-if="totalResults === 0 && !loading" class="empty-state">
        未找到相关结果，请尝试其他关键词
      </div>

      <!-- 路线结果 -->
      <div v-if="results.routes?.length" class="result-section">
        <h3 class="result-section-title">📘 学习路线 ({{ results.routes.length }})</h3>
        <div
          v-for="r in results.routes"
          :key="r.id"
          class="result-item"
          @click="goRoute(r.id)"
        >
          <div class="result-item-header">
            <span class="result-type-badge" :class="`badge-${r.routeType}`">
              {{ routeTypeLabel(r.routeType) }}
            </span>
            <span class="result-title">{{ r.title }}</span>
          </div>
          <div class="result-meta">
            {{ r.gradeName }} · {{ r.subject }} · {{ r.knowledgePoints?.length || 0 }}个知识点
          </div>
          <p v-if="r.description" class="result-desc">{{ r.description }}</p>
        </div>
      </div>

      <!-- 知识点结果 -->
      <div v-if="results.knowledgePoints?.length" class="result-section">
        <h3 class="result-section-title">📝 知识点 ({{ results.knowledgePoints.length }})</h3>
        <div
          v-for="kp in results.knowledgePoints"
          :key="kp.id"
          class="result-item"
          @click="goRoute(kp.routeId)"
        >
          <div class="result-item-header">
            <span v-if="kp.importance === 3" class="badge-important">核心</span>
            <span class="result-title">{{ kp.name }}</span>
          </div>
          <div class="result-meta">
            {{ kp.gradeName }} · {{ kp.subject }} · 来自「{{ kp.routeTitle }}」
          </div>
          <p v-if="kp.description" class="result-desc">{{ kp.description }}</p>
        </div>
      </div>

      <!-- B站素材结果 -->
      <div v-if="results.materials?.length" class="result-section">
        <h3 class="result-section-title">📺 B站学习视频 ({{ results.materials.length }})</h3>
        <VideoCard
          v-for="mat in results.materials"
          :key="mat.id"
          :material="mat"
        />
      </div>
    </div>

    <!-- 初始状态 -->
    <div v-if="!searched" class="search-hint">
      <p>输入关键词开始搜索，支持搜索：</p>
      <ul>
        <li>知识点名称（如"二次函数"、"有理数"）</li>
        <li>B站UP主名称（如"一数老师"、"物理大师"）</li>
        <li>视频标题关键词</li>
        <li>学习路线主题</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
/**
 * 全局检索页
 * 搜索知识点、路线、B站素材
 */
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search as SearchIcon } from '@element-plus/icons-vue'
import { search } from '@/api/index.js'
import { useGradeStore } from '@/stores/grade'
import Breadcrumb from '@/components/Breadcrumb.vue'
import VideoCard from '@/components/VideoCard.vue'

const route = useRoute()
const router = useRouter()
const gradeStore = useGradeStore()

const keyword = ref('')
const filterGrade = ref('')
const filterType = ref('')
const loading = ref(false)
const searched = ref(false)
const results = ref({ routes: [], knowledgePoints: [], materials: [] })
const totalResults = ref(0)

const routeTypeLabels = { sync: '课内同步', advance: '培优拓展', exam: '考前冲刺' }
function routeTypeLabel(type) { return routeTypeLabels[type] || type }

async function doSearch() {
  if (!keyword.value.trim()) return
  loading.value = true
  searched.value = true
  try {
    const params = {}
    if (filterGrade.value) params.grade = filterGrade.value
    if (filterType.value) params.type = filterType.value
    const res = await search(keyword.value.trim(), params)
    results.value = res.data
    totalResults.value = res.total
  } catch (err) {
    console.error('搜索失败:', err)
  } finally {
    loading.value = false
  }
}

function goRoute(routeId) {
  router.push(`/route/${routeId}`)
}

onMounted(() => {
  gradeStore.fetchGrades()
  // 如果从首页带关键词跳转过来，自动搜索
  if (route.query.q) {
    keyword.value = route.query.q
    doSearch()
  }
})
</script>

<style scoped>
.search-page {
  max-width: 860px;
}

.search-bar {
  margin-bottom: 16px;
}

.search-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}

.search-hint {
  padding: 40px 20px;
  text-align: center;
  color: var(--doc-muted);
  font-size: 14px;
  line-height: 2;
}
.search-hint ul {
  display: inline-block;
  text-align: left;
}

/* ===== 搜索结果 ===== */
.result-summary {
  font-size: 14px;
  color: var(--doc-text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--doc-border);
}
.result-summary strong {
  color: var(--doc-primary);
  font-size: 18px;
}

.result-section {
  margin-bottom: 28px;
}
.result-section-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--doc-title);
  margin-bottom: 12px;
}

.result-item {
  border: 1px solid var(--doc-border);
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.result-item:hover {
  border-color: var(--doc-primary);
  box-shadow: 0 2px 8px rgba(59,130,246,0.08);
}
.result-item-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.result-type-badge {
  padding: 1px 8px;
  border-radius: 3px;
  font-size: 11px;
  color: #fff;
  font-weight: 500;
}
.result-type-badge.badge-sync { background: var(--doc-primary); }
.result-type-badge.badge-advance { background: #8b5cf6; }
.result-type-badge.badge-exam { background: #f59e0b; }
.result-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--doc-title);
}
.result-meta {
  font-size: 12px;
  color: var(--doc-muted);
  margin-bottom: 6px;
}
.result-desc {
  font-size: 13px;
  color: var(--doc-text);
  line-height: 1.5;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: var(--doc-muted);
}
</style>
