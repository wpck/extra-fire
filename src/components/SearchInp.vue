<template>
  <div class="search">
    <el-input v-model="searchKey" placeholder="请输入" class="input-with-select">
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
// 搜索关键字
const searchKey = ref<string>('')
</script>

<style lang="scss" scoped>
.search {
  width: 80%;
  margin: 20px auto;
}
</style>
