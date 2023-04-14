<template>
  <div class="search">
    <el-input v-for="(item, index) in searchType" v-model="item.value" placeholder="请输入" class="search-inp">
      <template #prepend>
        <span>{{ item.label }}</span>
      </template>
      <template #append>
        <el-button :icon="Search" @click="doSearch(index)" />
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
// 搜索关键字
const searchKey = ref<string>('')

const searchType = [
  { type: 1, label: '文件名称', value: '' },
  { type: 2, label: '编号/字号', value: '' },
  { type: 3, label: '生产年份', value: '' },
]

const doSearch = (index: number) => {
  console.log(searchType[index])
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  padding: 16px;
  &-inp {
    flex: 1;
    margin-left: 12px;
    &:nth-of-type(1) {
      margin-left: 0;
    }
  }
}
</style>
