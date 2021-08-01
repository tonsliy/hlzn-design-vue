# 快速开始

## 介绍

基于ant-design-vue2.x 版本二次封装组件库，采用Vue3+typescript开发。

- :rocket: 使用 `Vite` 开发
- :airplane: 使用 `esbuild` 构建
- :helicopter: 用 `ts-morph` 生成类型

## 特点

- :rainbow:提炼自企业级中后台产品的交互语言和视觉风格。
- :fireworks:基于Vue3、Vite、TypeScript等最新技术栈开发。
- :helicopter:对日常使用频率较高的组件二次封装,满足基础工作需求。

## 安装

### 使用 npm 或 yarn 安装

```bash
$ npm install hlzn-design-vue --save
```

```bash
$ yarn add hlzn-design-vue
```
如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 使用组件

### 前提

1.安装ant-design-vue2.x
```bash
$ npm i --save ant-design-vue@next
```
2.全局导入ant-design-vue2.x 样式和图标库

```ts
import "ant-design-vue/dist/antd.css";
import * as antIcons from "@ant-design/icons-vue";
app = createApp(App);
// 注册组件
Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons);
});
// 添加到全局
/* global */
app.config.globalProperties.$antIcons = antIcons;
```

### 完整引入

```ts
import App from './App';
import { createApp } from 'vue';
import Hlzn from 'hlzn-design-vue';
import 'hlzn-design-vue/dist/es/hlzn-design-vue.esm.css';

const app = createApp();
app.config.productionTip = false;

app.use(Hlzn);
```

### 局部导入组件

```ts
import { SingleSelect }  from "hlzn-design-vue";
export default defineComponent({
  name: "Home",
  components: {
    SingleSelect
  }
})
```