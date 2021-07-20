---
class: 'button-doc'
---
# Button 按钮

## use

```javascript
import { Button } from 'hlzn-lib'

Vue.creatApp().use(Button.name, Button)
```

## demo

<demo-wrapper
  src="src/packages/button/demo"
  :demos="demos"
/>

<script setup>
const demos = import.meta.globEager('../../../src/packages/button/demo/demo*.vue')
</script>

## props

## event
