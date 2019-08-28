import Vue from 'vue'
import ElementUI from 'element-ui'
import moment from 'moment'
import axios from 'axios'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.axios = axios
Vue.prototype.$moment = moment
import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.use(ElementUI)

import {
  baseStore,
  baseRouter,
  sysRoutes,
  Login,
  Main,
  Home,
  App,
  baseRegComponents,
  baseRouterView
} from 'base'
baseStore.commit('updateProcessEnv', process.env)
import { {{options.folder}}RegComponents, {{options.folder}}Routes, {{options.folder}}Store, {{options.folder}}RouterView } from './index'
import NProgress from 'nprogress'

Vue.use({{options.folder}}RegComponents)
Vue.use(baseRegComponents)
if ({{options.folder}}Store) {
  for (var key in {{options.folder}}Store) {
    console.log(key)
    baseStore.registerModule(key, {{options.folder}}Store[key])
  }
}

const setGlobalTopNavs = function(to, next) {
  let matchedLength = to.matched.length
  let item = to
  if (matchedLength > 2) {
    item = to.matched[2]
  }
  if (!item.meta.hidden) {
    let newItem = {
      name: item.meta.title,
      path: item.path,
      query: item.query,
      params: item.params
    }
    baseStore.commit('updateNavTabData', newItem)
  }
  next()
}

/**
 * Config
 */

Vue.config.debug = process.env.NODE_ENV === 'development'
Vue.config.silent = process.env.NODE_ENV === 'production'
Vue.config.devtools = true
Vue.config.productionTip = false
// sessionStorage.setItem("token", "3049fd0f-da89-4c91-89ef-c9213be32eef");

const routerView = {
  template: '<router-view></router-view>'
}

// baseRouter.options.routes = baseRouter.options.routes.concat(router);

let routes = [
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: Login,
    name: '登录'
  },
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: Main,
    redirect: 'home',
    children: [
      // 首页
      {
        path: 'home',
        meta: {
          title: '工作台',
          hidden: true
        },
        component: Home,
        name: '主页'
      },
      //基础平台系统路由
      {
        path: 'sys',
        meta: {
          title: '系统管理'
        },
        component: baseRouterView,
        name: '系统管理',
        children: sysRoutes
      },
      // {{options.title}}路由
      {
        path: '{{options.path}}',
        meta: {
          title: '{{options.title}}'
        },
        component: {{options.folder}}RouterView,
        name: '{{options.title}}',
        children: {{options.folder}}Routes
      }
    ]
  }
]
baseRouter.options.routes = routes
baseRouter.addRoutes(routes)

baseRouter.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token')
  let user = localStorage.getItem('user')
  NProgress.start()
  /*if(from.path=='/login'){
      sessionStorage.removeItem('tagNavList')
  }*/
  if (to.path == '/login') {
    localStorage.clear()
    baseStore.commit('updateLoginToken', null)
    baseStore.commit('updateLoginUser', null)
    baseStore.commit('updateUserMenu', null)
    // store.commit('updateNavTabDataByIndex',[{
    //     path: '/home',
    //     title: '主页',
    // }] )
    next()
  } else {
    if (!baseStore.state.loginToken || !user) {
      if (token && user) {
        baseStore.commit('updateLoginTokenCPM', token)
        baseStore.commit('updateLoginUserCPM', JSON.parse(user))
        setGlobalTopNavs(to, next)
      } else {
        next({
          path: '/login'
        })
      }
    } else {
      setGlobalTopNavs(to, next)
    }
  }
  next()
})
baseRouter.afterEach(transition => {
  NProgress.done()
  // setTimeout(() => {
  //     if (document && document.getElementById('wholeLoadingId') && document.getElementById('wholeLoadingId').style.display != 'none') {
  //         document.getElementById('wholeLoadingId').style.display = 'none'
  //     }
  // }, 20)
})

//  全局组件之间通信
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()

// 设置浏览器窗口大小
window.onresize = function(e) {
  baseStore.commit('changeWindowSize', {
    innerWidth: e.target.innerWidth,
    innerHeight: e.target.innerHeight
  })
}

new Vue({
  router: baseRouter,
  store: baseStore,
  render: h => h(App)
}).$mount('#app')
