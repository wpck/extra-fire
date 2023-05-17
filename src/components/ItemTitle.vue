<template>
  <div class="flex wrap">
    <div class="left"></div>
    <div class="right">
      <div class="cursor-pointer title">{{ data.title }}</div>
      <div class="desc truncate">{{ data.desc }}</div>
      <div class="type">{{ data.type }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: any
}>()
</script>

<style lang="scss" scoped>
.wrap:hover {
  background-color: #f4f6f8;
}
.left {
  width: 160px;
  height: 110px;
  background: gray;
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s linear;
  }
}
.right {
  flex: 1;
  min-width: 0;
  .title {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    height: 56px;
    margin-bottom: 8px;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  }

  .desc {
    margin-bottom: 4px;
  }
  .type {
    font-size: 14px;
  }
}
</style>
