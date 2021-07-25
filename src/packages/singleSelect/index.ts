import type { App } from 'vue'
import SingleSelect from './src/index.vue'

SingleSelect.install = (app: App) => {
  app.component(SingleSelect.name, SingleSelect)
}

export { SingleSelect }
export default SingleSelect
