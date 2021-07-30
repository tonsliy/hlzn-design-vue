---
class: 'singleSelect-doc'
---
# SingleSelect 下拉单选

## Usage

```javascript
import { SingleSelect } from 'hlzn-design-vue'

Vue.creatApp().use(SingleSelect)
```

## Demo

<demo-wrapper
  src="src/packages/singleSelect/demo"
  :demos="demos"
/>

<script setup>
const demos = import.meta.globEager('../../../src/packages/singleSelect/demo/demo*.vue')
</script>


## props

| 属性        | 类型               | 默认值  | 说明                     |
| ----------- | ------------------ | ------- | ------------------------ |
| width | `String` | `120px`       | 宽度     |
| defaultValue        | `String`          | - | 默认值 |
| selectOption      | `Array<optionModel>`          | `[]` | 选项对象,当value为空时，表示该项为‘取消选择’     |

## Events

| 事件           | 回调参数                  | 说明               |
| -------------- | ------------------------- | ------------------ |
| change          | `(value: string)=>void`               | 选择改变事件,返回选中value       |
