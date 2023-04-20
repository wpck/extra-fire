<template>
  <div class="detail">
    <div class="con">
      <!-- 原文 -->
      <div class="con-item">
        <h3 class="title">原文</h3>
        <div class="content">
          <PreviewDetail />
        </div>
      </div>
      <!-- echarts图谱 -->
      <div class="con-item">
        <div class="content" style="height: 100%">
          <LinkChart />
        </div>
      </div>
    </div>
    <div class="con">
      <!-- 规范推荐 -->
      <div class="con-item">
        <h3 class="title">法律规范推荐</h3>
        <div class="content">
          <div v-for="(item, index) in recList" class="item">
            <span>{{ index + 1 }}.</span>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div class="wrap-br">
        <div class="con-item">
          <h3 class="title">意见</h3>
          <div class="content">
            <div v-for="(item, index) in opnList" class="item">
              <span>{{ index + 1 }}.</span>
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
        <div class="con-item"><Carousel /></div>
        <div class="con-item" style="margin-bottom: 0">
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
</template>

<script lang="ts" setup>
import PreviewDetail from '@/components/PreviewDetail.vue'
import LinkChart from '@/components/LinkChart.vue'
import Carousel from '@/components/Carousel.vue'

const recList = [{ title: '消防法 第三条' }, { title: '建筑规范' }, { title: '山东省生产安全条例' }]
const opnList = [{ title: '意见一' }, { title: '意见二' }, { title: '意见三' }]
const caseList = [{ title: '案例一' }, { title: '案例一' }, { title: '案例一' }]
</script>

<style lang="scss" scoped>
.detail {
  padding: 16px;
}
.con {
  display: flex;
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
    .item {
      line-height: 28px;
    }
  }
  .wrap-br {
    flex: 1;
    margin-bottom: 16px;
    margin-left: 12px;
    margin-bottom: 16px;
    width: 0;
    .content {
      min-height: 0;
    }
    .con-item {
      margin-left: 0;
    }
  }
}
</style>
