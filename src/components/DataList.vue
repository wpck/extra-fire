<template>
  <div class="content">
    <div v-for="item in list">
      <div class="item">{{ item.title }}</div>
    </div>
    <el-pagination
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
}
</style>
