<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id">
        <img class="swiper-img" :src="item.url"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--箭头-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--箭头-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--滚动条-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {id: '001', url: 'https://imgs.qunarzz.com/piao/fusion/1709/39/b98fdb3ee7478e02.jpg_750x200_be64b756.jpg'},
        {id: '002', url: 'https://imgs.qunarzz.com/piao/fusion/1806/f5/ea83238744f31102.jpg_750x200_73b8477c.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  //  样式穿透  TODO
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26%
    background #eee
    .swiper-img
      width 100%
</style>
