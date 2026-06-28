/**
 * 全局搜索接口
 * GET /api/search?q=关键词&grade=年级&type=类型
 * 搜索范围：路线标题、知识点名称、B站素材标题/UP主
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    const { q, grade, type } = req.query;
    if (!q || q.trim().length === 0) {
      return res.status(400).json({ success: false, message: '请输入搜索关键词' });
    }

    const keyword = q.trim().toLowerCase();
    const results = { routes: [], knowledgePoints: [], materials: [] };

    // 1. 搜索学习路线
    let routes = req.readData('routes.json');
    if (grade) routes = routes.filter(r => r.gradeId === grade || r.gradeSlug === grade);
    if (type) routes = routes.filter(r => r.routeType === type);
    results.routes = routes.filter(r =>
      r.title.toLowerCase().includes(keyword) ||
      (r.description && r.description.toLowerCase().includes(keyword)) ||
      (r.subject && r.subject.toLowerCase().includes(keyword)) ||
      (r.tags && r.tags.some(t => t.toLowerCase().includes(keyword)))
    );

    // 2. 搜索知识点（遍历所有路线中的知识点）
    const allRoutes = req.readData('routes.json');
    const kpResults = [];
    allRoutes.forEach(route => {
      (route.knowledgePoints || []).forEach(kp => {
        if (
          kp.name.toLowerCase().includes(keyword) ||
          (kp.description && kp.description.toLowerCase().includes(keyword)) ||
          (kp.tags && kp.tags.some(t => t.toLowerCase().includes(keyword)))
        ) {
          kpResults.push({
            ...kp,
            routeId: route.id,
            routeTitle: route.title,
            gradeId: route.gradeId,
            gradeName: route.gradeName,
            subject: route.subject
          });
        }
      });
    });
    results.knowledgePoints = kpResults;

    // 3. 搜索B站素材
    let materials = req.readData('materials.json');
    results.materials = materials.filter(m =>
      m.title.toLowerCase().includes(keyword) ||
      (m.up主 && m.up主.toLowerCase().includes(keyword)) ||
      (m.description && m.description.toLowerCase().includes(keyword)) ||
      (m.tags && m.tags.some(t => t.toLowerCase().includes(keyword)))
    );

    const totalCount =
      results.routes.length + results.knowledgePoints.length + results.materials.length;

    res.json({
      success: true,
      keyword: q.trim(),
      total: totalCount,
      data: results
    });
  } catch (err) {
    res.status(500).json({ success: false, message: '搜索失败', error: err.message });
  }
});

module.exports = router;
