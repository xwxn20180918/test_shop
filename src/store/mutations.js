import {
RECEIVE_TOKEN,
RECEIVE_USER_INFO,
RESET_TOKEN,
RESET_USER_INFO
} from './mutations-type'

export default{
  

  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RECEIVE_TOKEN](state,{token}){
    state.token = token
  },
  [RESET_USER_INFO](state){
    state.userInfo = ''
  },
  [RESET_TOKEN](state){
    state.token = ''
  },
  
}