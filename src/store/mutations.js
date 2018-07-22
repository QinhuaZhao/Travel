export default {
  changeCity: function (state, city) {
    state.city = city
    //  将数据存到本地
    //  用户关闭了本地存储或使用了隐身模式可能会导致浏览器抛出异常
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
