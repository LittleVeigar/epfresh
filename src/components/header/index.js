import headerComponent from './header.vue'

const epHeader = {
  install: function (Vue) {
    Vue.component('ep-header', headerComponent)
  }
}

export default epHeader
