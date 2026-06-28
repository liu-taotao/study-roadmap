<template>
  <!-- 思维导图组件：树形结构展示概念层级关系 -->
  <div v-if="data" class="mind-map-card">
    <div class="mm-header">
      <span class="mm-icon">🧠</span>
      <span class="mm-title">思维导图</span>
      <el-button size="small" text @click="expandAll = !expandAll">
        {{ expandAll ? '全部收起' : '全部展开' }}
      </el-button>
    </div>
    <div class="mm-tree">
      <MindNode
        :node="data"
        :depth="0"
        :expand-all="expandAll"
      />
    </div>
  </div>
</template>

<script setup>
/**
 * MindMap - 思维导图组件
 * 树形结构递归展示概念层级，支持展开/折叠
 */
import { ref, defineComponent, h } from 'vue'

defineProps({
  data: {
    type: Object,
    default: null
    // { name, children: [{ name, children: [...] }] }
  }
})

const expandAll = ref(false)

// 递归树节点组件（内联定义）
const MindNode = defineComponent({
  name: 'MindNode',
  props: {
    node: { type: Object, required: true },
    depth: { type: Number, default: 0 },
    expandAll: { type: Boolean, default: false }
  },
  setup(props) {
    const collapsed = ref(props.depth >= 2)  // 默认展开前2层
    const hasChildren = props.node.children && props.node.children.length > 0

    function toggle() { collapsed.value = !collapsed.value }

    return () => {
      const isArray = Array.isArray(props.node.children)
      const isStringChildren = isArray && props.node.children.length > 0 && typeof props.node.children[0] === 'string'
      const isObjectChildren = isArray && props.node.children.length > 0 && typeof props.node.children[0] === 'object'

      return h('div', { class: ['mm-node', `mm-depth-${Math.min(props.depth, 3)}`] }, [
        h('div', {
          class: ['mm-node-label', { 'has-children': hasChildren, 'is-leaf': !hasChildren }],
          onClick: hasChildren ? toggle : undefined
        }, [
          hasChildren && h('span', {
            class: ['mm-arrow', { expanded: !collapsed.value }]
          }, '▶'),
          h('span', { class: 'mm-dot', style: { background: dotColors[props.depth % dotColors.length] } }),
          h('span', { class: 'mm-name' }, props.node.name)
        ]),
        // 展开子节点
        hasChildren && !collapsed.value && h('div', { class: 'mm-children' },
          props.node.children.map(child => {
            if (typeof child === 'string') {
              return h('div', { class: 'mm-leaf-item' }, [
                h('span', { class: 'mm-leaf-dot' }, '·'),
                h('span', {}, child)
              ])
            }
            return h(MindNode, {
              node: child,
              depth: props.depth + 1,
              expandAll: props.expandAll
            })
          })
        )
      ])
    }
  }
})

const dotColors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#06b6d4']
</script>

<style scoped>
.mind-map-card {
  border: 1px solid var(--doc-border);
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #faf5ff 100%);
}
.mm-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--doc-border);
}
.mm-icon { font-size: 20px; }
.mm-title { font-size: 16px; font-weight: 600; color: var(--doc-title); flex: 1; }

.mm-tree {
  font-size: 14px;
  line-height: 1.6;
}

/* ===== 树节点 ===== */
.mm-node-label {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: 5px;
  transition: background 0.15s;
}
.mm-node-label.has-children {
  cursor: pointer;
  font-weight: 500;
}
.mm-node-label:hover {
  background: var(--doc-hover);
}
.mm-node-label.is-leaf {
  cursor: default;
}
.mm-arrow {
  font-size: 10px;
  color: var(--doc-muted);
  transition: transform 0.2s;
  flex-shrink: 0;
}
.mm-arrow.expanded {
  transform: rotate(90deg);
}
.mm-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.mm-name {
  color: var(--doc-title);
}
.mm-depth-0 > .mm-node-label .mm-name { font-size: 16px; font-weight: 600; }
.mm-depth-1 > .mm-node-label .mm-name { font-size: 14px; font-weight: 500; }
.mm-depth-2 > .mm-node-label .mm-name { font-size: 13px; }

.mm-children {
  padding-left: 24px;
}
.mm-leaf-item {
  padding: 3px 8px 3px 32px;
  font-size: 12px;
  color: var(--doc-text);
  display: flex;
  align-items: center;
  gap: 4px;
}
.mm-leaf-dot {
  color: var(--doc-muted);
  font-weight: bold;
}
</style>
