import { PropType } from 'vue'
import { optionModel } from './typing'

export const basicProps = {
  width: {
    type: String,
    default: '120px',
  },
  // 选中值
  defaultValue: {
    type: String,
    default: '',
  },
  // 选项数据
  selectOption: {
    type: Array as PropType<optionModel[]>,
    require: true,
    default: () => [],
  },
}
