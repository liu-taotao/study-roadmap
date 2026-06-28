/**
 * B站学习素材相关接口
 * GET  /api/materials          - 获取素材列表（支持 ?routeId=&knowledgePointId= 筛选）
 * GET  /api/materials/:id      - 获取单个素材详情
 */

const express = require('express');
const router = express.Router();

// 获取素材列表
router.get('/', (req, res) => {
  try {
    const { routeId, knowledgePointId } = req.query;
    let materials = req.readData('materials.json');

    if (routeId) {
      // 通过路线ID找到关联知识点，再找素材
      const routes = req.readData('routes.json');
      const route = routes.find(r => r.id === routeId);
      if (route) {
        const kpIds = (route.knowledgePoints || []).map(kp => kp.id);
        materials = materials.filter(m => kpIds.includes(m.knowledgePointId));
      }
    }
    if (knowledgePointId) {
      materials = materials.filter(m => m.knowledgePointId === knowledgePointId);
    }

    res.json({ success: true, data: materials, total: materials.length });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取素材列表失败', error: err.message });
  }
});

// 获取单个素材
router.get('/:id', (req, res) => {
  try {
    const materials = req.readData('materials.json');
    const material = materials.find(m => m.id === req.params.id);
    if (!material) {
      return res.status(404).json({ success: false, message: '未找到该素材' });
    }
    res.json({ success: true, data: material });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取素材详情失败', error: err.message });
  }
});

module.exports = router;
