<!-- 普通报告通用详情页面 -->
<template>
  <div class="wrap con-wrap">
    <h3>{{ data.title }}</h3>
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
  margin: 20px auto;
  text-align: center;
  .content {
    text-indent: 2em;
    height: calc(100% - 50px);
    overflow: auto;
  }
}
</style>
