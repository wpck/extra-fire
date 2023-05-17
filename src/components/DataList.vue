<template>
  <div class="content">
    <div class="data con-wrap">
      <div v-for="item in list" class="data-item">
        <div class="item cursor-pointer link" @click="toDetail()">【{{ type === 2 ? '消防资讯' : '事故报告' }}】{{ item.title }}</div>
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
import { useRouter } from 'vue-router'

const props = defineProps<{
  list: any
  type?: number
}>()

const router = useRouter()

const currentPage = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(1000)

const handleSizeChange = () => {}
const handleCurrentChange = () => {}

const toDetail = () => {
  router.push('/maldetail')
}
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 0 16px 16px;
  margin: 0 auto;
  width: 100%;
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
