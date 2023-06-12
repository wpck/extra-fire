<!-- 标签体系页面 -->
<template>
  <div class="con-wrap">
    <div id="hChart"></div>
  </div>

  <div class="oprt-btn" ref="btn" v-show="showBtn">
    <div>新增</div>
    <div>删除</div>
  </div>
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

const showBtn = ref<boolean>(false)

onMounted(() => {
  myChart = echarts.init(document.querySelector('#hChart'))
  setInitData()
  myChart.on('mouseover', { seriesName: 'haha' }, function (A, B) {
    console.log(A, A.event.event.clientX, A.event.event.clientY)
    let el = document.querySelector('.oprt-btn')
    el.style.left = A.event.event.clientX + 'px'
    el.style.top = A.event.event.clientY + 'px'
    showBtn.value = true
  })
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
        name: 'haha',
        type: 'tree',
        data: [data],
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 7,
        // symbol: function(a,b,c){
        //   console.log(a,b,c)
        //   return '+'
        // },
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 16,
          // formatter: '{b}{btn|+ -}',
          formatter: (a, b) => {
            console.log(a, b)
          },

          rich: {
            btn: {
              color: 'red',
              lineHeight: 10,
            },
            b: {
              backgroundColor: {
                image: 'xxx/xxx.jpg',
              },
              height: 40,
            },
            x: {
              fontSize: 18,
              fontFamily: 'Microsoft YaHei',
              borderColor: '#449933',
              borderRadius: 4,
            },
          },
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
  background: transparent;
}
#hChart {
  height: 100%;
  background: $color-content;
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

.oprt-btn {
  position: fixed;
  // visibility: hidden;
}
</style>
