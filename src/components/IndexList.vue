<template>
  <div class="content">
    <div v-for="item in list">
      <ItemTitle :data="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ItemTitle from '@/components/ItemTitle.vue'

const props = defineProps<{
  list: any
}>()
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
}
</style>
