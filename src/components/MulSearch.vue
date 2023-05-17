<template>
  <div class="search">
    <div class="search-con  con-wrap">

      <el-input v-for="(item, index) in searchType" v-model="item.value" placeholder="请输入" class="search-inp">
      <template #prepend>
        <span>{{ item.label }}</span>
      </template>
      <!-- <template #append>
        <el-button :icon="Search" @click="doSearch(index)" />
      </template> -->
    </el-input>
    <el-button class="ml-4" type="primary">搜索</el-button>
    <el-button>重置</el-button>
    </div>
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
  padding: 20px;
  &-con {
  display: flex;
    background-color: $color-content;
    padding: 24px 38px;
  }
  &-inp {
    flex: 1;
    margin-left: 36px;
    &:nth-of-type(1) {
      margin-left: 0;
    }
    
  }
}
</style>
