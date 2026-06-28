<template>
  <!-- 左侧树形导航：年级 → 科目 → 路线类型 → 具体路线 -->
  <div class="side-nav">
    <div class="nav-title">全学段导航</div>

    <!-- 加载状态 -->
    <div v-if="gradeStore.loading && !gradeStore.grades.length" class="nav-loading">
      <el-icon class="is-loading"><Loading /></el-icon>
      <span>加载中...</span>
    </div>

    <!-- 导航树 -->
    <div v-else class="nav-tree">
      <template v-for="stage in ['primary', 'junior', 'senior']" :key="stage">
        <!-- 学段标题 -->
        <div class="stage-title">
          {{ gradeStore.stageNames[stage] }}
          <span class="stage-count">{{ gradeStore.gradesByStage[stage]?.length || 0 }}个年级</span>
        </div>

        <!-- 年级列表 -->
        <div
          v-for="grade in gradeStore.gradesByStage[stage]"
          :key="grade.id"
          class="nav-grade-group"
        >
          <!-- 年级标题（可折叠） -->
          <div
            class="nav-grade-title"
            :class="{ active: expandedGrade === grade.id }"
            @click="toggleGrade(grade.id)"
          >
            <el-icon class="expand-icon" :class="{ rotated: expandedGrade === grade.id }">
              <ArrowRight />
            </el-icon>
            <span class="grade-name">{{ grade.name }}</span>
            <span v-if="grade.tracks" class="track-badge">
              {{ grade.tracks.join('/') }}
            </span>
          </div>

          <!-- 展开后的科目/路线子菜单 -->
          <div v-show="expandedGrade === grade.id" class="nav-sub-items">
            <div v-if="gradeSubjects[grade.id]?.length" class="subject-list">
              <div
                v-for="subject in gradeSubjects[grade.id]"
                :key="subject"
                class="subject-group"
              >
                <!-- 科目标题（可折叠） -->
                <div
                  class="nav-subject-title"
                  :class="{ active: expandedSubject === `${grade.id}-${subject}` }"
                  @click="toggleSubject(grade.id, subject)"
                >
                  <el-icon class="expand-icon" :class="{ rotated: expandedSubject === `${grade.id}-${subject}` }">
                    <ArrowRight />
                  </el-icon>
                  <span>{{ subject }}</span>
                </div>

                <!-- 路线类型 + 具体路线 -->
                <div v-show="expandedSubject === `${grade.id}-${subject}`" class="route-list">
                  <template v-for="routeType in routeTypes" :key="routeType.key">
                    <div
                      v-if="getRoutesBySubjectAndType(grade.id, subject, routeType.key).length"
                      class="route-type-group"
                    >
                      <div class="route-type-label">{{ routeType.label }}</div>
                      <router-link
                        v-for="route in getRoutesBySubjectAndType(grade.id, subject, routeType.key)"
                        :key="route.id"
                        :to="`/route/${route.id}`"
                        class="nav-route-link"
                        :class="{ active: currentRouteId === route.id }"
                        @click="$emit('navigate')"
                      >
                        {{ route.title }}
                      </router-link>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <!-- 无路线时显示 -->
            <div v-else class="nav-empty">暂无路线数据</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
/**
 * SideNav - 树形侧边导航组件
 * 四级层级：学段 → 年级 → 科目 → 路线类型 → 路线
 * 支持折叠/展开，对标 programmercarl.com 的目录面板
 */
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRight, Loading } from '@element-plus/icons-vue'
import { useGradeStore } from '@/stores/grade'
import { useRouteStore } from '@/stores/route'

defineEmits(['navigate'])

const route = useRoute()
const gradeStore = useGradeStore()
const routeStore = useRouteStore()

// 当前路由ID（用于高亮）
const currentRouteId = computed(() => route.params.routeId)

// 展开状态
const expandedGrade = ref(null)
const expandedSubject = ref(null)

// 路线类型
const routeTypes = [
  { key: 'sync', label: '📘 课内同步' },
  { key: 'advance', label: '🚀 培优拓展' },
  { key: 'exam', label: '🎯 考前冲刺' }
]

