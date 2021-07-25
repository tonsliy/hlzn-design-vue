import type { App } from 'vue'
import Button from './button/index'
import SingleSelect from './singleSelect/index'

const components = [Button, SingleSelect]
const version = '0.1.7'

    const install = (app: App) => {
      components.forEach((component) => {
        component.name && app.component(component.name, component)
      })
    }

  export { Button, SingleSelect }
export default { version, install }
