import Vue from 'vue'
import Vuex from 'vuex'

//  vuex的抽取
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
//  moudle见官网
export default new Vuex.Store({
  state,
  mutations,
  actions,
  //  getter的作用当变量需要计算时类似于vue里面的computed
  getters: {
    doubleCity: function (state) {
      return state.city + ' ' + state.city
    }
  }
})
