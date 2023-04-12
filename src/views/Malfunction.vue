<template>
  <SearchInp />
  <DataList :list="list" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SearchInp from '@/components/SearchInp.vue'
import DataList from '@/components/DataList.vue'

const list = ref<any[]>([{ title: '哈桑规范化建设发给四个家开发商更好地规范' }, { title: '哈桑规范化建设发给四个家开发商更好地规范' }])
</script>
