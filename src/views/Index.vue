<template>
  <!-- 顶部统计数据 -->
  <div class="top">
    <div v-for="item in moduleList" class="top-item">{{ item.label }} {{ moduleData[item.key] }}篇</div>
  </div>

  <div class="bottom">
    <!-- 搜索区域 -->
    <SearchInp />

    <div class="main">
      <!-- 列表展示区域 -->
      <IndexList :list="list" />

      <!-- 热词区 -->
      <div class="side">
        <div class="hot-title">热词</div>
        <div v-for="(item, index) in hotWord" class="hot-word">
          <span class="mr-2">{{ index + 1 }}</span>
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import IndexList from '@/components/IndexList.vue'
import SearchInp from '@/components/SearchInp.vue'

const moduleList = [
  { label: '事故报告', key: 'malfunction' },
  { label: '标准规范', key: 'standard' },
  { label: '预案', key: 'reserve' },
  { label: '消防资讯', key: 'information' },
]

const moduleData: any = {
  malfunction: 300,
  standard: 200,
  reserve: 100,
  information: 360,
}

const list = ref<any[]>([
  {
    type: '事故报告',
    title: '2022北京市东城区景山街道哈哈哈哈哈哈啥事故报告',
    desc: '描述喵帕斯积分兑换犯得上广泛死一个没覅士大夫大师傅对于萨格费用买房贷款首付湖底撒发给有多少个i都市风光摄影的公司法规定使用风格有点u发的啥抚养大司法改革的萨芬归功于i点十四公分压缩的法国英国读书呀给研发',
  },
  {
    type: '事故报告',
    title: '2022北京市东城区景山街道哈哈哈哈哈哈啥事故报告',
    desc: '描述喵帕斯积分兑换犯得上广泛死一个没覅士大夫大师傅对于萨格费用买房贷款首付湖底撒发给有多少个i都市风光摄影的公司法规定使用风格有点u发的啥抚养大司法改革的萨芬归功于i点十四公分压缩的法国英国读书呀给研发',
  },
  {
    type: '事故报告',
    title: '2022北京市东城区景山街道哈哈哈哈哈哈啥事故报告',
    desc: '描述喵帕斯积分兑换犯得上广泛死一个没覅士大夫大师傅对于萨格费用买房贷款首付湖底撒发给有多少个i都市风光摄影的公司法规定使用风格有点u发的啥抚养大司法改革的萨芬归功于i点十四公分压缩的法国英国读书呀给研发',
  },
])

const hotWord = ref<string[]>(['森林火灾', '火灾分类', '大火'])
</script>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  &-item {
    flex: 1;
    background: var(--el-color-primary-light-7);
    text-align: center;
    padding: 20px 0;
    border-left: 1px solid var(--el-color-primary-dark-2);
    &:nth-of-type(1) {
      border-left: none;
    }
  }
}
.bottom {
  flex: 1;
  overflow: auto;
}
.main {
  display: flex;
  padding: 0 16px;
  .side {
    width: 160px;
    margin-left: 20px;
    line-height: 32px;
    .hot-title {
      font-weight: 600;
    }
  }
}
</style>
