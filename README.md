# 📚 全学段学习路线规划平台

> 覆盖**小学三年级至高三**的全学段学习路线规划网站  

---

## 一、项目架构

```
demo\
├── README.md                    # 本文件 - 完整部署说明
│
├── backend/                     # 后端 - Node.js + Express
│   ├── package.json
│   ├── server.js                # ★ 主入口：Express服务配置
│   ├── data/
│   │   └── seed.js              # ★ 种子数据：全学段路线+B站素材
│   └── routes/
│       ├── grades.js            # 年级接口
│       ├── routes.js            # 学习路线接口
│       ├── materials.js         # B站素材接口
│       ├── favorites.js         # 收藏接口
│       ├── progress.js          # 学习进度接口
│       └── search.js            # 全局搜索接口
│
└── frontend/                    # 前端 - Vue3 + Vite + Element Plus
    ├── package.json
    ├── index.html
    ├── vite.config.js           # Vite配置（含API代理）
    ├── tailwind.config.js       # TailwindCSS主题配置
    ├── postcss.config.js
    └── src/
        ├── main.js              # ★ 应用入口
        ├── App.vue              # 根组件
        ├── style.css            # 全局样式 + TailwindCSS
        ├── api/
        │   └── index.js         # ★ API请求层（axios封装）
        ├── router/
        │   └── index.js         # Vue Router路由配置
        ├── stores/              # Pinia状态管理
        │   ├── grade.js         # 年级状态
        │   ├── route.js         # 路线状态
        │   ├── favorite.js      # 收藏状态
        │   └── progress.js      # 进度状态
        ├── components/          # 公共组件
        │   ├── AppLayout.vue    # ★ 全局布局（侧边栏+内容区）
        │   ├── SideNav.vue      # ★ 树形侧边导航（4级折叠）
        │   ├── Breadcrumb.vue   # 面包屑导航
        │   ├── RouteCard.vue    # 路线卡片
        │   ├── KnowledgeCard.vue# 知识点卡片（含B站素材）
        │   ├── VideoCard.vue    # B站视频卡片
        │   └── FloatingToc.vue  # 右侧悬浮目录
        └── views/               # 页面视图
            ├── Home.vue         # 首页：年级入口+搜索
            ├── GradeDetail.vue  # 年级详情：路线列表+筛选
            ├── RouteDetail.vue  # ★ 路线详情：知识点+B站视频
            ├── Search.vue       # 全局检索
            └── Favorites.vue    # 我的收藏
```

---

## 二、快速启动（本地运行）

### 环境要求
- **Node.js** >= 16.x（推荐 18.x 或 20.x）
- **npm** >= 8.x（随 Node.js 自带）

### 1. 启动后端（端口 3001）

```bash
# 进入后端目录
cd demo\backend

# 安装依赖
npm install

# 启动服务（首次运行会自动注入种子数据）
npm start

# 看到以下输出表示启动成功：
# ══════════════════════════════════════════════
#   📚 学习路线规划平台 - 后端服务已启动
#   🌐 服务地址: http://localhost:3001
#   📋 API文档: http://localhost:3001/api
# ══════════════════════════════════════════════
```

> 💡 开发时可使用 `npm run dev`（nodemon 热重载）

### 2. 启动前端（端口 5173）

```bash
# 新开一个终端，进入前端目录
cd demo\frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 看到以下输出表示启动成功：
# VITE v5.x.x  ready in xxx ms
# ➜  Local:   http://localhost:5173/
```

### 3. 访问网站

打开浏览器访问：**http://localhost:5173**

---

## 三、页面功能介绍

| 页面 | 路由 | 功能说明 |
|------|------|---------|
| **首页** | `/` | 8个年级入口卡片、三种路线体系介绍、快速搜索 |
| **年级详情** | `/grade/:id` | 该年级所有路线列表、按科目/类型筛选 |
| **路线详情** | `/route/:id` | 知识点列表、B站视频推荐、学习进度标记、悬浮目录跳转 |
| **全局检索** | `/search` | 按关键词搜索路线/知识点/B站视频，支持年级类型筛选 |
| **我的收藏** | `/favorites` | 已收藏路线管理、跳转详情、取消收藏 |

### 核心交互
- **左侧导航**：学段→年级→科目→路线类型→路线，四级树形折叠，点击跳转
- **进度标记**：每个知识点可标记「未开始/学习中/已完成」
- **收藏功能**：路线卡片和详情页均有⭐收藏按钮
- **悬浮目录**：路线详情页右侧固定目录，点击锚点跳转
- **响应式**：PC端完整展示侧边栏；平板/手机端自动收起，顶部菜单按钮展开

---

