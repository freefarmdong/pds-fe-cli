/**
 *
 * 此文件完全属于开发者相关配置，按自己的开发环境进行配置
 * 此文件将不放入git管理
 * 每次
 * @author wenwang
 * @date   2020/7/1-12:11
 */

// -------------
// 1) 共享目录：放置其它git公用组件, 这个目录允许开发人员自己定义项目下的共享目录名称
const BASE_SHARED = './packages'
// -----------
const port = process.env.port || process.env.npm_config_port || 9527 // dev port
const SEV_CONF = {
  port: port,
  open: true,
  overlay: {
    warnings: false,
    errors: true
  }
}
// ------------
// 4) 是否按mock
// const ENABLE_MOCK = true
const ENABLE_MOCK = false
// 如果是mock，则使用本地的mock-serve
// 如果不是mock，则使用代理
if (ENABLE_MOCK) {
  Object.assign(SEV_CONF, {
    before: require('./mock/mock-server.js')
  })
} else {
  Object.assign(SEV_CONF, {
    proxy: {
      '/dev-api': {
        // target: "http://139.129.224.86:9099",
        // target: 'http://192.168.0.126:9099',
        target: 'http://121.42.230.107:9002',
        pathRewrite: { '^/dev-api': '' },
        changeOrigin: true
      }
    }
  })
}
// --------------
// --------------
module.exports = {
  BASE_SHARED,
  SEV_CONF
}
