<template>
  <div class="con-wrap con-mng">
    <div class="el-form">
      <div class="el-form-item">
        <span class="el-form-item__label common-label">文章类别</span>
        <div class="el-form-item">
          <el-select v-model="contentType" placeholder="请选择文章类别">
            <el-option v-for="item in typeList" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
      <Form :type="contentType" />
    </div>
    <div class="btn">
      <el-button type="primary">提交</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Form from '@/components/form/Form.vue'

const typeList = [
  { label: '事故报告', value: '1' },
  { label: '标准规范', value: '2' },
  { label: '预案', value: '3' },
  { label: '资讯', value: '4' },
]

const contentType = ref('2')

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
  margin: 16px;
  height: 100%;
  position: relative;
}
.up-icon {
  font-size: 32px;
}
.btn {
  padding-left: 120px;
  // position: absolute;
  // bottom: 16px;
  // right: 16px;
  // text-align: right;
}
.common-label {
  width: 120px;
}
</style>
