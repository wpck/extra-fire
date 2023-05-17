<!-- 详情页图片轮播组件 -->
<template>
  <div class="wrap">
    <div class="imgs">
      <img v-for="(img, index) in imgs" :src="img.url" class="imgs-pic" :alt="'图片' + index" />
      <img v-for="(img, index) in imgs" :src="img.url" class="imgs-pic" :alt="'图片' + index" />
    </div>
  </div>
</template>

<script setup lang="ts">
const imgs = [
  { url: 'http://127.0.0.1:5500/public/vAUrMxaME3.jpg' },
  { url: 'http://127.0.0.1:5500/public/vAUrMxaME3.jpg' },
  { url: 'http://127.0.0.1:5500/public/vAUrMxaME3.jpg' },
  { url: 'http://127.0.0.1:5500/public/vAUrMxaME3.jpg' },
  { url: 'http://127.0.0.1:5500/public/vAUrMxaME3.jpg' },
]
</script>

<style lang="scss" scoped>
@keyframes scrollHorz {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.wrap {
  overflow: hidden;
  position: relative;
  height: 124px;
}

.imgs {
  animation: scrollHorz 20s linear infinite;
  display: flex;
  width: max-content;
  position: absolute;
  height: 100%;
  top: 12px;
  left: 12px;
  &-pic {
    width: 100px;
    height: 100px;
    margin-right: 12px;
    background: gray;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
