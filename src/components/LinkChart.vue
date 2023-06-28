<!-- 详情页图谱组件 -->
<template><div id="chart"></div></template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, watch } from 'vue'
// import * as graph from '@/assets/chart.json'

let myChart = null

const props = defineProps<{
  data: any
}>()

watch(() => props.data, (val) => {
  initChart(val)
})

onMounted(() => {
  // initChart()
})

function initChart(graph) {
  myChart = echarts.init(document.querySelector('#chart'))

  graph.nodes.forEach(function (node) {
    node.symbolSize = 40
    node.label = {
      show: true
    };
  });

  const option = {
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a) {
          return a.name
        }),
      },
    ],
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: '图谱',
        type: 'graph',
        layout: 'force',
        // layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          show: true,
          formatter: (params) => {
            if (params.name.length < 4) {
              return params.name
            } else {
              return params.name.slice(0,3) + '...'
            }
          }
        },
        force: {
          repulsion: 1000,
          edgeLength: [2, 10],
          layoutAnimation: true,
          gravity: 0.4,
          friction: 0.1
        },
        labelLayout: {
          hideOverlap: true,
        },
        draggable: true,
        scaleLimit: {
          min: 0.2,
          max: 2,
        },
        lineStyle: {
          color: 'source',
          // curveness: 0.3,
        },
        emphasis: {
          // disabled: false,
          focus: 'adjacency',
          lineStyle: {
            width: 10
          },
          edgeLabel: {
            show: true,
            formatter: (params) =>  {
              console.log(params)
              return params.data.label
            }
          }
        },
      },
    ],
  }

  myChart?.setOption(option)
}
</script>

<style scoped lang="scss">
#chart {
  width: 100%;
  height: calc(100% - 64px);
  min-height: inherit;
}
</style>
