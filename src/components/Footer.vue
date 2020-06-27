<template>
 <footer class="footer_guide border-1px">
   <a href="javascript:;" class="footer_item" :class="{on:'/home' === $route.path}" @click="goTo('/home')">
     <span class="footer_icon">
       <i class="iconfont icon-_waimai"></i>
     </span>
     <span>外卖</span>
   </a>
   <a href="javascript:;" class="footer_item" :class="{on:'/server' === $route.path}" @click="goTo('/server')">
     <span class="footer_icon">
       <i class="iconfont icon-sousuo1"></i>
     </span>
     <span>搜索</span>
   </a>
   <a href="javascript:;" class="footer_item" :class="{on:'/order' === $route.path}" @click="goTo('/order')">
     <span class="footer_icon">
       <i class="iconfont icon-dingdan"></i>
     </span>
     <span>订单</span>
   </a>
   <a href="javascript:;" class="footer_item" :class="{on:'/person' === $route.path}" @click="goTo('/person')">
     <span class="footer_icon">
       <i class="iconfont icon-wode"></i>
     </span>
     <span>我的</span>
   </a>
 </footer>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   methods:{
     goTo(path){
       this.$router.replace(path)
     }
   },
   components: {

   }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 10000
    bottom 0
    left 0
    right 0
    background-color #fff
    width 100%
    display flex
    height 50px
    .footer_item
      display flex
      flex 1
      align-items center
      text-align center
      flex-direction column
      color #999999
      &.on
        color red 
      .footer_icon
        margin-bottom 8px
 
</style>
