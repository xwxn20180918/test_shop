import ajax from './ajax'

const BASE = '/api'
//发送短信验证码
export const reqSendcode = (phone) => ajax(BASE+'/sendcode',{
  params:{
    phone
  }
})
//用户密码登录
export const reqLoginPwd = ({name,pwd,captcha}) => ajax.post(BASE+'/login_pwd',
  {name,pwd,captcha}
)
//手机号验证码登录
export const reqLoginSms = (phone,code) => ajax.post(BASE+'/login_sms',
{phone,code})
//根据回话获取用户信息
export const reqUserInfo = () => ajax(BASE+'/userinfo')

//自动登录请求
export const reqAutoLogin = () => ajax({
    url: BASE + '/auto_login',
    headers: {
      needToken: true
    }
  })