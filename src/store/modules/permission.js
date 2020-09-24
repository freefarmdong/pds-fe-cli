import {constantRoutes} from '@/router'
import {getRemoteRoutes} from '@/api/role'
import Layout from '@/layout'
import Wrap from '@public/template/wrap'
import OnlyView from '@public/components/only-view'
import _ from '@public/libs/util.lodash'
import templateRegistor from '@public/template/template-registor'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: []
}
const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}
const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise((resolve, cat) => {
      try {
        getRemoteRoutes(roles).then((result) => {
          const accessedRoutes = result.data || []
          console.log('routers', result)
          /* if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes_ || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes_, roles)
        }*/
          buildRouters(accessedRoutes)
          accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
      } catch (e) {
        cat(e)
      }
    })
  },
  appendRoutes({ commit }, accessedRoutes) {
    return new Promise(resolve => {
      buildRouters(accessedRoutes)
      accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}
const buildRouters = (routers) => { // 遍历后台传来的路由字符串，转换为组件对象
  routers.forEach(router => {
    if (router.component) {
      const component = _.toLower(router.component)
      if (component === 'layout') { // Layout组件特殊处理
        router.component = Layout
      } else if (component === 'wrap') { // Wrap组件特殊处理
        router.component = Wrap
      } else if (component === 'onlyview') {
        router.component = OnlyView
      } else {
        router.component = loadView(router.component)
      }
    }
    if (router.children && router.children.length) {
      router.children = buildRouters(router.children)
    }
  })
  return routers
}
export const loadView = (view) => {
  const componentDefine = templateRegistor.get(view)
  if (componentDefine) {
    return componentDefine
  } else if (view.startsWith('public/template')) {
    return (resolve) => require(['@public/template/' + view.substr('public/template/'.length)], resolve)
  } else if (view.startsWith('views')) {
    return (resolve) => require(['@/views/' + view.substr('views/'.length)], resolve)
  } else if (view.search(/^@public.*/) !== -1) {
    return (resolve) => require(['@public/template/' + view.substr('@public/template/'.length)], resolve)
  } else {
    return (resolve) => require([`@/views/${view}`], resolve)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
