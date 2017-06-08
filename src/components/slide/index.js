import slideComponent from './slide.vue'

const Slide = {
  install: function (Vue) {
    Vue.component('Slide', slideComponent)
  }
}

export default Slide
