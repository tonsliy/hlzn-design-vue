<template>
  <button class="default">按钮组件</button>
  <Avatar :size="64">USER</Avatar>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Avatar }  from 'ant-design-vue'

export default defineComponent({
  name: 'Button',
  components: {
    Avatar
  },
  props: {
    type: {
      type: String as PropType<'default'|'primary'>,
      default: 'default'
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
.default{
  color: #101010;
}
</style>