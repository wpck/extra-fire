<template>
    <div class="nav">
        <span class="pre">事故数据 /</span>
        {{ title }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>

<style lang="scss" scoped>
.nav {
    padding: 16px 16px 0;
    font-size: 14px;
    .pre {
        color: #919191;
    }
}
</style>