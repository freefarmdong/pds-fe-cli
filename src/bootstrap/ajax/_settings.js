import { Message, MessageBox } from 'element-ui'
import AppSetting from '@/settings'
import { getToken } from '@/utils/auth'
import store from '@/store'
import Spin from '@crud/components/Spin'

let reqNum = 0
let loadingInstance
const _settings = {
  context: process.env.VUE_APP_BASE_API,
  tokenKey: 'x-session-token',
  printRequest: true,
  enableMock: false,
  start(config) {
    if (AppSetting.isDev) {
      console.log('token=', getToken())
    }
    if (getToken()) {
      config.headers[_settings.tokenKey] = getToken()
    }
    if (reqNum <= 0) {
      const _notLoading = this._notLoading(config)
      if (!_notLoading) {
        config.loading && this._loading()
      }
    }
    reqNum++
  },
  end(response) {
    reqNum--
    console.log('response', response)
    if (reqNum <= 0) {
      const _notLoading = this._notLoading(response.config)
      if (!_notLoading) {
        this._closeLoading()
      }
    }
  },
  message(options) {
    console.log('message eerr', options)
    if (options.type === 'error') {
      Message({
        message: options.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    }
  },
  authError() {
    MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again',
      'Confirm logout', {
        confirmButtonText: 'Re-Login',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
      store.dispatch('user/resetToken').then(() => {
        location.reload()
      })
    })
  },
  _loading() {
    loadingInstance = Spin.show({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    return loadingInstance
  },
  _closeLoading() {
    if (loadingInstance) {
      Spin.hide(loadingInstance)
      loadingInstance = null
    }
  },
  _notLoading(config) {
    let notLoading = false
    if (config) {
      if (config.data && config.data._loading === false) {
        notLoading = true
      }
      if (!notLoading) {
        if (config.params && config.params._loading === false) {
          notLoading = true
        }
      }
    }
    return notLoading
  }
}
export default _settings
