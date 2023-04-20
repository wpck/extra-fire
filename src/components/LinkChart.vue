<template><div id="chart"></div></template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import * as graph from '@/assets/chart.json'

let myChart = null

onMounted(() => {
  initChart()
})

function initChart() {
  myChart = echarts.init(document.querySelector('#chart'))

  console.log(graph)
  console.log(option)
  myChart?.setOption(option)
}

// const graph = {
//   categories: [
//     { id: 1, name: '森林火灾', symbolSize: 20, category: 0 },
//     { id: 2, name: '烟头', symbolSize: 20, category: 1 },
//     { id: 3, name: '垃圾', symbolSize: 20, category: 2 },
//   ],
//   links: [
//     {
//       source: 0,
//       target: 1,
//       symbolSize: [5, 20],
//       label: {
//         show: true,
//       },
//       lineStyle: {
//         width: 5,
//         curveness: 0.2,
//       },
//     },
//     // {
//     //   source: '0',
//     //   target: '2',
//     //   label: {
//     //     show: true,
//     //   },
//     //   lineStyle: {
//     //     curveness: 0.2,
//     //   },
//     // },
//     // {
//     //   source: '1',
//     //   target: '2',
//     // },
//     // {
//     //   source: '1',
//     //   target: '0',
//     // },
//   ],
// }

const option = {
  tooltip: {},
  legend: [
    {
      data: graph.categories.map(function (a) {
        return a.name
      }),
    },
  ],
  series: [
    {
      name: '图谱',
      type: 'graph',
      layout: 'force',
      data: graph.nodes,
      links: graph.links,
      categories: graph.categories,
      roam: true,
      label: {
        show: true,
        formatter: '{b}',
      },
      force: {
        repulsion: 1000,
        edgeLength: [2, 10],
        layoutAnimation: false,
      },
      labelLayout: {
        hideOverlap: true,
      },
      scaleLimit: {
        min: 0.2,
        max: 2,
      },
      lineStyle: {
        color: 'source',
        // curveness: 0.3,
      },
    },
  ],
}
</script>

<style scoped lang="scss">
#chart {
  width: 100%;
  height: 100%;
  min-height: inherit;
}
</style>
