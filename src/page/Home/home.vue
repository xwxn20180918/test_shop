
<template>
  <div>
    <section class="home">
      <header class="home_header">
        <a href="javascript:;">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <span class="ellipsis">赣州石城</span>
        <a href="javascript:;">
          <i class="iconfont icon-dengluyonghu"></i>
        </a>
      </header>
      <nav class="home_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;" class="home_img">
                <div class="food_container">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="home_img">
                <div class="food_container">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="home_img">
                <div class="food_container">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="home_img">
                <div class="food_container">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="home_img">
                <div class="food_container">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="home_img">
                <div class="food_container">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="home_img">
                <div class="food_container">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="home_img">
                <div class="food_container">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
            </div>
            
            
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!-- shoplist -->
      <section>
       
      </section>
    </section>
  </div>
</template>

<script>
// import Swiper from 'swiper'
// import 'swiper/css/swiper.css'
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.home 
  width: 100%;
  overflow-x: hidden;

  .home_header 
    width: 100%;
    height: 45px;
    background-color: deeppink;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-sousuo 
      margin-left: 10px;
      font-size: 20px;
    

    .icon-dengluyonghu 
      margin-right: 10px;
      font-size: 18px;
    
  

  .home_nav 
    width: 100%;
    height: 200px;
    
    top-border-1px(#fff)
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%  
        height 100%
        .swiper-slide
          display flex
          justify-content flex-start
          flex-wrap wrap
          align-items center
          .home_img
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774        
            

</style>
