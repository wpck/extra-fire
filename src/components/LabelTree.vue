<!-- 标签体系组件 -->
<template>
  <el-tree :data="data" node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
const props = defineProps<{ data: any }>()
const emits = defineEmits<{ (event: 'handle', data: any): void }>()

interface Tree {
  id: number
  label: string
  children?: Tree[]
}
let id = 1000

const renderContent = (
  h: any,
  {
    node,
    data,
    store,
  }: {
    node: Node
    data: Tree
    store: Node['store']
  }
) => {
  return h(
    'span',
    {
      class: 'self-tree-node',
    },
    h('span', null, node.label),
    h(
      'span',
      null,
      h(
        'a',
        {
          class: 'tree-btn add',
          onClick: () => append(data),
        },
        '添加'
      ),
      h(
        'a',
        {
          class: 'tree-btn del',
          onClick: () => remove(node, data),
        },
        '删除'
      )
    )
  )
}
const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  console.log(props.data)
  emits('handle', props.data)
  //   dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex(d => d.id === data.id)
  children.splice(index, 1)
  emits('handle', props.data)
  //   dataSource.value = [...dataSource.value]
}
</script>

<style lang="scss">
.self-tree-node {
  flex: 1;
  display: flex;
  justify-content: space-between;
  .tree-btn {
    &.add {
      color: var(--el-color-primary);
    }
    &.del {
      color: var(--el-color-danger);
      margin-left: 8px;
    }
  }
}
</style>