// 各年级下的科目列表（从路线数据中提取）
const gradeSubjects = reactive({})

// 各年级下的所有路线缓存
const gradeRoutesMap = reactive({})

// 展开/折叠年级
function toggleGrade(gradeId) {
  if (expandedGrade.value === gradeId) {
    expandedGrade.value = null
    expandedSubject.value = null
  } else {
    expandedGrade.value = gradeId
    expandedSubject.value = null
    // 懒加载该年级的路线数据
    if (!gradeRoutesMap[gradeId]) {
      loadGradeRoutes(gradeId)
    }
  }
}

// 展开/折叠科目
function toggleSubject(gradeId, subject) {
  const key = `${gradeId}-${subject}`
  expandedSubject.value = expandedSubject.value === key ? null : key
}

// 加载某年级的所有路线
async function loadGradeRoutes(gradeId) {
  try {
    const res = await routeStore.fetchRoutes({ grade: gradeId })
    gradeRoutesMap[gradeId] = routeStore.routes

    // 提取科目列表
    const subjects = [...new Set(routeStore.routes.map(r => r.subject))]
    gradeSubjects[gradeId] = subjects
  } catch (err) {
    console.error('加载年级路线失败:', err)
  }
}

// 按科目和类型筛选路线
function getRoutesBySubjectAndType(gradeId, subject, routeType) {
  const routes = gradeRoutesMap[gradeId] || []
  return routes.filter(r => r.subject === subject && r.routeType === routeType)
}

// 自动展开当前路由对应的年级
watch(currentRouteId, async (newRouteId) => {
  if (newRouteId && routeStore.currentRoute) {
    const gradeId = routeStore.currentRoute.gradeId
    if (gradeId) {
      expandedGrade.value = gradeId
      if (!gradeRoutesMap[gradeId]) {
        await loadGradeRoutes(gradeId)
      }
      expandedSubject.value = `${gradeId}-${routeStore.currentRoute.subject}`
    }
  }
}, { immediate: false })

onMounted(() => {
  gradeStore.fetchGrades()
})
</script>

<style scoped>
.side-nav {
  padding: 0 12px;
}

.nav-title {
  padding: 8px 12px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--doc-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-loading {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  color: var(--doc-muted);
  font-size: 13px;
}

/* ===== 学段标题 ===== */
.stage-title {
  padding: 12px 12px 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--doc-muted);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stage-count {
  font-weight: 400;
  font-size: 11px;
}

/* ===== 年级 ===== */
.nav-grade-group {
  margin-bottom: 2px;
}
.nav-grade-title {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--doc-title);
  transition: background 0.15s;
}
.nav-grade-title:hover {
  background: var(--doc-hover);
}
.nav-grade-title.active {
  background: var(--doc-active);
  color: var(--doc-primary);
}
.expand-icon {
  font-size: 12px;
  transition: transform 0.2s;
  color: var(--doc-muted);
}
.expand-icon.rotated {
  transform: rotate(90deg);
}
.track-badge {
  margin-left: auto;
  font-size: 11px;
  padding: 1px 6px;
  border-radius: 3px;
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}

/* ===== 科目 ===== */
.nav-sub-items {
  padding-left: 8px;
}
.nav-subject-title {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  color: var(--doc-text);
  transition: background 0.15s;
}
.nav-subject-title:hover {
  background: var(--doc-hover);
}

/* ===== 路线列表 ===== */
.route-list {
  padding-left: 20px;
}
.route-type-group {
  margin-bottom: 4px;
}
.route-type-label {
  font-size: 11px;
  color: var(--doc-muted);
  padding: 4px 0 2px;
}
.nav-route-link {
  display: block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--doc-text);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.15s;
  border-left: 2px solid transparent;
}
.nav-route-link:hover {
  background: var(--doc-hover);
  color: var(--doc-primary);
  text-decoration: none;
}
.nav-route-link.active {
  background: var(--doc-hover);
  color: var(--doc-primary);
  font-weight: 500;
  border-left-color: var(--doc-primary);
}

.nav-empty {
  padding: 12px;
  font-size: 12px;
  color: var(--doc-muted);
  text-align: center;
}
</style>
