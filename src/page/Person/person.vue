<template>
  <div>
    <section>
      <header class="person_header">
        <a href="javascript:;"><span>我的</span></a>
      </header>
    </section>
    <section class="person_content">
      <a href="javascript:;" >
        <div class="person_left">
          <i class="iconfont icon-dengluyonghu"></i>
        </div>
      </a>
      <a href="javascript:;" class="person_right">
        <span class="person_first_span">登录/注册</span>
        <span>
          <i class="iconfont icon-shouji"></i>
          <span>暂无绑定手机号</span>
        </span>
      </a>
    </section>
    <section>
      <ul class="person_ul">
        <li>
          <span class="person_number">6.66元</span>
          <span>我的余额</span>
        </li>
        <li>
          <span class="person_number">0个</span>
          <span>我的优惠</span>
        </li>
        <li>
          <span class="person_number">0分</span>
          <span>我的积分</span>
        </li>
      </ul>
    </section>
    <section>
      <ul class="person_order border-1px">
        <li>
          <a href="javascript:;">
            <span><i class="iconfont icon-wodedingdan"></i>我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span><i class="iconfont icon-jifenshangcheng"></i>积分商城</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span><i class="iconfont icon-fuwuzhongxin"></i>服务中心</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span><i class="iconfont icon-huiyuanqia"></i>十里飘香会员卡</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.person_header
  width 100%
  background-color deeppink
  height 50px
  display flex
  justify-content center
  align-items center
  color #ffffff
  font-size 20px
  border-top 1px solid #FFFFFF
  >a
    color #fff
.person_content
  display flex
  width 100%
  height 100px
  background-color deeppink
  top-border-1px(#fff)
  align-items center
  .person_left
    width 50px
    height 50px
    border 1px solid #E4E4E4
    background-color #E4E4E4
    border-radius 50%
    text-align center
    margin-left 15px
    display flex
    .iconfont
      font-size 40px
      margin-left 5px
  .person_right
    display flex
    flex-direction column
    margin-left 10px
    color #fff
    .person_first_span  
      font-size 18px
      margin 10px 0 10px 30px
.person_ul
  width 100%
  height 85px
  display flex
  flex-direction row
  justify-content space-around
  align-items center 
  >li
    display flex
    flex-direction column
    align-items center 
    >span
      margin 5px 0 10px 0
  .person_number
    color red
    font-size 18px
    font-weight 700
.person_order
  top-border-1px(#fff)
  display flex
  flex-direction column
  // align-items center
  justify-content start
  >li
    padding 20px 
    .iconfont
      margin-right 10px
      color red
      font-size 18px
</style>
