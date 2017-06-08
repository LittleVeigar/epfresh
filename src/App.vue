<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar  :class="hidemenu?dispn:nonstr">
    <mt-tab-item id="tab1" href="./#/home" class="link-unstyle" >
      <img slot="icon"  :src="menuIndex==1?homeActive:home">
      首页
    </mt-tab-item>
    <mt-tab-item id="tab2" href="./#/allproduct" class="link-unstyle" >
      <img slot="icon"  :src="menuIndex==2?listActive:list">
      全部商品
    </mt-tab-item>
    <mt-tab-item id="tab3" href="./#/shoppingcart"  class="link-unstyle">
      <img slot="icon"  :src="menuIndex==3?shopCarActive:shopCar">
      购物车
    </mt-tab-item>
    <mt-tab-item id="tab4" href="./#/profile" class="link-unstyle" >
        <img slot="icon"   :src="menuIndex==4?myActiveImg:myImg"  class="my-icon">
        我的
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import myActiveImg from './assets/images/my_active.png'
import myImg from './assets/images/my.png'
import homeActive from './assets/images/home_active.png'
import home from './assets/images/home.png'
import listActive from './assets/images/list_active.png'
import list from './assets/images/list.png'
import shopCarActive from './assets/images/shopCar_active.png'
import shopCar from './assets/images/shopCar.png'
import { Tabbar, TabItem } from 'mint-ui'
(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
export default {
  name: 'app',
  data () {
    return {
      dispn: 'dispn',
      nonstr: '',
      dispb: 'dispb',
      active: './assets/images/my_active.png',
      myActiveImg,
      homeActive,
      listActive,
      shopCarActive,
      myImg,
      home,
      list,
      shopCar
    }
  },
  computed: {
    ...mapState([
      'menuIndex',
      'hidemenu'
    ])
  },
  mounted () {
  },
  methods: {

  },
  components: {
    TabItem,
    Tabbar
  }
}
</script>

<style>
html {
  background: #009983;
  height: 100%;
}
body {
  margin: 0 auto;
  background-color:#fff;
  font-size: 16px;
  max-width: 640px;
  min-height: 100%;
}
img {
  width: 20%;
}
#app {
  margin-bottom: 55px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.dispn {
  display: none !important;
}
dispb {
  display: block;
}
.mint-swipe-indicator {
  width: 6px !important;
  height: 6px !important;
  opacity: 0.8 !important;
  background: #333 !important;
}
.mint-swipe-indicator.is-active {
  background:#efefef !important;
}
.mint-tabbar {
  position: fixed !important;
  z-index: 3;
  bottom: 0px;
  max-width: 640px;
  margin: 0 auto;
}
.link-unstyle {
  display: block;
  text-decoration: none;
  color: #000;
}
a { text-decoration: none;color: #000;
 }
.mint-tabbar > .mint-tab-item.is-selected {
  color: #009983 !important;
  background: none !important;
}
.mint-tab-item-icon >.my-icon {
  position: relative;
  left: 15%;
  width: 70%;
}
</style>
