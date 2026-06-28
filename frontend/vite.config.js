/**
 * Vite 构建配置
 * 配置代理将 /api 请求转发到后端 Express 服务 (端口3001)
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')  // @ 指向 src 目录
    }
  },
  server: {
    port: 5173,        // 前端开发服务器端口
    proxy: {
      '/api': {
        target: 'http://localhost:3001',  // 后端API地址
        changeOrigin: true
      }
    }
  }
})
