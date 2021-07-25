<template>
  <button class="default">按钮组件</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<'default' | 'primary'>,
      default: 'default',
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.default {
  color: #101010;
}
</style>
