import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePages from 'vite-plugin-pages'
import ViteComponents, { AntDesignVueResolver} from  'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePages({
      pagesDir: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/packages', baseRoute: '' }
      ],
      exclude: [
        '*/*.vue',
        '*/test/*.vue',
        '*/demo/demo[0-9].vue',
      ],
      extensions: ['vue']
    }),
    ViteComponents({
      dirs: ['src/packages'],
      customLoaderMatcher: (id) => id.endsWith('.md'),
      customComponentResolvers: [
        AntDesignVueResolver(),
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ]
    }),
    Icons()
  ],
  resolve: {
    alias: {
      'hlzn-design-vue/':
        process.env.NODE_ENV !== 'preview'
          ? `${path.resolve(__dirname, './src/packages')}/`
          : `${path.resolve(__dirname, './dist/es')}/`,
      'dist/': `${path.resolve(__dirname, './dist/es')}/`,
    }
  }
})
