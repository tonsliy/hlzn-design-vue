/**
 * 选项数据模型
 */
export interface moreOptionModel {
  // 唯一标识
  optionKey: string
  // 标题
  title: string
  // 小标题
  label?: string
  // 图标
  icon?: string
  // 插槽
  slot?: string
  // 颜色
  color?: string
  // 点击事件
  clickFunc?: (data?: Record<string, any>) => void
}
