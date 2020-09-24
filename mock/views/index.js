/**
 * @author wenwang
 * @date   2020/8/19-17:45
 */
const {user_list_represent} = require('./users')
module.exports = [
  {
    url: '/view/USER/userListPage',
    type: 'get',
    response: _ => {
      return user_list_represent
    }
  },{
    url: '/api/prv/security/userQuery/search',
    type: 'post',
    response: _ => {
      return user_list_represent
    }
  }
]