'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const del = require('del')
del.sync(['./static/module'], { force: true })
del.sync(['./static/assets/external'], { force: true })

const buildConfigBuilder = require('../../parent/src/build.config')
let buildConfig = buildConfigBuilder.getConfig('{{options.folder}}')
console.log(buildConfig)
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

let __pack_external = buildConfigBuilder.getExternal(buildConfig)

console.log('__pack_external' + JSON.stringify(__pack_external))

let __externals = {}
buildConfig.plugins.forEach(item => {
  __externals[item.folder] = item.folder
})
console.log('')
console.log('__module_externals' + JSON.stringify(__externals))

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app:
      process.env.NODE_ENV === 'production' ? './src/index.js' : './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    'element-ui': 'ELEMENT',
    vuedraggable: 'vuedraggable',
    nprogress: 'NProgress',
    moment: 'moment',
    ...__pack_external,
    ...__externals
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      {{options.folder}}Src: resolve('src')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
