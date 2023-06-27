<!-- 标签体系页面 -->
<template>
  <div class="con-wrap">
    <div class="chart-wrap">
     <div id="hChart"></div>
    </div>
  </div>

  <div class="oprt-btn" ref="btn" v-show="showBtn">
    <div class="add" @click="addTag">新增节点</div>
    <div class="del" @click="delTag">删除节点</div>
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
  // myg
})

const setInitData = () => {
  console.log(treeData)
  const data = JSON.parse(JSON.stringify(treeData))
  // treeData.children.forEach(function (datum, index) {
    // index % 2 === 0 && (datum.collapsed = true)
  // })
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
          // formatter: (a, b) => {
          //   console.log(a, b)
          // },

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
        initialTreeDepth: 20,
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

  bindEvents()
}



function bindEvents() {

const main = document.querySelector('#hChart')
console.log(main)
const btn = document.querySelector('.oprt-btn')
main?.addEventListener('click', () => {
  showBtn.value = false
})
main?.addEventListener('contextmenu', function(e) { e.preventDefault(); return false })
  var gloab_param=null;
  myChart.on("contextmenu", function(params){
    console.log(params, btn)
    showBtn.value = true
    const x = params.event.event.pageX
    const y = params.event.event.pageY
    btn.style.left= x + 'px'
    btn.style.top= y + 'px'
  });
  /**
   * 点击画布的时候隐藏右键菜单
   */
  // $('.tree-container').click(function () {
  //     $('#rightMenu').css({
  //         'display': 'none',
  //         'left': '-9999px',
  //         'top': '-9999px'
  //     });
  // });
}

const addTag = (data: Tree) => {
  showBtn.value = false
}

const delTag = (node: Node, data: Tree) => {
  showBtn.value = false
}

const dataSource = ref<Tree[]>([])
</script>
<style lang="scss" scoped>
.con-wrap {
  height: 100%;
  background: transparent;
  .chart-wrap {
    height: 100%;
    background: $color-content;
    padding: 0 12px;
  }
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

.oprt-btn {
  position: fixed;
  background: #fff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 168px;
  z-index: 100;
  padding: 6px 0;
  .add, .del {
    cursor: pointer;
    line-height: 40px;
    padding: 0 12px;
    &:hover {
      background: #f5f5f5;
    } 
  }
  // visibility: hidden;
}
</style>
