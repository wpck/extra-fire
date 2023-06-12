<template>
  <!-- 顶部系统信息标题栏 -->
  <div class="top">火灾事故信息聚合平台</div>

  <div class="layout">
    <!-- 系统菜单 -->
    <el-menu :default-active="activeIndex" class="menu" router>
      <component :is="item.children ? ElSubMenu : ElMenuItem" v-for="item in menuList" :index="item.index">
        <template #title>
          <Icon :icon="item.icon" class="mr-2 text-lg" />
          {{ item.title }}
        </template>
        <template v-if="item.children">
          <el-menu-item v-for="sub in item.children" :index="sub.index">
            <template #title>
              <Icon :icon="sub.icon" class="mr-2 text" />
              {{ sub.title }}
            </template>
          </el-menu-item>
        </template>
      </component>
    </el-menu>
    <!-- 系统内容展示区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { ElSubMenu, ElMenuItem } from 'element-plus'
const activeIndex = ref<string>(location.hash.substring(1) || '/index') // 左侧菜单当前定位的菜单项)

const menuList: Array<{ index: string; title: string; icon: string; children?: Array<any> }> = [
  { index: '/index', title: '首页', icon: 'cil:home' },
  { index: '/label', title: '标签体系', icon: 'cil:tags' },
  {
    index: 'data',
    title: '事故数据',
    icon: 'cil:folder-open',
    children: [
      { index: '/report', title: '事故报告', icon: 'cil-file' },
      { index: '/news', title: '消防资讯', icon: 'cil-file' },
      { index: '/standard', title: '标准规范', icon: 'cil-file' },
      { index: '/preplan', title: '预案', icon: 'cil-file' },
    ],
  },
  { index: '/content', title: '内容管理', icon: 'cil-paperclip' },
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
    // background-color: $color-bg;
    // .el-menu-item {
    //   color: #ffffff;
    //   &.is-active {
    //     background: $color-active !important;
    //   }
    //   &:hover {
    //     background: $color-active !important;
    //   }
    // }
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
