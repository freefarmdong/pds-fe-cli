/**
 * 远程数据访问
 *
 * @author wenwang
 * @date   2020/8/14-15:40
 */
import createAjax from '@public/request'
import ReqSettings from './_settings'
import Vue from 'vue'
import AjaxObj from '@public/api/Ajax'

/**
 * 创建一个ajax实例
 */
const instance = createAjax(ReqSettings)
/**
 * 提供一个简易post
 *
 * @param url
 * @param data 传输的数据
 * @param config 其它配置，见axios文档
 * @return {Promise<unknown>}
 */
export const post = async(url, data, config = { loading: true }) => {
  try {
    const response = await instance({
      method: 'post',
      url,
      data,
      ...config
    })
    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}
/**
 * 提供简易get
 * @param url
 * @param params 传输的数据
 * @param config 其它配置，见axios文档
 * @return {Promise<unknown>}
 */
export const get = async(url, params, config = { loading: true }) => {
  try {
    const response = await instance({
      method: 'get',
      url,
      params,
      ...config
    })
    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

/**
 * 创建一个函数对象，函数再执行参数传输
 *
 * @param searchUrl
 * @param searchMethod
 * @return {function(*=): *}
 */
export function createRequest(searchUrl, searchMethod = 'post') {
  const fetch = (params) => {
    let requestObject = null
    const method = searchMethod.toLowerCase()
    if (method === 'get') {
      requestObject = instance[method](searchUrl, { params })
    } else {
      requestObject = instance[method](searchUrl, params)
    }
    return requestObject
  }
  return fetch
}

const Ajax = {
  install(Vue, options) {
    Vue.prototype.$axios = instance
    Vue.prototype.$get = get
    Vue.prototype.$post = post
    Vue.prototype.$createRequest = createRequest
    Vue.prototype.$context = ReqSettings.context
  }
}
Vue.use(Ajax)
AjaxObj.request = instance
AjaxObj.post = post
AjaxObj.get = get
AjaxObj.createRequest = createRequest
AjaxObj.context = ReqSettings.context

export const request = instance
