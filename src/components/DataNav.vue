<template>
    <div class="nav">
        <div>
            <span class="pre">事故数据 /</span>
            {{ title }}
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
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
    display: flex;
    align-items: center;
    .pre {
        color: #919191;
    }
    .right {
        flex: 1;
    }
}
</style>