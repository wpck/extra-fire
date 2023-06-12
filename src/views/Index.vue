<template>
  <!-- 顶部统计数据 -->
  <div class="top">
    <div v-for="item in moduleList" class="top-item">
      <div class="left" :style="{ backgroundImage: `url('/imgs/${item.key}.png')` }"></div>
      <div class="right flex-1">
        {{ item.label }}
        <p class="font-semibold">{{ statistics[item.key] }} 篇</p>
      </div>
    </div>
  </div>

  <div class="bottom">
    <!-- 搜索区域 -->
    <SearchInp @handleSearch="handleSearch" />

    <div class="main">
      <!-- 列表展示区域 -->
      <IndexList :list="list" />

      <!-- 热词区 -->
      <div class="side con-wrap">
        <div id="cloud"></div>
        <div class="hot-title">热词榜</div>
        <div v-for="(item, index) in hotWord" class="hot-word">
          <span class="mr-2 index" :class="{ hot1: index === 0, hot2: index === 1, hot3: index === 2 }">{{ index + 1 }}</span>
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import IndexList from '@/components/IndexList.vue'
import SearchInp from '@/components/SearchInp.vue'
import { getStatisticsNum, getRecommendList, getHotWords, getSearchList } from '@/api'
import { onMounted } from 'vue'
import WordCloud from 'wordcloud'

const moduleList = [
  { label: '事故报告', key: 'report', icon: '2' },
  { label: '标准规范', key: 'standard', icon: '1' },
  { label: '预案', key: 'preplan', icon: '3' },
  { label: '消防资讯', key: 'news', icon: '4' },
]

const statistics = ref<any>({ report: 300, standard: 200, preplan: 100, news: 360 })

const list = ref<any[]>([])

const hotWord = ref<any>([])

onMounted(() => {
  getStatisticsNum().then(res => {
    const s_data: any = {}
    ;(res.data?.list || []).forEach(el => {
      s_data[el.category] = el.count
    })
    statistics.value = s_data
  })
  getRecommendList().then(res => {
    console.log(res)
    list.value = res.data?.list || []
  })
  getHotWords().then(res => {
    hotWord.value = res.data || []
    createCloud(hotWord.value)
  })
})

function createCloud(list) {
  const res = list.map(i => {
    if (i === 0) {
      return [i.value, 20]
    }
    return [i.value, 14]
  })
  WordCloud(document.getElementById('cloud'), { list: res })
}

// 执行搜索
function handleSearch(key: string) {
  getSearchList({ query: key }).then(res => {
    list.value = res.data?.list || []
  })
  console.log(key)
}
</script>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $color-border;
  padding: 16px;
  &-item {
    flex: 1;
    display: flex;
    background: $color-content;
    padding: 20px 0;
    margin-left: 12px;
    border-radius: 4px;
    &:nth-of-type(1) {
      margin-left: 0;
    }
    .left {
      background-position: center center;
      width: 48px;
      background-size: contain;
      background-repeat: no-repeat;
      margin: 0 12px;
    }
  }
}
.bottom {
  flex: 1;
  overflow: auto;
}
.main {
  display: flex;
  padding: 0 $content-padding;
  height: calc(100% - 80px);
  .side {
    width: 280px;
    margin-left: 16px;
    line-height: 32px;
    overflow: auto;
    font-size: 18px;
    #cloud {
      height: 160px;
    }
    .hot-word {
      border-bottom: 1px dashed $color-border;
      line-height: 40px;
      font-size: 16px;
      cursor: pointer;

      .index {
        color: #9195a3;
      }
      .hot1 {
        color: #fe2d46;
      }
      .hot2 {
        color: #ff6600;
      }
      .hot3 {
        color: #faa90e;
      }
    }
    .hot-title {
      font-weight: 600;
    }
  }
}
</style>
