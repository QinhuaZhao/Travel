<template>
  <div id="app">
    <!--由父组件传入-->
    <!--当前地址所对应的内容-->
    <!--keep-alive vue自带标签 访问一个路由的时候会将路由放到缓存里面,下一次访问的时候会从路由里面取, 不需要重新渲染组建,也不会重新执行生命周期钩子函数,只需从内存把内容重新拿出来显示   TODO-->
    <!--会多一个生命周期钩子-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
