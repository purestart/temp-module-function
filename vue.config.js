const path = require('path')
const del = require('del')
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin') //开户gzip压缩
const MergeModulePlugin = require('../merge-module-plugin')
const HtmlModulePlugin = require('../html-module-plugin')

const buildConfigBuilder = require('../parent/src/build.config')
let buildConfig = buildConfigBuilder.getConfig('{{options.folder}}')

const isProduction = process.env.NODE_ENV === 'production'
const envConfigBuilder = require('../parent')
let envConfig = envConfigBuilder.getEnv('{{options.folder}}')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const publicPath = process.env.BASE_URL || '/'
console.log(buildConfig)
module.exports = {
  // runtimeCompiler: true, // 包含编译器
  publicPath: publicPath,
  // outputDir: 'dist/static',
  // assetsDir: "static",
  // indexPath: resolve('dist/index.html'),
  // lintOnSave: false,
  productionSourceMap: false,
  // transpileDependencies: ["element-ui-verify", "vue-baidu-map"],
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()]
  // },

  configureWebpack: config => {
    const argvs = process.argv.slice(2)
    console.log(' ===========================')
    console.log(argvs)
    console.log(' ===========================')
    del.sync(['./public/module'], { force: true })
    del.sync(['./public/assets/external'], { force: true })
    let __pack_external = buildConfigBuilder.getExternal(buildConfig)
    console.log('__pack_external' + JSON.stringify(__pack_external))
    let __externals = {}
    buildConfig.plugins.forEach(item => {
      __externals[item.folder] = item.folder
    })
    console.log('')
    console.log('__module_externals' + JSON.stringify(__externals))
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      'element-ui': 'ELEMENT',
      nprogress: 'NProgress',
      moment: 'moment',
      vuedraggable: 'vuedraggable',
      jquery: 'jQuery',
      ...__pack_external,
      ...__externals
    }
    let plugins = [
      new HtmlModulePlugin({
        config: buildConfig,
        publicPath: publicPath
      }),
      new MergeModulePlugin({
        config: buildConfig,
        dirname: __dirname,
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
          },
          output: {
            // 去掉注释内容
            comments: false
          }
        },
        sourceMap: false,
        parallel: true
      })
    ]
    let ProPlugins = [
      new CompressionPlugin({
        // asset: "[path].gz[query]", //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
        algorithm: 'gzip', //算法
        test: new RegExp(
          '\\.(js|css)$' //压缩 js 与 css
        ),
        threshold: 1024 * 5 //只处理比这个值大的资源。按字节计算
        // minRatio: 0.3 //只有压缩率比这个值小的资源才会被处理
      })
    ]
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      if (argvs.length > 7 && argvs[2] === 'lib') {
        console.log('========================')
        console.log('build for lib')
        console.log('========================')
        config.plugins = [...config.plugins, ...ProPlugins]
      } else {
        config.plugins = [...config.plugins, ...plugins, ...ProPlugins]
      }
    } else {
      // 为开发环境修改配置...
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  chainWebpack: config => {
    //打包文件带hash
    config.output.filename('[name].[hash].js').end()
    const argvs = process.argv.slice(2)
    let isLib = false
    if (isProduction && (argvs.length > 7 && argvs[2] === 'lib')) {
      isLib = true
    }
    if (isProduction) {
      // config
      //   .plugin("webpack-bundle-analyzer")
      //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    } else {
    }
    if (!isLib) {
      config.plugin('define').tap(args => {
        args[0]['process.env']['VUE_APP_SYS_CONFIG'] = JSON.stringify(envConfig)
        return args
      })
    }
    // config.optimization.minimize(false)
    // config.plugin("html").tap(args => {
    //   args[0].template = resolve(process.env.VUE_APP_INDEX);
    //   // args[0].template = process.env.VUE_APP_PROD ? resolve('./html/index-prod.html') : resolve('./html/index.html')
    //   return args;
    // });
    // const svgRule = config.module.rule("svg");
    // svgRule.uses.clear();
    // svgRule
    //   .test(/\.svg$/)
    //   .include.add(resolve("src/assets/icons/svg"))
    //   .end()
    //   .use("svg-spritse-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //     symbolId: "icon-[name]"
    //   });
    // 单独打包vue相关库
    // config.entry('lib')
    //   .add('vue')
    //   .add('vuex')
    //   .add('vue-router')
    //   .end()
    // config.optimization.splitChunks({
    //   cacheGroups: {
    //     lib: {
    //       name: `lib`,
    //       priority: 1,
    //       chunks: 'initial',
    //       test: 'lib',
    //     },
    //     vendors: {
    //       name: `chunk-vendors`,
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10,
    //       chunks: 'initial'
    //     },
    //     common: {
    //       name: `chunk-common`,
    //       minChunks: 2,
    //       priority: -20,
    //       chunks: 'initial',
    //       reuseExistingChunk: true
    //     }
    //   }
    // })
    // 设置一些别名
    config.resolve.alias.set('src', resolve('src'))
    // config.resolve.alias
    //   .set('@g', resolve('src/global'))
    //   .set('@bc', resolve('src/baseComponent'))
    //   .set('@common', resolve('src/modules/common/view'))
    //   .set('@utils', resolve('src/assets/utils'))
  },
  devServer: {
    port: {{options.port}},
    host: '127.0.0.1'
    // proxy: {
    //   "/api": {
    //     ws: false,
    //     target: "http://47.107.241.174:8081",
    //     changeOrigin: true
    //   }
    // }
  }
}
