<!-- 标签体系页面 -->
<template>
  <div class="con-wrap">
    <div id="hChart"></div>
  </div>
  <!-- <div class="flex p-4 tree">
    <div class="tree-item con-wrap">
      <h3>火灾事故</h3>
      <LabelTree :data="dataSource" />
    </div>
    <div class="tree-item con-wrap">
      <h3>标准资讯</h3>
      <LabelTree :data="dataSource" />
    </div>
    <div class="tree-item con-wrap">
      <h3>预案</h3>
      <LabelTree :data="dataSource" @handle="handleLabel" />
    </div>
  </div> -->
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import LabelTree from '@/components/LabelTree.vue'
import * as echarts from 'echarts'
import * as treeData from '@/assets/label.json'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}
let id = 1000
let myChart: any = null

onMounted(() => {
  myChart = echarts.init(document.querySelector('#hChart'))
  setInitData()
})

const setInitData = () => {
  console.log(treeData)
  const data = JSON.parse(JSON.stringify(treeData))
  treeData.children.forEach(function (datum, index) {
    index % 2 === 0 && (datum.collapsed = true)
  })
  let option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    series: [
      {
        type: 'tree',
        data: [data],
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 7,
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 12,
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',
          },
        },
        emphasis: {
          focus: 'descendant',
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  }
  myChart?.setOption(option)
}

const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex(d => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const handleLabel = (data: any) => {
  console.log(data)
  console.log(dataSource.value)
  // dataSource.value = data
}

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: '节点1',
    children: [
      {
        id: 4,
        label: '节点1-1',
        children: [
          {
            id: 9,
            label: '节点1-1-1',
          },
          {
            id: 10,
            label: '节点1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '节点2',
    children: [
      {
        id: 5,
        label: '节点2-1',
      },
      {
        id: 6,
        label: '节点2-2',
      },
    ],
  },
  {
    id: 3,
    label: '节点3',
    children: [
      {
        id: 7,
        label: '节点3-1',
      },
      {
        id: 8,
        label: '节点3-2',
      },
    ],
  },
])
</script>
<style lang="scss" scoped>
.con-wrap {
  height: 100%;
}
#hChart {
  height: 100%;
}
.tree {
  height: 100%;
  &-item {
    flex: 1;
    margin-left: 16px;
    &:nth-child(1) {
      margin-left: 0;
    }
    .tree-title {
      text-align: center;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 12px;
    }
  }
}
</style>
