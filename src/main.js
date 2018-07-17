// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// reset.css 重置页面样式表,统一不同设备的浏览器初始化样式  styles是一个别名
import 'styles/reset.css'
//  解决一像素边框问题, 1px指一个css像素,但实际可能显示成多个物理像素, 在多倍屏里面亿像素边框被显示成多像素问题, 1px像素边框解决方案  styles是一个别名
import 'styles/border.css'
// 不同机型可能会出现300毫秒点击延迟问题  fastclick库 在项目目录下执行命令:  npm install fastclick --save  ; --save表示开发生产环境都需要,并会把它存到项目的package.json的dependencies中
import fastClick from 'fastclick'
//  引入iconfont  styles是一个别名
import 'styles/iconfont.css'

// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
//  使用fastClick
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router: router的简写, 导入是为了给子组件使用 <!--<router-view></router-view>-->
  router,
  components: { App },
  template: '<App/>'
})

// 路由就是根据网址的的不同,返回给用户不同的内容

//  单页面应用VS多页面应用 鉴别: Network下的doc选项,看是否返回html
//  多页面优点: 1.页面由服务器返回,一次请求html就可以了   2.首屏时间快, SEO(搜索引擎优化只认识html,不认识js)效果高.  缺点:页面切换慢
//  单页面有点: 1.通过js感知url变化,然后卸载挂载,页面切换不需要html请求   缺点:首屏时间慢,需要请求html和js 可以通过服务器端渲染解决 Vue项目是反页面应用

//  该项目是移动端项目

//  支持变量的css stylus TODO
//  npm install stylus --save
//  npm install stylus-loader --save

//  轮播插件vue-awesome-swiper @后跟版本号
//  npm install vue-awesome-swiper@2.6.7 --save
