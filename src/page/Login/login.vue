<template>
  <div>
    <header class="login_header">
      <i class="iconfont icon-houtui" @click="$router.back()"></i>
    </header>
    <section>
      <div class="login_cantainer">
        <div class="login_title">
          <span>十里飘香</span>
        </div>
        <div class="login_exchange">
          <span class="login_first_span" :class="{on:!ishow}" @click="toggleLogin">短信登录</span>
          <span class="login_last_span" :class="{on:ishow}" @click="toggleLogin">密码登录</span>
        </div>
        <div class="login_form">
          <form action>
            <!-- 短信登录 -->
            <section class="login_sms" :class="{on:!ishow}">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                class="login_button"
                :disabled="!rightPhone"
                :class="{isshowColor:rightPhone}"
                @click.prevent="sendSms"
              >{{time > 0 ? `已发送${time}s` : '获取验证码'}}</button>
              <input type="tel" maxlength="6" placeholder="验证码" v-model="code"/>
            </section>
            <!-- 密码登录 -->
            <section class="login_password" :class="{on:ishow}">
              <input type="text" placeholder="用户名" v-model="name"/>
              <input :type="isShowPwd ? 'text' :'password'" placeholder="密码" v-model="pwd"/>
              <div class="login_change" @click="isShowPwd = !isShowPwd">
                <div class="login_circular" :class="{login_isShow_circular:isShowPwd}"></div>
              </div>
              <input type="text" placeholder="验证码" v-model="captcha"/>
              <img ref="refsImg" src="http://localhost:4000/captcha" @click="toggleCaptcha"/>
            </section>
          </form>
        </div>
        <div class="login_message">
          <span>
            温馨提示 未注册的手机号，登录将自动注册，且以代表同意
            <span class="login_message_span">《用户服务协议》</span>
          </span>
        </div>
        <div class="login">
          <button @click.prevent="loginIn">登录</button>
        </div>
        <div class="login_us">
          <span>关于我们</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {MessageBox,Toast} from 'mint-ui'
import {reqSendcode,reqLoginPwd,reqLoginSms} from '../../api'
export default {
  data() {
    return {
      ishow: false, //默认显示短信短信登录,
      phone: "", //手机号
      time: 0, //发送验证码时间
      isShowPwd:false,//是否显示密码
      code:'',
      name:'',
      pwd:'',
      captcha:''
    };
  },
  
  methods: {
    //切换登录方式
    toggleLogin() {
      this.ishow = !this.ishow;
    },
    //点击发送验证码
   async sendSms() {
      //在当前没有计时的情况下 解决计时器加快
      if(!this.time){
      //设置最大倒计时
      this.time = 30;
     this.intervalId = setInterval(() => {
        this.time--
        if (this.time <= 0) {
          clearInterval(this.intervalId);
        }
      }, 1000);
      //发送ajax请求
      const result =  await reqSendcode(this.phone)
      if(result.code === 0){
        Toast('发送短信成功')  
      }else{
        //停止倒计时
        this.time = 0
        clearInterval(this.intervalId);
        MessageBox.alert('发送短信失败')
      }
        
      }
    },
    //前台验证
   async loginIn(){
        const {ishow,code,phone,name,pwd,captcha} = this
        let result
      if(!ishow){//手机号
        if(!this.rightPhone){
          return MessageBox.alert('必须输入正确的手机号')
        }else if(!/^\d{6}$/.test(code)){
          return MessageBox.alert('必须输入正确的验证码') 
        }
        //发送ajax请求
        result = await reqLoginSms(phone,code)
      }else{//短信
        if(!name.trim()){
           return MessageBox.alert('必须输入用户名')
        }else if(!pwd.trim()){
           return MessageBox.alert('必须输入密码')
        }else if(captcha.length !== 4){
           return MessageBox.alert('必须输入验证码') 
        }
        //发送ajax请求
       result = await reqLoginPwd({name,pwd,captcha})
        //如果短信登录失败
        if(result.code === 1){
          MessageBox.alert('短信登录失败')
          //重新刷新验证码
          this.toggleCaptcha()
        //   this.captcha
        }
      }

      // 统一处理
      if(result.code === 0){
        const userInfo = result.data
        //保存到state中
        this.$store.dispatch('getUserInfo',userInfo)
        //跳转到person
        this.$router.replace('/person')
      }else{
         MessageBox.alert('登录失败')
      }
    },
    //点击刷新captcha
    toggleCaptcha(){
      this.$refs.refsImg.src = 'http://localhost:4000/captcha?time='+Date.now() 
    }
  },
  computed: {
    rightPhone() {
      return /^1[3-8]\d{9}$/.test(this.phone);
    }
  },
  components: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.login_header {
  position: relative;
  left: 8px;
  top: 8px;

  .icon-houtui {
    font-size: 20px;
    color: deeppink;
  }
}

.login_cantainer {
  position: relative;
  top: 60px;
  width: 100%;
  height: 400px;
  text-align: center;

  .login_title {
    margin-bottom: 30px;

    >span {
      font-weight: 700;
      font-size: 40px;
      color: deeppink;
    }
  }

  .login_exchange {
    .login_first_span {
      margin-right: 40px;

      &.on {
        color: deeppink;
        font-weight: 500;
        border-bottom: 2px solid deeppink;
      }
    }

    .login_last_span {
      &.on {
        color: deeppink;
        font-weight: 500;
        border-bottom: 2px solid deeppink;
      }
    }
  }

  .login_form {
    text-align: center;

    .login_sms {
      display: none;

      &.on {
        display: block;
      }

      >input {
        width: 280px;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 10px;
        margin: 20px 0 0 10px;

        &:hover {
          border: 1px solid deeppink;
        }
      }

      .login_button {
        position: absolute;
        top: 120px;
        right: 50px;
        border: 0;
        background-color: #fff;

        &.isshowColor {
          color: deeppick;
        }
      }
    }

    .login_password {
      display: none;

      &.on {
        display: block;
      }

      >input {
        width: 280px;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 10px;
        margin: 20px 0 0 10px;

        &:hover {
          border: 1px solid deeppink;
        }
      }

      .login_change {
        position: absolute;
        top: 200px;
        right: 60px;
        width: 40px;
        height: 15px;
        border: 1px solid deeppink;
        border-radius: 10px;

        .login_circular {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: deeppink;
          &.login_isShow_circular{
            transform: translateX(25px);
          }
        }
      }

      >img {
        position: absolute;
        top: 250px;
        right: 50px;
      }
    }
  }

  .login_message {
    width: 280px;
    height: 50px;
    font-size: 14px;
    margin: 10px 0 0 50px;

    .login_message_span {
      color: deeppink;
    }
  }

  .login {
    width: 280px;
    height: 50px;
    background-color: deeppink;
    text-align: center;
    margin-left: 50px;
    line-height: 50px;
    border-radius: 10px;

    >button {
      background-color: deeppink;
      border: 0;
      font-size: 18px;
      color: #fff;
    }
  }

  .login_us {
    margin-top: 15px;
  }
}
</style>
