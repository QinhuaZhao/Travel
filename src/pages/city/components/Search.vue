<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市"/>
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    // handleCityClick: function (city) {
    //   // this.$store.dispatch('changeCity', city)
    //   //  没有批量操作的时候可以直接调用 mutations
    //   this.$store.commit('changeCity', city)
    //   this.$router.push('/')
    // }
    //  改造后的代码
    handleCityClick: function (city) {
      // this.$store.dispatch('changeCity', city)
      //  没有批量操作的时候可以直接调用 mutations
      //  this.$store.commit('changeCity', city)
      //  改在后的方法
      this.changeCity(city)
      this.$router.push('/')
    },
    //  vuex mapMutations的使用
    //  将vuex里面的Mutations里的changeCity方法映射到, methods里面
    ...mapMutations(['changeCity'])
  },
  mounted: function () {
    this.scoll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData: function () {
      return !this.list.length
    }
  },
  watch: {
    keyword: function () {
      if (this.timer) {
        clearTimeout()
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        console.log(this.cities)
        for (let citiesKey in this.cities) {
          this.cities[citiesKey].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        console.log(result)
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .5rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #EEE
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #FFF
</style>
