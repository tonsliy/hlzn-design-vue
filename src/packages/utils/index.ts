import { defineComponent, DefineComponent } from "vue"

type component = DefineComponent<{}, {}, any>
export const createDemoModule = (name: string, demos: component[]) => defineComponent({
  name: `${name}-demo`,
  setup() {
    return {
      demos
    }
  }
})