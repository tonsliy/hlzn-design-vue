<template>
  <a-dropdown
    v-model:visible="visible"
    :trigger="['click']"
    placement="bottomRight"
    @visibleChange="onChange"
  >
    <a
      :class="{
        'ant-select-selection ant-select-selection--single multi-select-selection': true,
        'multi-select-focused': visible,
      }"
      :style="{ width: compWidth, display: 'block' }"
      @click.prevent
    >
      <div class="selected-value">{{ selectData }}</div>
      <!-- <DownOutlined class="select-arrow" /> -->
    </a>
    <template #overlay>
      <!-- <a-menu
        class="multi-select-menu"
        :style="{ minWidth: compWidth }"
      >
        <a-menu-item
          v-for="(item, key) in selectOption"
          :key="key"
        >
          <a-checkbox
            :style="{ width: '100%' }"
            :checked="item.checked"
            @click="handleMenuClick(key)"
          >
            {{ item.title }}
          </a-checkbox>
        </a-menu-item>
        <a-divider :style="{ margin: '2px 0' }" />
        <a-menu-item>
          <a-checkbox
            :indeterminate="indeterminate"
            :checked="checkAll"
            @change="onCheckAllChange"
          >
            全选
          </a-checkbox>
        </a-menu-item>
      </a-menu> -->
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref,
  watch,
  toRef,
} from 'vue'
// import { DownOutlined } from '@ant-design/icons-vue'
import {
  Checkbox,
  // Menu,
  // Divider,
  // Dropdown,
} from 'ant-design-vue'
import { basicProps } from './props'
import { optionModel } from './typing'

export default defineComponent({
  name: 'MultiSelect',
  components: {
    // DownOutlined,
    [Checkbox.name]: Checkbox,
    // [Divider.name]: Divider,
    // [Dropdown.name]: Dropdown,
    // [Menu.name]: Menu,
    // 'a-menu-item': Menu.Item,
  },
  props: basicProps,
  emits: ['change'],
  setup(props, { emit }) {
    const compWidth = ref(props.width)
    const defaultTitle = ref(props.defaultTitle)
    const visible = ref(false)
    const selectData = ref('')
    const selectList = reactive<string[]>([])
    const indeterminate = ref(false)
    const checkAll = ref(false)
    const defaultValue = toRef(props, 'defaultValue')
    const selectOption: optionModel[] = reactive(
      props.selectOption
    )

    watch(
      defaultValue,
      (newValue) => {
        selectList.length = 0
        selectOption.forEach((option) => {
          option.checked = false
          if (newValue.indexOf(option.value) > -1) {
            option.checked = true
            selectList.push(option.value)
          }
        })
        indeterminate.value =
          !!selectList.length &&
          selectList.length < selectOption.length
        checkAll.value =
          selectOption.length === selectList.length
      },
      {
        immediate: true,
      }
    )

    watch(
      selectList,
      (newValue) => {
        if (newValue.length > 0) {
          const _titleArr: string[] = []
          selectOption.forEach((item) => {
            if (newValue.indexOf(item.value) > -1) {
              _titleArr.push(item.title)
            }
          })
          selectData.value = _titleArr.join('/')
        } else {
          selectData.value = defaultTitle.value
        }
      },
      {
        immediate: true,
      }
    )

    // 选择改变事件
    const onChange = (visible: boolean) => {
      console.log('onChange')
      // 选择框关闭，返回选择的数据
      if (!visible) {
        emit('change', selectList)
      }
    }
    // 选择事件
    const handleMenuClick = (key: number) => {
      const item = selectOption[key]
      item.checked = !item.checked
      if (item.checked) {
        selectList.push(item.value)
      } else {
        const pos = selectList.indexOf(item.value)
        if (pos > -1) {
          selectList.splice(pos, 1)
        }
      }
      indeterminate.value =
        !!selectList.length &&
        selectList.length < selectOption.length
      checkAll.value =
        selectOption.length === selectList.length
    }

    // 全选
    const onCheckAllChange = () => {
      selectList.length = 0
      selectOption.forEach((option) => {
        option.checked = !checkAll.value
        if (option.checked) {
          selectList.push(option.value)
        }
      })
      checkAll.value = !checkAll.value
      indeterminate.value = false
    }

    return {
      compWidth,
      visible,
      selectData,
      selectList,
      indeterminate,
      checkAll,

      onChange,
      handleMenuClick,
      onCheckAllChange,
    }
  },
})
</script>

<style lang="less" scoped>
.multi-select-selection {
  text-align: right;
  color: #333;
  line-height: 32px;
  padding: 0 12px;
  border: 1px solid transparent;
  .selected-value {
    display: block;
    width: calc(100% - 20px);
    float: left;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.multi-select-selection:hover {
  .selected-value,
  .select-arrow {
    color: #1091ff;
  }
}
.multi-select-selection.ant-dropdown-open {
  color: #1091ff;
  border: 1px solid #69b9ff !important;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
.multi-select-menu {
  display: block;
  .ant-checkbox-wrapper-checked {
    color: #1091ff;
  }
  .ant-checkbox-inner {
    border: 1px solid #c9c9c9;
  }
}
</style>
