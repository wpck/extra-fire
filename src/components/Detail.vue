<template>
  <div class="wrap">
    <div class="title">{{ data.title }}</div>
    <div class="content">{{ data.content }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: any
}>()
</script>

<style lang="scss" scoped>
.wrap {
  width: 80%;
  height: calc(100% - 40px);
  background-color: var(--el-color-primary-light-9);
  margin: 20px auto;
  text-align: center;
  border-radius: 6px;
  padding: 0 10px;
  .title {
    line-height: 50px;
    font-weight: 600;
  }
  .content {
    text-indent: 2em;
    height: calc(100% - 50px);
    overflow: auto;
  }
}
</style>
