import type { App } from 'vue'
import Button from './button/index'
import MultiSelect from './multiSelect/index'
import SingleSelect from './singleSelect/index'

const components = [Button, MultiSelect, SingleSelect]
const version = '0.1.9'

    const install = (app: App) => {
      components.forEach((component) => {
        component.name && app.component(component.name, component)
      })
    }

  export { Button, MultiSelect, SingleSelect }
export default { version, install }
