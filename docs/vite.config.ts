import { UserConfig } from 'vite'
import Components, {
  AntDesignVueResolver,
} from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

const config: UserConfig = {
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      'hlzn-design-vue/': `${path.resolve(
        __dirname,
        // '../dist/es'
        '../src/packages'
      )}/`,
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/shared', '@vueuse/core'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      dirs: ['.vitepress/theme/components'],
      customLoaderMatcher: (id) => id.endsWith('.md'),
      customComponentResolvers: [
        AntDesignVueResolver(),
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons(),
    WindiCSS({
      preflight: false,
    }),
  ],
}

export default config
