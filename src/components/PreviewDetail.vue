<template>
  <!-- <a :href="url"> hhh1</a> -->
  <iframe :src="url" class="wrap"></iframe>
</template>
<script lang="ts" setup>
const props = defineProps<{ url: string }>()
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
}
</style>
