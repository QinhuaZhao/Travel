<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市\景点\游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!--使用vuex的mapState-->
        <!--{{this.$store.state.city}}-->
        <!--使用vuex的gettet-->
        <!--{{this.doubleCity}}-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
//  引入vuex的mapState
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    //  展开运算符  将city映射到computed下的city  TODO
    ...mapState(['city']),
    //  使用vuex的getter   getter的作用当变量需要计算时类似于vue里面的computed
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  //  html {overflow-x: hidden;height: 100%;font-size: 50px}
  //  1rem = html font-size=50px
  //  86/100
  //  height 86px
  // 当前设备是一个二倍屏

  // css 引入要加@
  //  @import "../../../assets/styles/varibles.styl"
  //  css引入其他文件要在import前加@  路径前加~   TODO
  //  styles是一个别名见  build/webpack.base.conf.js
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #ffffff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background #ffffff
      border-radius .1rem
      padding-left .4rem
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0.1rem
      float right
      text-align center
      color white
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
