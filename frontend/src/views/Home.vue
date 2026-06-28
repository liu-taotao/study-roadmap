<template>
  <!-- 首页：年级入口卡片 + 推荐路线 + 平台介绍 -->
  <div class="home-page">
    <!-- 面包屑 -->
    <Breadcrumb />

    <!-- Hero 区域 -->
    <div class="hero-section">
      <h1 class="hero-title">📚 全学段学习路线规划</h1>
      <p class="hero-subtitle">
        覆盖小学三年级至高三，课内同步 + 培优拓展 + 考前冲刺，<br/>
        搭配B站优质学习视频，规划你的专属学习路径
      </p>
      <!-- 快速检索入口 -->
      <div class="hero-search">
        <el-input
          v-model="searchKeyword"
          size="large"
          placeholder="搜索知识点、B站视频、学习路线..."
          :prefix-icon="SearchIcon"
          clearable
          @keyup.enter="goSearch"
        >
          <template #append>
            <el-button type="primary" @click="goSearch">检索</el-button>
          </template>
        </el-input>
      </div>
    </div>

    <!-- 年级卡片网格 -->
    <h2 class="doc-h2">📖 选择你的学段</h2>
    <div class="grade-grid">
      <div
        v-for="grade in gradeStore.grades"
        :key="grade.id"
        class="grade-card"
        @click="goGrade(grade.id)"
      >
        <div class="grade-card-icon">{{ gradeIcons[grade.id] || '📘' }}</div>
        <div class="grade-card-name">{{ grade.name }}</div>
        <div class="grade-card-stage">{{ stageLabel(grade.stage) }}</div>
        <div v-if="grade.tracks" class="grade-card-tracks">
          {{ grade.tracks.join(' · ') }}
        </div>
      </div>
    </div>

    <!-- 三种路线体系说明 -->
    <h2 class="doc-h2">🗺️ 三大学习路线体系</h2>
    <div class="route-type-grid">
      <div class="route-type-card sync">
        <div class="rt-icon">📘</div>
        <h3>课内同步路线</h3>
        <p>贴合课本教材，基础巩固，配套B站同步课堂视频，稳扎稳打提升成绩</p>
      </div>
      <div class="route-type-card advance">
        <div class="rt-icon">🚀</div>
        <h3>培优拓展路线</h3>
        <p>拔高训练、竞赛思维、名师培优课程，适用于学有余力想要突破的学生</p>
      </div>
      <div class="route-type-card exam">
        <div class="rt-icon">🎯</div>
        <h3>考前冲刺路线</h3>
        <p>期中/期末/中考/高考专项刷题、题型精讲，考前高效提分利器</p>
      </div>
    </div>

    <!-- 快速入口 -->
    <div class="quick-links">
      <router-link to="/search" class="quick-link">
        <el-icon><Search /></el-icon>
        全局检索
      </router-link>
      <router-link to="/favorites" class="quick-link">
        <el-icon><Star /></el-icon>
        我的收藏
      </router-link>
    </div>
  </div>
</template>

<script setup>
/**
 * 首页 - 平台入口
 * 展示年级卡片、路线体系介绍、快速搜索入口
 */
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Star } from '@element-plus/icons-vue'
import { useGradeStore } from '@/stores/grade'
import Breadcrumb from '@/components/Breadcrumb.vue'

const router = useRouter()
const gradeStore = useGradeStore()
const searchKeyword = ref('')

// 年级图标映射
const gradeIcons = {
  'grade-3-4': '🧒', 'grade-5-6': '👦',
  'grade-7': '🧑', 'grade-8': '🧑', 'grade-9': '🧑',
  'grade-10': '👨', 'grade-11': '👨', 'grade-12': '🎓'
}

function stageLabel(stage) {
  const map = { primary: '小学', junior: '初中', senior: '高中' }
  return map[stage] || ''
}

function goGrade(gradeId) {
  router.push(`/grade/${gradeId}`)
}

function goSearch() {
  if (searchKeyword.value.trim()) {
    router.push({ path: '/search', query: { q: searchKeyword.value.trim() } })
  }
}

onMounted(() => {
  gradeStore.fetchGrades()
})
</script>

<style scoped>
.home-page {
  max-width: 900px;
}

/* ===== Hero区域 ===== */
.hero-section {
  text-align: center;
  padding: 40px 0 32px;
  border-bottom: 1px solid var(--doc-border);
  margin-bottom: 32px;
}
.hero-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--doc-title);
  margin-bottom: 12px;
}
.hero-subtitle {
  font-size: 15px;
  color: var(--doc-muted);
  line-height: 1.7;
  margin-bottom: 24px;
}
.hero-search {
  max-width: 560px;
  margin: 0 auto;
}

/* ===== 年级卡片网格 ===== */
.grade-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 14px;
  margin-bottom: 32px;
}
.grade-card {
  border: 1px solid var(--doc-border);
  border-radius: 10px;
  padding: 20px 16px;
  text-align: center;
  cursor: pointer;
  background: #fff;
  transition: all 0.2s;
}
.grade-card:hover {
  border-color: var(--doc-primary);
  box-shadow: 0 4px 12px rgba(59,130,246,0.1);
  transform: translateY(-2px);
}
.grade-card-icon {
  font-size: 32px;
  margin-bottom: 8px;
}
.grade-card-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--doc-title);
  margin-bottom: 4px;
}
.grade-card-stage {
  font-size: 12px;
  color: var(--doc-muted);
}
.grade-card-tracks {
  margin-top: 4px;
  font-size: 11px;
  color: #16a34a;
  background: #f0fdf4;
  border-radius: 3px;
  padding: 2px 6px;
  display: inline-block;
}

/* ===== 路线体系卡片 ===== */
.route-type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  margin-bottom: 32px;
}
.route-type-card {
  border: 1px solid var(--doc-border);
  border-radius: 10px;
  padding: 20px;
  background: #fff;
}
.route-type-card.sync { border-top: 3px solid var(--doc-primary); }
.route-type-card.advance { border-top: 3px solid #8b5cf6; }
.route-type-card.exam { border-top: 3px solid #f59e0b; }
.rt-icon { font-size: 28px; margin-bottom: 8px; }
.route-type-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--doc-title);
  margin-bottom: 6px;
}
.route-type-card p {
  font-size: 13px;
  color: var(--doc-text);
  line-height: 1.6;
}

/* ===== 快速入口 ===== */
.quick-links {
  display: flex;
  gap: 12px;
  padding: 20px 0 40px;
}
.quick-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: 1px solid var(--doc-border);
  border-radius: 8px;
  color: var(--doc-primary);
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s;
}
.quick-link:hover {
  background: var(--doc-hover);
  text-decoration: none;
}
</style>
