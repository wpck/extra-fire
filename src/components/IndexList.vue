<!-- 首页列表组件 -->
<template>
  <div class="content con-wrap">
    <div v-for="item in list" class="data-item" @click="toDetail">
      <ItemTitle :data="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ItemTitle from '@/components/ItemTitle.vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  list: any
}>()
const router = useRouter()

const toDetail = () => {
  router.push('/maldetail')
}
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  min-width: 0;
  overflow: auto;
  .data-item {
    border-bottom: 1px dashed $color-border;
    padding-bottom: 12px;
    margin-bottom: 16px;
  }
}
</style>
