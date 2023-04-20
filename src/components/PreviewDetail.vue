<template>
  <!-- <a :href="url"> hhh1</a> -->
  <iframe
    id="frame"
    :src="url || 'http://127.0.0.1:5500/public/%E5%89%8D%E7%AB%AF%E9%A1%B5%E9%9D%A2%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E(2).pdf#scrollbars=0&toolbar=0&statusbar=0'"
    class="wrap"></iframe>
</template>
<script lang="ts" setup>
const props = defineProps<{ url: { type: string; default: 'http://127.0.0.1:5500/public/%E7%AC%94%E8%AF%95%E5%87%86%E8%80%83%E8%AF%81%E6%89%93%E5%8D%B0.pdf#scrollbars=0&toolbar=0&statusbar=0' } }>()
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  min-height: inherit;
  #frame {
    ::-webkit-scrollbar {
      width: 4px;
      background-color: #f5f5f5;
    }
    /*定义滚动条轨道：内阴影+圆角*/
    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
    /*定义滑块：内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #959595;
    }
  }
}
</style>
