<!-- 组件标题框 -->
<script lang="ts">
export default {
  name: 'SingleSelect',
  title: '基本用法',
}
</script>

<!-- 组件基本用法 -->
<template>
  <SingleSelect
    :select-option="statusDic"
    @change="handleStatusChange"
  ></SingleSelect>
</template>
<script setup lang="ts">
import SingleSelect from 'hlzn-design-vue/singleSelect'
import type { optionModel } from 'hlzn-design-vue/singleSelect/src/typing'

const statusDic: Array<optionModel> = [
  { title: '启用', value: '0' },
  { title: '禁用', value: '1' },
  { title: '全部状态', value: '' },
]

const handleStatusChange = (value: string) => {
  console.log('value>>>>', value)
}
</script>
