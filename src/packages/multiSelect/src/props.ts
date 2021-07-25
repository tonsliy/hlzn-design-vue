import { PropType } from 'vue'
import { optionModel } from './typing'

export const basicProps = {
  width: {
    type: String,
    default: '120px',
  },
  // 要选中值
  defaultValue: {
    type: Array,
    default: () => [],
  },
  // 默认展示标题
  defaultTitle: {
    type: String,
    default: '全部',
  },
  // 选项数据
  selectOption: {
    type: Array as PropType<optionModel[]>,
    default: () => [],
  },
}
