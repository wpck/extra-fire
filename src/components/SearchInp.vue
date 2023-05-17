<!-- 通用搜索框 -->
<template>
  <div class="search">
    <el-input v-model="searchKey" size="large" placeholder="请输入" class="input-with-select">
      <template #append>
        <el-button :icon="Search" @click="clickSearch" />
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const emits = defineEmits<{
  (event: 'handleSearch', key: string): void
}>()

// 搜索关键字
const searchKey = ref<string>('')

function clickSearch() {
  emits('handleSearch', searchKey)
}
</script>

<style lang="scss" scoped>
.search {
  width: 80%;
  margin: 16px auto;
}
</style>
