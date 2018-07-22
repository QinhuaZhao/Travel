<template>
  <div>
    <!--<div class="home">Hello World</div>-->
    <!--Vue一般不用a标签, 用router-link标签 to指向路由配置的地址-->
    <!--<router-link class="home" to="/list">list</router-link>-->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data: function () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  mounted: function () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated: function () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    console.log('activated')
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style scoped>
/*.home {
 font-size: 50px;
}*/
</style>
