<template>
  <div class="container">
    <DialogForm :fieldKey="crud.dialog.fieldKey"/>
    <el-card v-if="$R.arrayHasValue(headerButtons)">
      <el-button v-for="(btn) in headerButtons"
                 v-bind="_buttonProps(btn)"
                 :key="btn.code"
                 @click="handleAction(btn)"
      >
        {{btn.label}}
      </el-button>
    </el-card>
    <LayoutCardPage :schema="crud.descriptors" :value="crud.value" :layout="crud.layout"></LayoutCardPage>
    <el-card v-if="$R.arrayHasValue(bottomButtons)">
      <el-button v-for="(btn) in bottomButtons"
                 v-bind="_buttonProps(btn)"
                 :key="btn.code"
                 @click="handleAction(btn)"
      >
        {{btn.label}}
      </el-button>
    </el-card>
  </div>
</template>

<script>
  import CRUD, {presenter} from '@crud/crud'
  import Action from '@crud/mixins/action'
  import LayoutCardPage from '@crud/components/Layout/Card'
  import _C from '@public/components/context/constants'
  import _ from '@public/libs/util.lodash'

  export default {
    name: "LayoutCardTemplate",
    components: { LayoutCardPage },
    cruds: CRUD,
    mixins: [presenter({
      onBeforeRouteEnter( {route, data}) {
        return true
      }
    }), Action],
    computed: {
      bottomButtons() {
        return this.crud.actions.filter(action => _C.EFFECT_HIDDEN !== action.effect &&
          (!action.placement || action.placement === 'bottom'))
      },
      headerButtons() {
        return this.crud.actions.filter(action => _C.EFFECT_HIDDEN !== action.effect && action.placement === 'top')
      }
    },
    methods: {
      init() {
        const query = this.$route.query
        let obj = {}
        if (_.isNotEmpty(query) && query._c) {
          obj = JSON.parse(decodeURIComponent(query._c))
        }
        this.executeQuery(obj._p, obj._u)
      },
      executeQuery(params, _url) {
        let currentUrl = _url
        let action
        if (!currentUrl) {
          action = _.find(this.crud.actions, { code: _C.ACT_QUERY })
          if (!action) {
            //throw new Error('未找到effect为PAGE的QUERY,无法请求数据')
            return
          }
          const { transports } = action
          currentUrl = _.isNotEmpty(transports) ? transports[0].url : _url
        }
        if (!currentUrl) {
          throw new Error('未设置接口请求地址')
          return
        }
        this.$post(currentUrl, params).then(result => {
          const data = action && action.filter ?
            _.get(result, filter) :
            (_.get(result, 'data.list') || _.get(result, 'data'))
          data && Object.keys(data).forEach(key => {
            this.crud.updateValue(key, data[key])
          })
        }).catch(err => {
          this.$message.error(currentUrl + '查询接口请求异常')
        })
      },
      _buttonProps(btn) {
        if (btn.component) {
          return btn.component.props || { type: 'primary' }
        }
        return { type: 'primary' }
      },

    }
  }
</script>

<style lang="less">
  .el-row {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>