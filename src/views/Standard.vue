<template>
  <DataNav title="标准规范" />
  <MulSearch />
  <MulList :list="list" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DataNav from '@/components/DataNav.vue'
import MulSearch from '@/components/MulSearch.vue'
import MulList from '@/components/MulList.vue'

const list = ref<any[]>([
  { title: '消防标准法', no: 'GB/T12345', year: '2016', compny: '消防研究所', date: '2020-07-01' },
  { title: '生产安全标准法', no: 'GB/T12345', year: '2016', compny: '消防研究所', date: '2020-07-01' },
  { title: '消防建筑安全标准法', no: 'GB/T12345', year: '2016', compny: '消防研究所', date: '2020-07-01' },
])
</script>
