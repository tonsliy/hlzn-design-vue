---
class: 'morePopover-doc'
---
# MorePopover 更多操作弹窗组件

## Usage

```javascript
import { MorePopover } from 'hlzn-design-vue'

Vue.creatApp().use(MorePopover)
```

## Demo

<demo-wrapper
  src="src/packages/morePopover/demo"
  :demos="demos"
/>

<script setup>
const demos = import.meta.globEager('../../../src/packages/morePopover/demo/demo*.vue')
</script>

## props

| 属性        | 类型               | 默认值  | 说明                     |
| ----------- | ------------------ | ------- | ------------------------ |
| title | `String` | 更多操作       | 弹窗标题     |
| placement        | `String`          | `bottomRight` | 弹窗位置 |
| rowData        | `Object`          | - | 透传数据对象 |
| popoverOption      | `Array<moreOptionModel>`          | `[]` | 选项对象     |

## Events

| 事件           | 回调参数                  | 说明               |
| -------------- | ------------------------- | ------------------ |
| selectClick          | `(data: Record<string, any>)=>void`               | 选择改变事件,返回选中value       |
