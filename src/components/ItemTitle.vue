<template>
  <div class="flex wrap">
    <div class="left" :style="{backgroundImage: `url(/public/testdata/imgs/${data.picture})`}"></div>
    <div class="right">
      <div class="cursor-pointer title">{{ data.title }}</div>
      <div class="desc truncate">{{ data.content }}</div>
      <div class="type">{{ categotyMap[data.category] }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { categotyMap } from '@/utils'
const props = defineProps<{
  data: any
}>()
</script>

<style lang="scss" scoped>
.left {
  width: 160px;
  height: 110px;
  background: gray;
  margin-right: 12px;
  cursor: pointer;
  background-image: url('https://p2.img.cctvpic.com/fmspic/2023/05/12/e445bab0afa04448b8b9a6ce17ffc701-1.jpg');
  background-size: cover;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s linear;
  }
}
.right {
  flex: 1;
  min-width: 0;
  position: relative;
  .title {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    max-height: 56px;
    margin-bottom: 4px;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  }

  .desc {
    font-size: 14px;
    margin-bottom: 4px;
    color: $color-font-ex;
  }
  .type {
    position: absolute;
    bottom: 0;
    font-size: 14px;
  }
}
</style>
