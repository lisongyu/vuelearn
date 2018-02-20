import Vue from 'vue';
import store from './store';
import App from './App.vue';



new Vue({
  el: '#app',

  render: h => h(App),
  store//store被注册到了实例上
 //所有组件都会又一个属性 this.$store

})
