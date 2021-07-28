import { ComponentInternalInstance } from 'vue'

export interface InstanceModel
  extends ComponentInternalInstance {
  ctx: Record<string, any>
}

/**
 * 选项数据模型
 */
export interface optionModel {
  title: string
  value: string | ''
  checked?: boolean
}
