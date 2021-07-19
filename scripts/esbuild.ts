import path from 'path'
import { build, BuildOptions } from 'esbuild'
import { cwd } from 'process'
import fs from 'fs'
import ora from 'ora'
import klawSync from 'klaw-sync'
import vue from './plugins/esbuild-vue-plugin'

const PACKAGES_PATH = path.resolve(
  __dirname,
  '../src/packages'
)

const componentEntrys = klawSync(PACKAGES_PATH, {
  nofile: true,
  depthLimit: 0,
}).map((dir) => dir.path + '/index.ts')

async function run(options?: BuildOptions) {
  await build({
    outdir: `${cwd()}/dist/es`,
    bundle: true,
    entryPoints: componentEntrys,
    plugins: [vue()],
    loader: { '.png': 'dataurl' },
    external: [
      'vue',
      'hlzn-lib/*',
      '@vue/*',
      '@better-scroll/*',
      'jpeg-js',
      'ant-design-vue'
    ],
    format: 'esm',
    minify: false,
    ...options,
  })
}

async function bundle(options?: BuildOptions) {
  await build({
    outfile: `${cwd()}/dist/es/hlzn-lib.esm.js`,
    bundle: true,
    entryPoints: [`${cwd()}/src/packages/hlzn-lib.ts`],
    plugins: [vue()],
    loader: { '.png': 'dataurl' },
    external: ['vue', 'hlzn-lib/*', '@vue/*', 'ant-design-vue'],
    format: 'esm',
    minify: true,
    ...options,
  })
}
const spinner = ora('Build...').start()

Promise.all([
  run(),
  run({
    format: 'cjs',
    outdir: `${cwd()}/dist/lib`,
  }),
])
  .then(async () => {
    // await combineCss()
    spinner.succeed('Done !')
  })
  .catch(() => {
    spinner.succeed('Failed !')
  })

async function combineCss() {
  const allCss = klawSync(`${cwd()}/dist/es`, {
    nofile: true,
    depthLimit: 0,
  }).map((dir) => dir.path + '/index.css')

  let content = ''
  for (const css of allCss) {
    if (fs.existsSync(css)) {
      content += await fs.promises.readFile(css, 'utf8')
    }
  }

  // override bundle css
  await Promise.all([
    fs.promises.writeFile(
      `${cwd()}/dist/es/hlzn-lib.esm.css`,
      content
    ),
    fs.promises.writeFile(
      `${cwd()}/dist/lib/hlzn-lib.umd.css`,
      content
    ),
  ])

  const name = 'hlzn-lib.min.css'
  await Promise.all([
    fs.promises.rename(
      `${cwd()}/dist/es/hlzn-lib.esm.css`,
      `${cwd()}/dist/es/${name}`
    ),
    fs.promises.rename(
      `${cwd()}/dist/lib/hlzn-lib.umd.css`,
      `${cwd()}/dist/lib/${name}`
    ),
  ])
}
