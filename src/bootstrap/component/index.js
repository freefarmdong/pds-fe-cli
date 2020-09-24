/**
 * @author wenwang
 * @date   2020/8/14-17:22
 */
import Vue from 'vue'
import Element from 'element-ui'
import Cookies from 'js-cookie'
import '@public/components'
import templateRegistor from '@public/template/template-registor'
import CardList from '@public/template/CardList'
import Common from '@public/template/Common'
import SearchList from '@public/template/SearchList'
import TreeForm from '@public/template/TreeForm'
import requireIcons from '@public/components/IconInput/requireIcons'


Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
/**
 * 注册模板
 */
templateRegistor.add('CardList', CardList)
templateRegistor.add('Common', Common)
templateRegistor.add('SearchList', SearchList)
templateRegistor.add('TreeForm', TreeForm)
/**
 * 收集svg图标名称
 */
const req = require.context('../../icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()
const re = /\.\/(.*)\.svg/
const icons = requireAll(req).map(i => {
  return i.match(re)[1]
})
requireIcons.icons = icons
