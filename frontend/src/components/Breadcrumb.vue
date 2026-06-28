<template>
  <!-- 面包屑导航：显示当前页面层级路径 -->
  <div class="breadcrumb">
    <el-breadcrumb separator="›">
      <el-breadcrumb-item :to="{ path: '/' }">
        <el-icon><HomeFilled /></el-icon>
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="item in items"
        :key="item.path"
        :to="item.path ? { path: item.path } : undefined"
      >
        {{ item.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
/**
 * Breadcrumb - 面包屑导航
 */
import { HomeFilled } from '@element-plus/icons-vue'

defineProps({
  items: {
    type: Array,
    default: () => []
    // [{ label: '初一', path: '/grade/grade-7' }, { label: '数学课内同步' }]
  }
})
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 20px;
  padding: 8px 0;
}
</style>
