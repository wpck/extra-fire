<template>
  <MulSearch />
  <MulList :list="list" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MulSearch from '@/components/MulSearch.vue'
import MulList from '@/components/MulList.vue'

const list = ref<any[]>([
  { title: '消防标准法', no: 'GB/T12345', year: '2016' },
  { title: '生产安全标准法', no: 'GB/T12345', year: '2016' },
  { title: '消防建筑安全标准法', no: 'GB/T12345', year: '2016' },
])
</script>
