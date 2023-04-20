<template>
  <div class="content con-wrap">
    <div v-for="item in list" @click="toDetail">
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
}
</style>
