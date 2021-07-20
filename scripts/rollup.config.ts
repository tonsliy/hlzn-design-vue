import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'
import commonjs from 'rollup-plugin-commonjs'

const outPubOptions = {
  globals: {
    vue: 'Vue',
  },
}

const input = 'src/packages/hlzn-design-vue.ts'

const getPlugins = () => [
  replace({
    preventAssignment: true,
    values: {
      'import.meta.env.PROD': 'true',
    },
  }),
  nodeResolve(),
  commonjs({
    include: /node_modules/
  }),
  json(),
  vue({
    target: 'browser',
    preprocessStyles: true,
    preprocessOptions: {
      stylus: {
        additionalData: `@import '${process.cwd()}/src/styles/index.styl'`,
      },
    },
    exposeFilename: false,
  }),
  alias({
    entries: [
      {
        find: /^(hlzn-design-vue\/)(.*)/,
        replacement: `${path.resolve(
          __dirname,
          '../src/packages'
        )}/$2/index.ts`,
      },
    ],
  }),
  esbuild({
    minify: true,
  }),
  // genCss(),
  postcss({
    extract: true,
  })
]

const configs = []

configs.push({
  input,
  output: {
    file: `dist/es/hlzn-design-vue.esm.js`,
    format: 'es',
    ...outPubOptions,
  },
  plugins: getPlugins(),
  external(id) {
    const reg =
      /^vue/.test(id) ||
      /^@vue/.test(id) ||
      /^ant-design-vue/.test(id)
    return reg
  },
})

configs.push({
  input,
  output: {
    file: `dist/lib/hlzn-design-vue.umd.js`,
    format: 'umd',
    name: `hlzn-design-vue`,
    ...outPubOptions,
  },
  plugins: getPlugins(),
  external(id) {
    const reg =
      /^vue/.test(id) ||
      /^@vue/.test(id) ||
      /^ant-design-vue/.test(id) ||
      /^jpeg-js/.test(id)
    return reg
  },
})

export default configs
