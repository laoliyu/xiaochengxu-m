// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import def_lazy_img from '../static/img/loading.gif'
import store from './vuex/store'
Vue.use(VueLazyload, {

  loading: def_lazy_img,

})

fastClick.attach(document.body)
Vue.config.productionTip = false
import { Toast, Loading } from '@/common/plugin'
Vue.use(Toast, Loading)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
