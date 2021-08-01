import type { App } from 'vue'
import MultiSelect from './multiSelect/index'
import SingleSelect from './singleSelect/index'

const components = [MultiSelect, SingleSelect]
const version = '0.1.24'

    const install = (app: App) => {
      components.forEach((component) => {
        component.name && app.component(component.name, component)
      })
    }

  export { MultiSelect, SingleSelect }
export default { version, install }
