import type { App } from 'vue'
import MorePopover from './morePopover/index'
import MultiSelect from './multiSelect/index'
import SingleSelect from './singleSelect/index'

const components = [MorePopover, MultiSelect, SingleSelect]
const version = '0.1.25'

    const install = (app: App) => {
      components.forEach((component) => {
        component.name && app.component(component.name, component)
      })
    }

  export { MorePopover, MultiSelect, SingleSelect }
export default { version, install }
