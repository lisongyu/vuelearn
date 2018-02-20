
import Vue from 'vue';

import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
Vue.use(Vuex);
//容器是唯一的
const state={
  count:0
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions

})
