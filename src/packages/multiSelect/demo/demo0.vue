<script lang="ts">
export default {
  name: 'MultiSelect',
  title: '基本用法',
}
</script>
<template>
  <MultiSelect
    :select-option="statusDic"
    @change="handleStatusChange"
  ></MultiSelect>
</template>

<script setup lang="ts">
import MultiSelect from 'hlzn-design-vue/multiSelect'
import type { optionModel } from 'hlzn-design-vue/multiSelect/src/typing'
const statusDic: Array<optionModel> = [
  { title: '状态1', value: '0' },
  { title: '状态2', value: '1' },
  { title: '状态2', value: '2' },
]

const handleStatusChange = (value: string) => {
  console.log('value>>>>', value)
}
</script>
