<template>
  <div class="flex">
    <div class="left"></div>
    <div class="right">
      <h3 class="cursor-pointer">【{{ data.type }}】{{ data.title }}</h3>
      <div class="desc">{{ data.desc }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: any
}>()
</script>

<style lang="scss" scoped>
.left {
  width: 160px;
  height: 85px;
  background: gray;
}
.right {
  flex: 1;
  .title {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 12px;
  }

  .desc {
    max-height: 48px;
    text-indent: 2em;
    line-height: 24px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
  }
}
</style>
