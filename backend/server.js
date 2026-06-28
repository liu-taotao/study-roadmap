/**
 * 学习路线规划平台 - 后端主服务
 * 技术栈：Node.js + Express + 本地JSON数据存储
 * 提供年级、学习路线、B站素材、收藏、学习进度等REST API
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// 导入路由模块
const gradesRouter = require('./routes/grades');
const routesRouter = require('./routes/routes');
const materialsRouter = require('./routes/materials');
const favoritesRouter = require('./routes/favorites');
const progressRouter = require('./routes/progress');
const searchRouter = require('./routes/search');

const app = express();
const PORT = process.env.PORT || 3001;

// ==================== 中间件配置 ====================
app.use(cors());                    // 允许跨域请求
app.use(express.json());            // 解析JSON请求体
app.use(express.urlencoded({ extended: true }));

// ==================== 数据文件路径 ====================
const DATA_DIR = path.join(__dirname, 'data');

// 确保数据目录及JSON文件存在
function ensureDataFiles() {
  const defaultFiles = {
    'grades.json': [
      { "id": "grade-3-4", "name": "小学3-4年级", "slug": "primary-3-4", "stage": "primary", "order": 1 },
      { "id": "grade-5-6", "name": "小学5-6年级", "slug": "primary-5-6", "stage": "primary", "order": 2 },
      { "id": "grade-7", "name": "初一", "slug": "junior-1", "stage": "junior", "order": 3 },
      { "id": "grade-8", "name": "初二", "slug": "junior-2", "stage": "junior", "order": 4 },
      { "id": "grade-9", "name": "初三", "slug": "junior-3", "stage": "junior", "order": 5 },
      { "id": "grade-10", "name": "高一", "slug": "senior-1", "stage": "senior", "order": 6, "tracks": ["理科", "文科"] },
      { "id": "grade-11", "name": "高二", "slug": "senior-2", "stage": "senior", "order": 7, "tracks": ["理科", "文科"] },
      { "id": "grade-12", "name": "高三", "slug": "senior-3", "stage": "senior", "order": 8, "tracks": ["理科", "文科"] }
    ],
    'routes.json': [],
    'materials.json': [],
    'favorites.json': [],
    'progress.json': []
  };

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  for (const [filename, defaultContent] of Object.entries(defaultFiles)) {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultContent, null, 2), 'utf-8');
      console.log(`✅ 初始化数据文件: ${filename}`);
    }
  }
}

// ==================== 数据读写工具函数 ====================
function readData(filename) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`读取 ${filename} 失败:`, err.message);
    return [];
  }
}

function writeData(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`写入 ${filename} 失败:`, err.message);
    return false;
  }
}

// 将读写函数挂载到 req 上，方便路由使用
app.use((req, res, next) => {
  req.readData = readData;
  req.writeData = writeData;
  next();
});

// ==================== 注册路由 ====================
app.use('/api/grades', gradesRouter);
app.use('/api/routes', routesRouter);
app.use('/api/materials', materialsRouter);
app.use('/api/favorites', favoritesRouter);
app.use('/api/progress', progressRouter);
app.use('/api/search', searchRouter);

// ==================== 根路径健康检查 ====================
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: '学习路线规划平台 API 服务运行中',
    version: '1.0.0',
    endpoints: [
      'GET    /api/grades          - 获取所有年级',
      'GET    /api/grades/:id      - 获取单个年级详情',
      'GET    /api/routes          - 获取学习路线（支持?grade= &type=筛选）',
      'GET    /api/routes/:id      - 获取单条路线详情',
      'GET    /api/materials       - 获取B站素材（支持?routeId=筛选）',
      'GET    /api/search?q=       - 全局搜索',
      'GET    /api/favorites       - 获取收藏列表',
      'POST   /api/favorites       - 添加收藏',
      'DELETE /api/favorites/:id   - 取消收藏',
      'GET    /api/progress        - 获取学习进度',
      'POST   /api/progress        - 更新学习进度'
    ]
  });
});

// ==================== 初始化 & 启动服务 ====================
ensureDataFiles();

// 检查是否需要初始化种子数据
const routes = readData('routes.json');
if (routes.length === 0) {
  console.log('📦 检测到空数据库，正在注入种子数据...');
  const seedData = require('./data/seed');
  const extended = require('./data/extended');

  // 合并思维导图到每条路线
  const mergedRoutes = seedData.routes.map(route => {
    const mindMap = extended.mindMaps[route.id];
    // 合并详细知识点到每个knowledgePoint
    const kps = (route.knowledgePoints || []).map(kp => ({
      ...kp,
      detailedPoints: extended.detailedPoints[kp.id] || []
    }));
    return {
      ...route,
      mindMap: mindMap || null,
      knowledgePoints: kps
    };
  });

  writeData('routes.json', mergedRoutes);
  writeData('materials.json', seedData.materials);
  console.log('✅ 种子数据注入完成！（含思维导图+详细知识点）');
}

app.listen(PORT, () => {
  console.log('══════════════════════════════════════════════');
  console.log('  📚 学习路线规划平台 - 后端服务已启动');
  console.log(`  🌐 服务地址: http://localhost:${PORT}`);
  console.log(`  📋 API文档: http://localhost:${PORT}/api`);
  console.log('══════════════════════════════════════════════');
});
