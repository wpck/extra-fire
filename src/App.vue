<template>
  <el-config-provider :locale="zhCN">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'element-plus/lib/locale/lang/zh-cn'
</script>