## 四、API 接口一览

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api` | 健康检查 + 接口列表 |
| GET | `/api/grades` | 获取所有年级 |
| GET | `/api/grades/:id` | 获取年级详情（含路线统计） |
| GET | `/api/routes?grade=&type=&subject=` | 获取路线列表（支持筛选） |
| GET | `/api/routes/:id` | 获取路线详情（含知识点+素材） |
| GET | `/api/materials?routeId=&knowledgePointId=` | 获取B站素材 |
| GET | `/api/search?q=` | 全局搜索 |
| GET | `/api/favorites` | 获取收藏列表 |
| POST | `/api/favorites` | 添加收藏 `{ routeId }` |
| DELETE | `/api/favorites/:id` | 取消收藏 |
| GET | `/api/progress` | 获取全部学习进度 |
| GET | `/api/progress/:routeId` | 获取路线进度 |
| POST | `/api/progress` | 更新知识点状态 `{ knowledgePointId, status }` |

---

## 五、技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 前端框架 | Vue 3 (Composition API) | ^3.4 |
| 构建工具 | Vite | ^5.0 |
| UI组件库 | Element Plus | ^2.4 |
| 样式方案 | TailwindCSS | ^3.4 |
| 状态管理 | Pinia | ^2.1 |
| 路由 | Vue Router 4 | ^4.2 |
| HTTP请求 | Axios | ^1.6 |
| 后端框架 | Express | ^4.18 |
| 数据存储 | 本地 JSON 文件 | - |

---

## 六、种子数据说明

种子数据位于 `backend/data/seed.js`，覆盖：

| 学段 | 年级 | 路线数 | 素材数 |
|------|------|--------|--------|
| 小学 | 3-4年级 | 4条（数/语） | 5个视频 |
| 小学 | 5-6年级 | 3条（数学） | 4个视频 |
| 初中 | 初一 | 3条（数/英） | 6个视频 |
| 初中 | 初二 | 2条（数/物） | 5个视频 |
| 初中 | 初三 | 3条（数/物） | 5个视频 |
| 高中 | 高一 | 2条（数学） | 4个视频 |
| 高中 | 高二 | 2条（数/物） | 4个视频 |
| 高中 | 高三 | 3条（数/物） | 5个视频 |

**B站视频来源参考**（真实UP主方向，视频链接为占位符）：
- 数学：一数老师、数学大师、清华数学系胡老师
- 物理：物理大师、坤哥物理
- 英语：英语兔、李阳疯狂英语
- 语文：语文大师、作文纸条
- 小学：数学林老师、高斯课堂、竞赛数学陈老师

---

## 七、扩展指南

### 如何新增年级

1. 编辑 `backend/data/grades.json`，添加年级对象：
```json
{ "id": "grade-new", "name": "新年级", "slug": "new-grade", "stage": "primary", "order": 9 }
```

2. 在 `backend/data/seed.js` 中为新年级添加路线和素材

### 如何新增B站视频素材

在 `backend/data/seed.js` 的 `materials` 数组中添加：
```js
{
  id: 'mat-xxx',                    // 唯一ID
  knowledgePointId: 'kp-xxx',       // 关联的知识点ID
  routeId: 'route-xxx',             // 关联的路线ID
  title: '视频标题',
  up主: 'UP主名称',
  videoUrl: 'https://www.bilibili.com/video/BVxxxxxx',  // B站视频链接
  description: '视频简介',
  duration: '30分钟',               // 时长
  rating: 5,                        // 1-5星
  suitableFor: '适合年级',
  tags: ['标签1', '标签2']
}
```

### 如何新增/修改学习路线

在 `backend/data/seed.js` 的 `routes` 数组中添加或修改路线对象，核心字段：
- `routeType`: `sync`(课内同步) / `advance`(培优拓展) / `exam`(考前冲刺)
- `knowledgePoints`: 知识点数组，每个包含 `name`, `description`, `importance`(1-3), `tags`

### 重置数据

删除 `backend/data/` 下的 JSON 数据文件（保留 `seed.js`），重启后端即可自动重新生成。

---

## 八、生产部署

```bash
# 1. 构建前端
cd frontend
npm run build          # 输出到 frontend/dist/

# 2. 配置后端托管前端静态文件
#    在 backend/server.js 中添加：
#    app.use(express.static(path.join(__dirname, '../frontend/dist')))

# 3. 启动后端（单端口运行）
cd backend
npm start              # 访问 http://localhost:3001
```

---

## 九、常见问题

**Q: 启动后端报端口被占用？**
```bash
# Windows 查看端口占用
netstat -ano | findstr :3001
# 修改 backend/server.js 中的 PORT 常量
```

**Q: 前端请求后端报 CORS 错误？**
- 确保后端先启动（端口3001）
- Vite 开发模式下已配置代理，检查 `vite.config.js` 的 proxy 设置

**Q: 如何清空收藏/进度数据？**
- 编辑 `backend/data/favorites.json` 和 `backend/data/progress.json`，设为 `[]`

---

## 十、项目许可

MIT License —— 仅供学习参考使用

---

> 🎓 祝学习进步！如有问题欢迎反馈。
