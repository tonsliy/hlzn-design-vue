import { mount } from '@vue/test-utils'
import Button from '../index.vue'

describe('Button', () => {
  test('render', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.find('.primary').exists()).toBe(false)
  })
})
