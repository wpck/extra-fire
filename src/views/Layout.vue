<template>
  <!-- 顶部系统信息标题栏 -->
  <div class="top">信息聚合平台</div>

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
const activeIndex = ref<string>('1')

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
  background-color: var(--el-color-primary);
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
    background-color: var(--el-color-primary-light-9);
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
