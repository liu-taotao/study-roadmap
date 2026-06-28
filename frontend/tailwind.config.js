/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 自定义配色方案 —— 对标 programmercarl.com 的低饱和蓝灰主题
      colors: {
        'doc': {
          'bg':      '#ffffff',   // 主背景白
          'sidebar': '#f7f8fa',   // 侧边栏浅灰背景
          'border':  '#e8eaed',   // 边框分割线
          'title':   '#1f2937',   // 标题深灰
          'text':    '#4b5563',   // 正文中灰
          'muted':   '#9ca3af',   // 次要文字
          'primary': '#3b82f6',   // 主题蓝
          'hover':   '#eff6ff',   // hover浅蓝背景
          'active':  '#dbeafe',   // active蓝背景
          'tag':     '#eef2ff',   // 标签浅蓝底
          'hot':     '#fef2f2',   // 重难点浅红底
          'hot-text':'#dc2626',   // 重难点红字
        }
      }
    },
  },
  plugins: [],
  // 避免与 Element Plus 样式冲突
  corePlugins: {
    preflight: false,
  }
}
