import { createApp } from 'vue'
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import App from './App.vue'
import routes from 'virtual:generated-pages'
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less')
}
import * as antIcons from '@ant-design/icons-vue'

const app = createApp(App)
// 注册组件
Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons)
})
// 添加到全局
/* global */
app.config.globalProperties.$antIcons = antIcons

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router).mount('#app')
