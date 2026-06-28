/**
 * 年级相关接口
 * GET  /api/grades      - 获取所有年级列表
 * GET  /api/grades/:id  - 获取单个年级详情（含该年级下的科目信息）
 */

const express = require('express');
const router = express.Router();

// 获取所有年级列表
router.get('/', (req, res) => {
  try {
    const grades = req.readData('grades.json');
    // 按order排序
    grades.sort((a, b) => a.order - b.order);
    res.json({ success: true, data: grades });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取年级列表失败', error: err.message });
  }
});

// 获取单个年级详情（含该年级下的科目和路线统计）
router.get('/:id', (req, res) => {
  try {
    const grades = req.readData('grades.json');
    const grade = grades.find(g => g.id === req.params.id || g.slug === req.params.id);
    if (!grade) {
      return res.status(404).json({ success: false, message: '未找到该年级' });
    }

    // 查询该年级下的所有学习路线
    const allRoutes = req.readData('routes.json');
    const gradeRoutes = allRoutes.filter(r => r.gradeId === grade.id);

    // 按路线类型分组统计
    const syncCount = gradeRoutes.filter(r => r.routeType === 'sync').length;
    const advanceCount = gradeRoutes.filter(r => r.routeType === 'advance').length;
    const examCount = gradeRoutes.filter(r => r.routeType === 'exam').length;

    // 科目列表（从路线中提取）
    const subjects = [...new Set(gradeRoutes.map(r => r.subject))];

    res.json({
      success: true,
      data: {
        ...grade,
        subjects,
        routeStats: {
          total: gradeRoutes.length,
          sync: syncCount,
          advance: advanceCount,
          exam: examCount
        },
        routes: gradeRoutes
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取年级详情失败', error: err.message });
  }
});

module.exports = router;
