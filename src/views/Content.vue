<template>
  <div class="con-wrap con-mng">
    <el-form :model="form" label-width="120px">
      <el-form-item label="文章类别">
        <el-select v-model="form.type" placeholder="请选择文章类别">
          <el-option v-for="item in typeList" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload>
          <el-icon class="up-icon"><Document /></el-icon>
        </el-upload>
      </el-form-item>
      <template v-if="['3', '4'].includes(form.type)">
        <el-form-item label="编号">
          <el-input />
        </el-form-item>
        <el-form-item label="发布日期">
          <el-date-picker v-model="form.date" type="date" placeholder="请选择日期" />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Document } from '@element-plus/icons-vue'

const typeList = [
  { label: '事故报告', value: '1' },
  { label: '标准规范', value: '2' },
  { label: '预案', value: '3' },
  { label: '资讯', value: '4' },
]

// do not use same name with ref
const form = reactive({
  type: '3',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped lang="scss">
.con-mng {
  width: 80%;
  margin: 24px auto;
  height: 100%;
}
.up-icon {
  font-size: 32px;
}
</style>
