import { PropType } from 'vue'
import { moreOptionModel } from './typing'

export const basicProps = {
  title: {
    type: String,
    default: '更多操作',
  },
  placement: {
    type: String,
    default: 'bottomRight',
  },
  rowData: {
    type: Object,
    default: null,
  },
  popoverOption: {
    type: Array as PropType<moreOptionModel[]>,
    default: () => [],
  },
}
