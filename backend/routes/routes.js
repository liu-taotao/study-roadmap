/**
 * 学习路线相关接口
 * GET  /api/routes          - 获取路线列表（支持 ?grade=&type=&subject= 筛选）
 * GET  /api/routes/:id      - 获取单条路线详情（含知识点和关联素材）
 */

const express = require('express');
const router = express.Router();

// 获取学习路线列表（支持多条件筛选）
router.get('/', (req, res) => {
  try {
    const { grade, type, subject, track } = req.query;
    let routes = req.readData('routes.json');

    // 按年级筛选
    if (grade) {
      routes = routes.filter(r => r.gradeId === grade || r.gradeSlug === grade);
    }
    // 按路线类型筛选：sync(课内同步) / advance(培优拓展) / exam(考前冲刺)
    if (type) {
      routes = routes.filter(r => r.routeType === type);
    }
    // 按科目筛选
    if (subject) {
      routes = routes.filter(r => r.subject === subject);
    }
    // 按文理分科筛选
    if (track) {
      routes = routes.filter(r => r.track === track || !r.track); // 无分科要求的不筛选
    }

    res.json({ success: true, data: routes, total: routes.length });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取路线列表失败', error: err.message });
  }
});

// 获取单条路线详情（含知识点和B站素材）
router.get('/:id', (req, res) => {
  try {
    const routes = req.readData('routes.json');
    const route = routes.find(r => r.id === req.params.id);
    if (!route) {
      return res.status(404).json({ success: false, message: '未找到该学习路线' });
    }

    // 查询关联的B站素材
    const materials = req.readData('materials.json');
    // 为每个知识点匹配素材
    const knowledgeWithMaterials = (route.knowledgePoints || []).map(kp => {
      const kpMaterials = materials.filter(m => m.knowledgePointId === kp.id);
      return { ...kp, materials: kpMaterials };
    });

    res.json({
      success: true,
      data: {
        ...route,
        knowledgePoints: knowledgeWithMaterials
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取路线详情失败', error: err.message });
  }
});

module.exports = router;
