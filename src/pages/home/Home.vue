<template>
  <div>
    <!--<div class="home">Hello World</div>-->
    <!--Vue一般不用a标签, 用router-link标签 to指向路由配置的地址-->
    <!--<router-link class="home" to="/list">list</router-link>-->
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper
  }
}
</script>

<style scoped>
/*.home {
 font-size: 50px;
}*/
</style>
