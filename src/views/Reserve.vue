<template>
  <MulSearch />
  <MulList :list="list" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MulSearch from '@/components/MulSearch.vue'
import MulList from '@/components/MulList.vue'

const list = ref<any[]>([
  { title: '预案-消防预案', no: 'GB/T12345', year: '2016' },
  { title: '预案-生产安全预案', no: 'GB/T12345', year: '2016' },
  { title: '预案-消防建筑安全预案', no: 'GB/T12345', year: '2016' },
])
</script>
