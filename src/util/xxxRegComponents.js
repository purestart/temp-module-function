// import DyTable from '../components/DyTable/DyTable.vue'
import '../assets/css/element-common.scss'
import {{options.folder}}List from '{{options.folder}}Src/http/interface'

export default {
  install(Vue) {
    // 模块工具注册 请加模块名
    // Vue.prototype.${{options.folder}}Utils = utils

    Object.defineProperties(Vue.prototype, {
      //挂载在Vue原型的 $api 对象上
      ${{options.folder}}List: {
        get() {
          return {{options.folder}}List
        }
      }
    })

    // 模块组件注册 请加模块名
    // Vue.component('xxx-dy-table', DyTable)
  }
}
