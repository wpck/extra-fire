<!-- 详情页图片轮播组件 -->
<template>
  <div class="wrap">
    <div class="imgs">
      <img v-for="(url, index) in imgs" :src="`http://localhost:5173/testdata/imgs/${url}`" class="imgs-pic" :alt="'图片' + index" @click="preview(url)" />
      <img v-for="(url, index) in imgs" :src="`http://localhost:5173/testdata/imgs/${url}`" class="imgs-pic" :alt="'图片' + index" @click="preview(url)"  />
    </div>
  </div>

  <el-dialog v-model="showContent" title="">
    <div style="height: 400px; overflow: auto;">
      <img :src="previewUrl" style="margin: 0 auto">
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showContent = false">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  imgs: Array<string>
}>()

const showContent = ref(false)
const previewUrl = ref('')

const preview = (url) => {
  previewUrl.value = `http://localhost:5173/testdata/imgs/${url}`
  showContent.value = true
}


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
  animation: scrollHorz 30s linear infinite;
  display: flex;
  width: max-content;
  position: absolute;
  height: 100%;
  top: 12px;
  left: 12px;
  
  &:hover {
      animation-play-state: paused;
    }
  &-pic {
    width: 100px;
    height: 100px;
    margin-right: 12px;
    background: gray;
    flex-grow: 0;
    flex-shrink: 0;
    cursor: pointer;
  }
}
</style>
