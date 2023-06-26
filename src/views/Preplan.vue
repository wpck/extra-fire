<template>
  <DataNav title="预案" />
  <MulSearch />
  <MulList :list="list" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DataNav from '@/components/DataNav.vue'
import MulSearch from '@/components/MulSearch.vue'
import MulList from '@/components/MulList.vue'

const list = ref<any[]>([
  { title: '消防预案', no: 'GB/T12345', year: '2016', compny: '消防研究所', date: '2020-07-01' },
  { title: '生产安全预案', no: 'GB/T12345', year: '2016', compny: '消防研究所', date: '2020-07-01' },
  { title: '消防建筑安全预案', no: 'GB/T12345', year: '2016', compny: '消防研究所', date: '2020-07-01' },
])
</script>
