<template>
  <div class="content">
    <div class="data con-wrap">
      <div v-for="item in list" class="data-item">
        <div class="item">
          <span>{{ item.title }}</span>
          <span class="ml-2">{{ item.no }}</span>
          <span class="ml-2">{{ item.year }}</span>
        </div>
      </div>
    </div>
    <el-pagination
      class="page"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      layout="sizes, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  list: any
  type?: number
}>()

const currentPage = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(1000)

const handleSizeChange = () => {}
const handleCurrentChange = () => {}
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  width: 100%;
  padding: 0 $content-padding;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  .data {
    flex: 1;
    overflow: auto;
    .item {
      padding: 12px 24px;
    }
    &-item {
      line-height: 36px;
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px dashed $color-border;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
  }
  .page {
    padding: 16px 0;
  }
}
</style>
