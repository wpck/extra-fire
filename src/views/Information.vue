<template>
  <SearchInp />
  <DataList :list="list" :type="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SearchInp from '@/components/SearchInp.vue'
import DataList from '@/components/DataList.vue'

const list = ref<any[]>([{ title: '和广东省科技公司打工皇帝发高烧法国电视公司的韩国官方撒谎价格' }, { title: '和广东省科技帝发高烧法国电视公司的韩国官方撒谎价格和广东省科技公司' }])
</script>
