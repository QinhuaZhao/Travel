<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市\景点\游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
    line-height 0.86rem
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
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
