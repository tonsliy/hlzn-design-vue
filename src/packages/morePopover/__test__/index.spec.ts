import { mount } from '@vue/test-utils'
import SingleSelect from '../src/index.vue'

describe('SingleSelect', () => {
  it('renders', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const wrapper = mount(SingleSelect, {
      props: {
        width: '200px',
      },
    })
    expect(wrapper.html()).toContain('width: 200px;')
  })
})
