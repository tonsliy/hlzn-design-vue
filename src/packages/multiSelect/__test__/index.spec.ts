import { mount } from '@vue/test-utils'
import MultiSelect from '../src/index.vue'

describe('MultiSelect', () => {
  it('renders', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const wrapper = mount(MultiSelect, {
      props: {
        width: '200px',
      },
    })
    expect(wrapper.html()).toContain('width: 200px;')
  })
})
