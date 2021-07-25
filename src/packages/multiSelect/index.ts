import type { App } from 'vue'
import MultiSelect from './src/index.vue'

MultiSelect.install = (app: App) => {
  app.component(MultiSelect.name, MultiSelect)
}

export { MultiSelect }
export default MultiSelect
