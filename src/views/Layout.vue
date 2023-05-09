<template>
  <!-- 顶部系统信息标题栏 -->
  <div class="top">火灾事故信息聚合平台</div>

  <div class="layout">
    <!-- 系统菜单 -->
    <el-menu :default-active="activeIndex" class="menu" router>
      <el-menu-item v-for="item in menuList" :index="item.index">{{ item.title }}</el-menu-item>
    </el-menu>
    <!-- 系统内容展示区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex = ref<string>(location.hash.substring(1) || '/index') // 左侧菜单当前定位的菜单项)

const menuList: Array<{ index: string; title: string }> = [
  { index: '/index', title: '首页' },
  { index: '/label', title: '标签体系' },
  { index: '/malfunction', title: '事故报告' },
  { index: '/information', title: '消防资讯' },
  { index: '/standard', title: '标准规范' },
  { index: '/reserve', title: '预案' },
  { index: '/content', title: '内容管理' },
]
</script>

<style lang="scss" scoped>
.top {
  background-color: $color-bg;
  color: var(--el-color-white);
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
  font-weight: 600;
  font-size: large;
}
.layout {
  height: calc(100% - 64px);
  display: flex;
  .menu {
    width: 160px;
    background-color: $color-bg;
    .el-menu-item {
      color: #ffffff;
      &.is-active {
        background: $color-active !important;
      }
      &:hover {
        background: $color-active !important;
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: $color-main;
    height: 100%;
    overflow: auto;
  }
}
</style>
