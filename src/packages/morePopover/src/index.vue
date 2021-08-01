<template>
  <a-popover
    v-model:visible="visible"
    :title="title"
    trigger="click"
    :placement="placement"
  >
    <template #content>
      <component
        :is="$antIcons['CloseOutlined']"
        class="popover-comp-close"
        @click="hide"
      />
      <div class="popover-content">
        <div
          v-for="(item, key) in popoverOption"
          :key="key"
          class="popover-content-menu"
          @click="itemMenuClick(item)"
        >
          <template v-if="item.slot">
            <slot :name="item.slot" />
          </template>
          <template v-else>
            <a-space :style="{ color: item.color }">
              <component
                :is="$antIcons[item.icon]"
                v-if="item.icon"
              />
              <div v-html="item.title"></div>
            </a-space>
            <div v-if="item.label" class="label">
              {{ item.label }}
            </div>
          </template>
        </div>
      </div>
    </template>

    <a-button
      class="popover-comp-link"
      type="link"
      size="large"
    >
      <template #icon>
        <component :is="$antIcons['EllipsisOutlined']" />
      </template>
    </a-button>
  </a-popover>
</template>

<script lang="ts">
import { defineComponent, ref, toRaw, computed } from 'vue'
import { Popover, Space, Button } from 'ant-design-vue'
import { moreOptionModel } from './typing'
import { basicProps } from './props'

export default defineComponent({
  name: 'MorePopover',
  components: {
    [Popover.name]: Popover,
    [Space.name]: Space,
    [Button.name]: Button,
  },
  props: basicProps,
  emits: ['selectClick'],
  setup(props, { emit }) {
    const visible = ref(false)
    const rowData = computed(() => props.rowData)
    // 关闭
    const hide = () => {
      visible.value = false
    }

    // 点击后关闭及回调
    const itemMenuClick = (item: moreOptionModel) => {
      hide()
      const data = {
        optionKey: item.optionKey,
        ...toRaw(rowData.value),
      }
      if (item.clickFunc) {
        item.clickFunc(data)
      }
      emit('selectClick', data)
    }

    return {
      visible,
      hide,
      itemMenuClick,
    }
  },
})
</script>

<style lang="less" scoped>
.popover-comp-close {
  position: absolute;
  top: 24px;
  right: 12px;
  color: #999999;
}
.popover-comp-link {
  color: #555555;
  font-weight: bold;
  height: 26px;
  font-size: 26px;
  line-height: 26px;
  vertical-align: middle;
}
.ant-popover-inner-content {
  .popover-content {
    cursor: pointer;
  }
  .popover-content-menu {
    padding: 10px 16px;
    .label {
      color: #c8c8c8;
    }
  }
  .popover-content-menu:hover {
    background-color: #ecf6ff;
  }
}
</style>
<style lang="less">
.ant-popover-title {
  padding: 10px;
  color: #999999;
}
.ant-popover-inner-content {
  padding: 0;
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label {
      color: #c8c8c8;
    }
  }
}
</style>
