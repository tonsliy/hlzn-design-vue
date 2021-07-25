<template>
  <a-select
    v-model:value="selectData"
    class="select-comp"
    :default-value="defaultValue"
    :style="{ width: width }"
    option-label-prop="label"
    @change="handleChange"
  >
    <a-select-option
      v-for="(item, key) in optionList"
      :key="key"
      :value="item.value"
      :label="item.title"
      :class="
        item.value
          ? 'option-menu-item'
          : 'cancel-option-menu-item'
      "
    >
      {{ item.value ? item.title : '取消选择' }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { Select } from 'ant-design-vue'
import { basicProps } from './props'
import { optionModel } from './typing'

export default defineComponent({
  name: 'SingleSelect',
  components: {
    [Select.name]: Select,
    'a-select-option': Select.Option,
  },
  props: basicProps,
  emits: ['change'],
  setup(props, { emit }) {
    const selectData = ref('')
    const optionList: Array<optionModel> = reactive(
      props.selectOption
    )

    // 选择事件，并通知父类
    const handleChange = (value: string) => {
      emit('change', value)
    }
    // 取消选择
    const cancelSelect = () => {
      selectData.value = ''
    }

    return {
      selectData,
      optionList,
      handleChange,
      cancelSelect,
    }
  },
})
</script>

<style lang="less" scoped>
@select-blue: #1091ff;
@select-block: #333333;
.select-comp {
  min-width: 100px;
  :deep .ant-select-selector {
    border-color: transparent;
    .ant-select-selection-item {
      color: @select-block;
    }
  }
  :deep .ant-select-arrow {
    color: @select-block;
  }
  :deep .ant-select-selection-item {
    width: calc(100% - 20px);
    float: left;
    text-align: right;
  }
}
.select-comp:hover {
  :deep .ant-select-selector {
    border-color: transparent;
  }
  // border-color: transparent;
  :deep .ant-select-selection-item {
    color: @select-blue;
  }
  :deep .ant-select-arrow {
    color: @select-blue;
  }
}

.select-comp.ant-select-open,
.select-comp.ant-select-focused {
  :deep .ant-select-selection-item,
  :deep .ant-select-arrow {
    color: @select-blue;
  }
  .ant-select-selection:hover {
    border-color: #69b9ff;
  }
}
</style>

<style lang="less">
@select-blue: #1091ff;
.option-menu-item.ant-select-item-option-selected {
  color: @select-blue !important;
  background-color: #ecf6ff;
}
.cancel-option-menu-item {
  border-top: 1px solid #e4e8f3;
}
.cancel-option-menu-item.ant-select-item-option-selected {
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  font-weight: 400;
}
</style>
