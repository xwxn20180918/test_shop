import { reqAutoLogin,} from '../api'
import {

  RECEIVE_USER_INFO,
  RECEIVE_TOKEN,
  RESET_USER_INFO,
  RESET_TOKEN
} from './mutations-type'



export default {

  
  //登录
  getUserInfo({ commit }, userInfo) {
    const token = userInfo.token
    //將token保存到localStorage
    localStorage.setItem('token_key', token)
    //將token保存到state
    commit(RECEIVE_TOKEN, { token })
    //刪除userinfo中的token
    delete userInfo.token
    commit(RECEIVE_USER_INFO, { userInfo })
  },
  //登出
  getLogOut({ commit }) {
    commit(RESET_TOKEN)
    commit(RESET_USER_INFO)
    localStorage.removeItem('token_key')
  },
  /*
自动登陆的异步action
*/
  async autoLogin({ commit, state }) {
    const { token } = state
    if (token) {
      const result = await reqAutoLogin()
      if (result.code === 0) {
        const userInfo = result.data
        commit(RECEIVE_USER_INFO, { userInfo })
      }
    }
  },
}