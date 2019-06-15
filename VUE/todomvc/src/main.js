import Vue from 'vue';
import App from './App.vue';
import store from './store';
new Vue({
  el:'#app',
  // 应用层的组件
  store,
  render: h =>h(App)
})