import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)
const state = {
  menuIndex: 1,
  hidemenu: true,
  city_name: '上海市',
  accountId: '',
  token: '',
  loginStatus: '',
  login: false,
  phone: 13733182056
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
