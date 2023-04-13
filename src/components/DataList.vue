<template>
  <div class="content">
    <div class="data">
      <div v-for="item in list" class="data-item">
        <div class="item">【事故报告】{{ item.title }}</div>
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
  padding: 0 $content-padding $content-padding;
  height: 100%;
  display: flex;
  flex-direction: column;
  .data {
    flex: 1;
    overflow: auto;
    &-item {
      line-height: 36px;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
