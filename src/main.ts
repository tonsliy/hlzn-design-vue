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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
