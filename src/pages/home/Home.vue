<template>
  <div>
    <!--<div class="home">Hello World</div>-->
    <!--Vue一般不用a标签, 用router-link标签 to指向路由配置的地址-->
    <!--<router-link class="home" to="/list">list</router-link>-->
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  }
}
</script>

<style scoped>
/*.home {
 font-size: 50px;
}*/
</style>
