<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide
        v-for="item of list"
        :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
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
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    showSwiper: function () {
      return this.list.length
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
    padding-bottom 37.09%
    background #eee
    .swiper-img
      width 100%
</style>
