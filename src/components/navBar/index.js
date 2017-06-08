import navbarComponent from './navbar.vue'

const NavBar = {
  install: function (Vue) {
    Vue.component('NavBar', navbarComponent)
  }
}

export default NavBar
