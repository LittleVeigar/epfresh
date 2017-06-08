import menuComponent from './menu.vue'

const Menu = {
  install: function (Vue) {
    Vue.component('ep-menu', menuComponent)
  }
}

export default Menu
