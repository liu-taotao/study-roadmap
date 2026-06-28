<template>
  <!-- 根组件：使用 AppLayout 包裹所有路由视图 -->
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
</script>
