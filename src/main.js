import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/font.css'
import animated from 'animate.css'

import loading from './utils/loading' //全局loading组件
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

Vue.use(loading)
Vue.use(VueAwesomeSwiper)
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
