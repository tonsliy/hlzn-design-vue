<!-- 组件标题框 -->
<script lang="ts">
export default {
  name: 'MorePopover',
  title: '基本用法',
}
</script>

<!-- 组件基本用法 -->
<template>
  <MorePopover
    :popover-option="moreOption"
    @selectClick="optionSelectClick"
  ></MorePopover>
</template>
<script setup lang="ts">
import MorePopover from 'hlzn-design-vue/morePopover'
import type { moreOptionModel } from 'hlzn-design-vue/morePopover/src/typing'

const moreOption: moreOptionModel[] = [
  { optionKey: 'edit', title: '编辑', icon: 'EditFilled' },
  {
    optionKey: 'delete',
    title: '删除',
    icon: 'DeleteFilled',
  },
  {
    optionKey: 'add',
    title: '新增',
    icon: 'PlusCircleFilled',
  },
]

const optionSelectClick = (data: Record<string, any>) => {
  console.log('optionSelectClick>>>>', data)
}
</script>
