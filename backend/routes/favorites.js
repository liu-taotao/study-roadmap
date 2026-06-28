/**
 * 收藏功能相关接口
 * GET    /api/favorites        - 获取当前用户收藏列表
 * POST   /api/favorites        - 添加收藏（body: { routeId }）
 * DELETE /api/favorites/:id    - 取消收藏（id 为路线ID）
 */

const express = require('express');
const router = express.Router();

// 默认用户ID（简化版，无需登录系统）
const DEFAULT_USER = 'default-user';

// 获取收藏列表
router.get('/', (req, res) => {
  try {
    const favorites = req.readData('favorites.json');
    const userFavorites = favorites.filter(f => f.userId === DEFAULT_USER);

    // 补充路线详情
    const routes = req.readData('routes.json');
    const enrichedFavorites = userFavorites.map(fav => {
      const route = routes.find(r => r.id === fav.routeId);
      return { ...fav, route };
    }).filter(f => f.route); // 过滤已删除的路线

    res.json({ success: true, data: enrichedFavorites, total: enrichedFavorites.length });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取收藏列表失败', error: err.message });
  }
});

// 添加收藏
router.post('/', (req, res) => {
  try {
    const { routeId } = req.body;
    if (!routeId) {
      return res.status(400).json({ success: false, message: '缺少 routeId 参数' });
    }

    // 检查路线是否存在
    const routes = req.readData('routes.json');
    const route = routes.find(r => r.id === routeId);
    if (!route) {
      return res.status(404).json({ success: false, message: '路线不存在' });
    }

    const favorites = req.readData('favorites.json');
    // 检查是否已收藏
    const existing = favorites.find(f => f.userId === DEFAULT_USER && f.routeId === routeId);
    if (existing) {
      return res.json({ success: true, message: '已收藏', data: existing });
    }

    const newFavorite = {
      id: `fav-${Date.now()}`,
      userId: DEFAULT_USER,
      routeId,
      createdAt: new Date().toISOString()
    };
    favorites.push(newFavorite);
    req.writeData('favorites.json', favorites);

    res.status(201).json({ success: true, message: '收藏成功', data: newFavorite });
  } catch (err) {
    res.status(500).json({ success: false, message: '添加收藏失败', error: err.message });
  }
});

// 取消收藏（按路线ID删除）
router.delete('/:id', (req, res) => {
  try {
    const favorites = req.readData('favorites.json');
    const index = favorites.findIndex(
      f => f.userId === DEFAULT_USER && f.routeId === req.params.id
    );
    if (index === -1) {
      return res.status(404).json({ success: false, message: '未找到该收藏记录' });
    }
    favorites.splice(index, 1);
    req.writeData('favorites.json', favorites);

    res.json({ success: true, message: '取消收藏成功' });
  } catch (err) {
    res.status(500).json({ success: false, message: '取消收藏失败', error: err.message });
  }
});

module.exports = router;
