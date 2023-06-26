<template>
  <div class="content">
    <div class="data con-wrap">
      <!-- <div v-for="item in list" class="data-item">
        <div class="item">
          <span>{{ item.title }}</span>
          <span class="ml-2">{{ item.no }}</span>
          <span class="ml-2">{{ item.year }}</span>
        </div>
      </div> -->
      <el-table :data="list" border style="width: 100%">
        <el-table-column prop="no" label="编号" width="180"> </el-table-column>
        <el-table-column prop="title" label="名称" width="180"> </el-table-column>
        <el-table-column prop="compny" label="起草单位"> </el-table-column>
        <el-table-column prop="date" label="发布日期"> </el-table-column>
      </el-table>
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
    justify-content: flex-end;
  }
}
</style>
