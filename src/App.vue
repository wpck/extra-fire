<template>
  <el-config-provider :locale="zhCN">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="scss">
* {
  color: $color-font;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
h3 {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.con-wrap {
  background-color: $color-content;
  padding: 12px;
  border-radius: 6px;
}
.link:hover {
  color: var(--el-color-primary);
}
</style>
