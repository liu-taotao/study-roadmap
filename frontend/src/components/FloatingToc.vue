<template>
  <!-- 右侧悬浮目录：快速跳转当前页面的各知识点模块 -->
  <nav v-if="items.length > 0" class="floating-toc">
    <div class="toc-title">本页目录</div>
    <ul class="toc-list">
      <li
        v-for="item in items"
        :key="item.id"
        class="toc-item"
        :class="{
          'toc-active': activeId === item.id,
          'toc-important': item.importance === 3
        }"
      >
        <a :href="`#kp-${item.id}`" @click.prevent="scrollTo(item.id)">
          {{ item.name }}
        </a>
        <span v-if="item.importance === 3" class="toc-hot-dot"></span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
/**
 * FloatingToc - 右侧悬浮目录
 * 锚点跳转到页面内的知识点卡片
 * 对标 programmercarl.com 的知识星球页面右侧目录
 */
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
    // [{ id, name, importance }]
  }
})

const activeId = ref(null)

// 滚动到指定知识点
function scrollTo(id) {
  const el = document.getElementById(`kp-${id}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeId.value = id
  }
}

// 监听滚动，高亮当前可见的知识点
function onScroll() {
  let currentId = null
  for (const item of props.items) {
    const el = document.getElementById(`kp-${item.id}`)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120) {
        currentId = item.id
      }
    }
  }
  activeId.value = currentId
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.floating-toc {
  position: fixed;
  right: 24px;
  top: 120px;
  width: var(--toc-width);
  max-height: calc(100vh - 160px);
  overflow-y: auto;
  background: #fff;
  border: 1px solid var(--doc-border);
  border-radius: 8px;
  padding: 14px 0;
  z-index: 50;
  font-size: 13px;
}
.toc-title {
  padding: 0 14px 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--doc-muted);
  border-bottom: 1px solid var(--doc-border);
  margin-bottom: 6px;
}
.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.toc-item {
  padding: 0;
}
.toc-item a {
  display: flex;
  align-items: center;
  padding: 5px 14px;
  color: var(--doc-text);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: all 0.15s;
  line-height: 1.4;
}
.toc-item a:hover {
  background: var(--doc-hover);
  color: var(--doc-primary);
}
.toc-item.toc-active a {
  color: var(--doc-primary);
  background: var(--doc-hover);
  border-left-color: var(--doc-primary);
  font-weight: 500;
}
.toc-hot-dot {
  display: none;
}
.toc-item.toc-important a::after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--doc-hot-text);
  margin-left: auto;
  flex-shrink: 0;
}

/* 小屏幕隐藏悬浮目录 */
@media (max-width: 1200px) {
  .floating-toc {
    display: none;
  }
}
</style>
