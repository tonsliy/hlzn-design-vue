---
class: 'multiSelect-doc'
---
# MultiSelect 下拉多选

## Usage

```javascript
import { MultiSelect } from 'hlzn-design-vue'

Vue.creatApp().use(MultiSelect)
```

## Demo

<demo-wrapper
  src="src/packages/multiSelect/demo"
  :demos="demos"
/>

<script setup>
const demos = import.meta.globEager('../../../src/packages/multiSelect/demo/demo*.vue')
</script>


## props

| 属性        | 类型               | 默认值  | 说明                     |
| ----------- | ------------------ | ------- | ------------------------ |
| width | `String` | `120px`       | 宽度     |
| defaultValue        | `String`          | - | 默认值 |
| defaultTitle        | `String`          | 全部 | 默认标题 |
| selectOption      | `Array<optionModel>`          | `[]` | 选项对象    |

## Events

| 事件           | 回调参数                  | 说明               |
| -------------- | ------------------------- | ------------------ |
| change          | `(value: string[])=>void`               | 选择改变事件,返回选中value       |

