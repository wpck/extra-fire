<template>
  <DataNav title="事故报告">
    <template v-slot:right>
      <div class="top">
        <span class="top-title">{{ detailData.title }}</span>
        <span class="top-back" @click="goBack">返回</span>
      </div>
    </template>

  </DataNav>

  <div class="detail">
    <div class="con">
      <!-- 原文 -->
      <div class="con-item">
        <h3 class="title">事故调查报告</h3>
        <div class="content" style="height: calc(100% - 60px);">
          <PreviewDetail :url="`${detailData.content.file}#scrollbars=0&toolbar=0&statusbar=0`" />
        </div>
      </div>
      <!-- echarts图谱 -->
      <div class="con-item">
        <h3 class="title">事故图谱</h3>
        <div class="content" style="height: 100%">
          <LinkChart :data="detailData" />
        </div>
      </div>
    </div>
    <div class="con">
      <!-- 规范推荐 -->
      <div class="wrap-br">
        <div class="con-item">
          <h3 class="title">事故图片</h3>
          <Carousel :imgs="detailData.pics" />
        </div>
        <div class="con-item bot-list">
          <h3 class="title">法律规范推荐</h3>
          <div class="content">
            <div v-for="(item,index) in recList" :key="index">
              <div class="flex item">
                <div class="icon">
                  <template v-if="!!item.children">
                    <Icon v-if="item.show" icon="mdi:expand-more" @click="toggleExpand(index)" />
                    <Icon v-else icon="mdi:expand-less" @click="toggleExpand(index)" />
                  </template>
                </div>

                <span class="pointer" @click="nodeClick(item)">{{ item.title }}</span>
              </div>
              <div class="child" v-show="item.show">
                <div v-for="(c, j) in item.children">
                  <p>{{ c.title }}</p>
                  <div>{{ c.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-br">
        <div class="con-item">
          <h3 class="title">意见</h3>
          <div class="content opn-list">
            <div v-for="(item, index) in opnList" class="item">
              <span>{{ index + 1 }}.</span>
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
        <div class="con-item bot-list" style="margin-bottom: 0">
          <h3 class="title">相似案例推荐</h3>
          <div class="content">
            <div v-for="(item, index) in caseList" class="item">
              <span>{{ index + 1 }}.</span>
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-dialog v-model="showContent" :title="previewFile.title">
    <div style="height: 400px">
      <PreviewDetail :url="`${previewFile.file}#scrollbars=0&toolbar=0&statusbar=0`" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showContent = false">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import PreviewDetail from '@/components/PreviewDetail.vue'
import LinkChart from '@/components/LinkChart.vue'
import Carousel from '@/components/Carousel.vue'
import { Icon } from '@iconify/vue'
import DataNav from '@/components/DataNav.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { getDetailData } from '@/api/detail'

const defaultProps = {
  label: 'title',
}

const showContent = ref<boolean>(false)

const recList = ref<any[]>([
  {
    title: '消防法',
    children: [
      {
        title: '第一条',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
      },{
        title: '第二条',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
      },
    ],
  },
  { title: '建筑规范' },
  { title: '山东省生产安全条例' },
  // {
  //   id: '1',
  //   title: '消防法',
  //   children: [
  //     {
  //       title: '第一条',
  //       // content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
  //     },
  //     {
  //       title: '第二条',
  //       // content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
  //     },
  //   ],
  // },
  // { title: '建筑规范' },
  // { title: '山东省生产安全条例' },
])
const previewFile = ref({})
const opnList = [{ title: '意见一' }, { title: '意见二' }, { title: '意见三' }]
const caseList = [{ title: '案例一' }, { title: '案例一' }, { title: '案例一' }]

const detailData = ref({content: {}})

onMounted(() => {
  getDetail()
})

function getDetail() {
  getDetailData().then(res => {
    console.log(res)
    detailData.value = res.data
    recList.value = res.data.recList
  })
}

const nodeClick = file => {
  previewFile.value = file
  showContent.value = true
}

function toggleExpand(index) {
  const isShow = recList.value[index].show
  recList.value[index].show=!isShow
}
function goBack() {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
.detail {
  padding: 16px;
  height: 100%;
  font-size: 14px;
}
.top {
  display: flex;
  
  &-title {
    flex: 1;
    text-align: center;
    font-weight: 600;
  }
  &-back {
    cursor: pointer;
  }
}
.con {
  display: flex;
  height: 50%;
  &-item {
    // min-width: 0;
    flex: 1;
    border-top-color: 1px solid $color-main;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 16px;
    margin-left: 12px;
    border-radius: 6px;
    background-color: $color-content;
    &:nth-of-type(1) {
      margin-left: 0;
    }
    overflow: auto;
    .title {
      padding: 8px 16px;
      background: $color-main;
      border-bottom: 1px solid $color-border;
      box-shadow: 0px -1px 1px 0px rgba(213, 213, 213, 0.6);
    }
  }

  .content {
    padding: 0 16px;
    min-height: 280px;
  }
  .wrap-br {
    flex: 1;
    margin-bottom: 16px;
    margin-bottom: 16px;
    width: 0;
    margin-left: 12px;
    &:nth-of-type(1) {
      margin-left: 0;
    }
    .content {
      min-height: 0;
      &.opn-list {
        height: 124px;
        overflow: auto;
      }
    }
    .con-item {
      margin-left: 0;
    }
    .bot-list {
        height: calc(100% - 178px);
        .content {
          height: calc(100% - 54px);
          overflow: auto;
        }
      }
  }
}

.item {
      line-height: 28px;
    }
.icon {
  width: 16px;
  padding-top: 7px;
  cursor: pointer;
}
.child {
  padding-left: 16px;
}
.pointer {
  cursor: pointer;
}
</style>
