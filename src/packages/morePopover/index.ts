import type { App } from 'vue'
import MorePopover from './src/index.vue'

MorePopover.install = (app: App) => {
  app.component(MorePopover.name, MorePopover)
}

export { MorePopover }
export default MorePopover
