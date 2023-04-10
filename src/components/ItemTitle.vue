<template>
  <div class="title">【{{ data.type }}】{{ data.title }}</div>
  <div class="desc">{{ data.desc }}</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: any
}>()
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 12px;
}
.desc {
  text-indent: 2em;
}
</style>
