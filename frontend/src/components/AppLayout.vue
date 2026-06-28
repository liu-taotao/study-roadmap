<template>
  <!-- 主布局：左侧固定侧边栏 + 右侧内容区 -->
  <div class="app-layout">
    <!-- 顶部导航条（移动端可见） -->
    <header class="top-header">
      <div class="header-left">
        <el-button
          class="menu-toggle"
          :icon="MenuIcon"
          text
          @click="sidebarOpen = !sidebarOpen"
        />
        <router-link to="/" class="logo-link">
          <span class="logo-icon">📚</span>
          <span class="logo-text">学习路线规划</span>
        </router-link>
      </div>
      <div class="header-right">
        <router-link to="/search" class="header-link">
          <el-icon><Search /></el-icon>
          <span class="hidden-sm">检索</span>
        </router-link>
        <router-link to="/favorites" class="header-link">
          <el-icon><Star /></el-icon>
          <span class="hidden-sm">收藏</span>
        </router-link>
      </div>
    </header>

    <div class="layout-body">
      <!-- 左侧遮罩（移动端侧边栏打开时） -->
      <div
        v-if="sidebarOpen && isMobile"
        class="sidebar-overlay"
        @click="sidebarOpen = false"
      />

      <!-- 左侧固定侧边栏 -->
      <aside
        class="sidebar"
        :class="{ 'sidebar-open': sidebarOpen, 'sidebar-closed': !sidebarOpen }"
      >
        <SideNav @navigate="handleNavigate" />
      </aside>

      <!-- 右侧主内容区 -->
      <main class="main-content" :class="{ 'sidebar-collapsed': !sidebarOpen && !isMobile }">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
/**
 * AppLayout - 全局布局组件
 * 左侧固定树形导航 + 右侧内容区
 * 响应式：PC 完整展示侧边栏，平板/手机侧边栏默认收起
 */
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Star } from '@element-plus/icons-vue'
import SideNav from './SideNav.vue'

const router = useRouter()
const isMobile = ref(false)
const sidebarOpen = ref(true)    // PC 默认展开
const MenuIcon = ref('Menu')

// 检测屏幕宽度
function checkScreen() {
  isMobile.value = window.innerWidth < 768
  if (isMobile.value) {
    sidebarOpen.value = false
  } else {
    sidebarOpen.value = true
  }
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})

function handleNavigate() {
  // 移动端点击导航后自动收起侧边栏
  if (isMobile.value) {
    sidebarOpen.value = false
  }
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--doc-bg);
}

/* ===== 顶部导航条 ===== */
.top-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  padding: 0 16px;
  background: var(--doc-bg);
  border-bottom: 1px solid var(--doc-border);
}
.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--doc-title);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
}
.logo-link:hover {
  text-decoration: none;
}
.logo-icon {
  font-size: 22px;
}
.menu-toggle {
  display: none;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 4px;
}
.header-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 6px;
  color: var(--doc-text);
  font-size: 14px;
  text-decoration: none;
  transition: background 0.15s;
}
.header-link:hover {
  background: var(--doc-hover);
  color: var(--doc-primary);
  text-decoration: none;
}

/* ===== 布局主体 ===== */
.layout-body {
  display: flex;
  flex: 1;
}

/* ===== 侧边栏 ===== */
.sidebar {
  position: sticky;
  top: var(--header-height);
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  background: var(--doc-sidebar);
  border-right: 1px solid var(--doc-border);
  padding: 16px 0;
  transition: transform 0.25s ease, margin-left 0.25s ease;
}
.sidebar-closed {
  margin-left: calc(-1 * var(--sidebar-width));
}

/* 移动端遮罩 */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  top: var(--header-height);
  background: rgba(0, 0, 0, 0.3);
  z-index: 90;
}

/* ===== 主内容区 ===== */
.main-content {
  flex: 1;
  min-width: 0;
  padding: 24px 32px;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .menu-toggle {
    display: inline-flex;
  }
  .hidden-sm {
    display: none;
  }
  .sidebar {
    position: fixed;
    top: var(--header-height);
    left: 0;
    z-index: 95;
    box-shadow: 2px 0 12px rgba(0,0,0,0.1);
    transform: translateX(-100%);
  }
  .sidebar.sidebar-open {
    transform: translateX(0);
  }
  .sidebar.sidebar-closed {
    transform: translateX(-100%);
    margin-left: 0;
  }
  .main-content {
    padding: 16px;
    max-width: 100%;
  }
}
</style>
