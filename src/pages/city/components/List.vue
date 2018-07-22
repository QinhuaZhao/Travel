<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom" :ref="key">{{key}}</div>
        <div class="item-list">
          <div class="item border-topbottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  引入vuex的mapState 和 mapMutations 还有mapActions
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
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
  computed: {
    //  vuex的mapState另一种写法
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter: function () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #CCC
    &:after
      border-color #CCC
  .border-bottom
  &:before
    border-color #CCC
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #EEE
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
