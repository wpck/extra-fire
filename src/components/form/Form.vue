<template>
    <div class="self-form">
    <el-form v-if="type === '2'" :model="form" label-width="120px">
        <el-row>
            <el-col :span="12">
                <el-form-item label="编号">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="中文名称">
                    <el-input />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="英文名称">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="类别">
                    <el-input />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="发布单位">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="起草单位">
                    <el-input />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="性质">
                    <el-select>
                        <el-option label="强制性" :value="1" />
                        <el-option label="推荐性" :value="2" />
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="发布日期">
                    <el-date-picker type="date" placeholder="请选择日期" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="实施日期">
                    <el-date-picker type="date" placeholder="请选择日期" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="主要起草人">
                    <el-input />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="标准状态">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="附件上传">
                    <el-upload>
                        <el-icon class="up-icon"><Document /></el-icon>
                    </el-upload>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>


    <el-form v-if="type === '1'" :model="form" label-width="120px">
        <el-row>
            <el-col :span="12">
                <el-form-item label="事故名称">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="发生时间">
                    <el-date-picker type="datetime" placeholder="选择日期时间" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="图片视频上传">
                    <el-upload>
                        <el-icon class="up-icon"><Document /></el-icon>
                    </el-upload>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="报告原文上传">
                    <el-upload>
                        <el-icon class="up-icon"><Document /></el-icon>
                    </el-upload>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="场所类型">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="火灾类型">
                    <el-input />
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>

    <el-form v-if="type === '3'" :model="form" label-width="120px">
        <el-row>
            <el-col :span="12">
                <el-form-item label="预案名称">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="文号">
                    <el-input />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="发布时间">
                    <el-date-picker type="datetime" placeholder="选择日期时间" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="发布单位">
                    <el-input />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="归属地">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="原文上传">
                    <el-upload>
                        <el-icon class="up-icon"><Document /></el-icon>
                    </el-upload>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>

    <el-form v-if="type === '4'" :model="form" label-width="120px">
        <el-row>
            <el-col :span="12">
                <el-form-item label="标题">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="发布时间">
                    <el-date-picker type="datetime" placeholder="选择日期时间" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="新闻来源">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="是否为事故报道">
                    <el-input />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="事故名称">
                    <el-input />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="原文上传">
                    <el-upload>
                        <el-icon class="up-icon"><Document /></el-icon>
                    </el-upload>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="视频图片上传">
                    <el-upload>
                        <el-icon class="up-icon"><Document /></el-icon>
                    </el-upload>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Document } from '@element-plus/icons-vue'

const props = defineProps<{
    type: any
}>()

const form = reactive({})
</script>

<style lang="scss">
.self-form {
.el-date-editor.el-input, .el-date-editor.el-input__wrapper {
    width: 100%;
    .el-input__wrapper {
        width: 100%
    }
}
.el-select {
    width: 100%;
}
}
</style>