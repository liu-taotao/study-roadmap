/**
 * 学习进度相关接口
 * GET  /api/progress               - 获取当前用户全部学习进度
 * GET  /api/progress/:routeId      - 获取指定路线的学习进度
 * POST /api/progress               - 更新知识点学习状态（body: { knowledgePointId, status }）
 */

const express = require('express');
const router = express.Router();

const DEFAULT_USER = 'default-user';

// 获取全部学习进度
router.get('/', (req, res) => {
  try {
    const progress = req.readData('progress.json');
    const userProgress = progress.filter(p => p.userId === DEFAULT_USER);
    res.json({ success: true, data: userProgress, total: userProgress.length });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取学习进度失败', error: err.message });
  }
});

// 获取指定路线的学习进度
router.get('/:routeId', (req, res) => {
  try {
    const routes = req.readData('routes.json');
    const route = routes.find(r => r.id === req.params.routeId);
    if (!route) {
      return res.status(404).json({ success: false, message: '路线不存在' });
    }

    const progress = req.readData('progress.json');
    const kpIds = (route.knowledgePoints || []).map(kp => kp.id);
    const routeProgress = progress.filter(
      p => p.userId === DEFAULT_USER && kpIds.includes(p.knowledgePointId)
    );

    // 计算完成度
    const total = kpIds.length;
    const completed = routeProgress.filter(p => p.status === 'completed').length;
    const inProgress = routeProgress.filter(p => p.status === 'in_progress').length;

    res.json({
      success: true,
      data: {
        routeId: req.params.routeId,
        total,
        completed,
        inProgress,
        notStarted: total - completed - inProgress,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        details: routeProgress
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取路线进度失败', error: err.message });
  }
});

// 更新知识点学习状态
router.post('/', (req, res) => {
  try {
    const { knowledgePointId, status } = req.body;
    if (!knowledgePointId || !status) {
      return res.status(400).json({ success: false, message: '缺少 knowledgePointId 或 status 参数' });
    }
    if (!['not_started', 'in_progress', 'completed'].includes(status)) {
      return res.status(400).json({ success: false, message: 'status 必须为 not_started / in_progress / completed' });
    }

    const progress = req.readData('progress.json');
    const existing = progress.find(
      p => p.userId === DEFAULT_USER && p.knowledgePointId === knowledgePointId
    );

    if (existing) {
      existing.status = status;
      existing.updatedAt = new Date().toISOString();
    } else {
      progress.push({
        id: `prog-${Date.now()}`,
        userId: DEFAULT_USER,
        knowledgePointId,
        status,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }

    req.writeData('progress.json', progress);
    res.json({ success: true, message: '进度更新成功' });
  } catch (err) {
    res.status(500).json({ success: false, message: '更新学习进度失败', error: err.message });
  }
});

module.exports = router;
