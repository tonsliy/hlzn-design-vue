import 'windi-base.css'
import 'windi-components.css'
import 'windi-utilities.css'
import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'
import './styles/prism.css'
import 'ant-design-vue/dist/antd.less'
import 'hlzn-design-vue/hlzn-design-vue.css'

import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import DemoWrapper from './DemoWrapper.vue'
import * as antIcons from '@ant-design/icons-vue'

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('DemoWrapper', DemoWrapper)

    // 注册组件
    Object.keys(antIcons).forEach((key) => {
      app.component(key, antIcons)
    })
    // 添加到全局
    /* global */
    app.config.globalProperties.$antIcons = antIcons
  },
}

export default theme