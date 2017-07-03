<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
body {
  margin: 0 ;
}
h1, h2 {
  font-weight: normal;
}
.clearfix:after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}
.hello {
  background-color: #eee;
}
section {
  background-color: #fff;
}
.banner {
  width: 100%;
  height: 100%;
}
.mint-tab-item-icon {
  width: 18px !important;
  height: 16px !important;
}
.swipe {
  height: 90px;
}

.recomendation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 15px 0 15px;
  padding: 8px 0;
  font-size: 16px;
  color: #000;
  font-weight: 700;
  .perfect {
    display: inline-flex;
    align-items: baseline;
    .perfect-img {
      width: 20px;
    }
  }
  .more {
    font-weight: 400;
    color:#95A3D4;
    text-decoration: none;
    .more-img {
      width: 6px;
      margin-left: 5px;
    }
  }
}
.mint-tabbar {
  position: fixed;
  bottom: 0px;
}
.good-container {
  border-top: solid 1px #efefef;
}
.fine-list {
  display: flex;
  justify-content:space-between;
  line-height: 1.5;
  border-bottom:solid 1px #efefef;
  font-size: 14px;
  color: #000;
}
.fine-list-left {
  display: inline-block;
  float: left;
  width: 50%;
  height:167px;
  box-sizing: border-box;
  border-bottom: solid 1px #efefef;
  padding:0 0 5px 15px;
  text-align: left;
  font-size: 16px;
}
.bord-right {
  border-right: solid 1px #efefef;
}
.fine-list-right {
  text-align: left;
}
.fine-good-name {
  max-width: 150px;
  padding: 5px 0 5px 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
  font-size: 14px;
}
.fine-good-grade {
  padding-left: 15px;
  text-align: left;
  min-height: 18px;
  font-size: 14px;
}
.fine-good-img {
  display: block;
  object-fit:cover;
  height: 80px;
  width:100px;
  margin: 0 auto;
  padding-top: 5px;
}
.fine-good-price {
  padding-left: 15px;
  color: red;
  font-size: 12px;
}
.fine-good-wrap {
  display: inline-block;
  padding: 0 2px;
  height: 16px;
  line-height: 16px;
  border-radius: 2px;
  font-size: 10px;
  background-color:#f4f4f4;
}
.store {
  float: left;
  width: 50%;
  height: 100px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 6px 0 6px 15px;
}
.store-img {
  display: inline-block;
  float: left;
  img {
    width: 60px;
  }
}
.store-info {
  display: inline-block;
  float: left;
  width: 60%;
  padding-left: 10px;
  box-sizing: border-box;
  text-align: left;
}
.store-name {
  margin-bottom: 5px;
}
.store-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.shop-opening {
  border-bottom: solid 1px #ccc;
  margin: 15px 0 0 0;
  padding: 8px 15px;
}
.link-unstyle {
  display: block;
  text-decoration: none;
  color: #000;
}
.mask {
  position: fixed;
  display: none;
  top: 80px;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.dispb {
  display: block;
}
</style>

<template>
  <div class="hello">
  <ep-header  ></ep-header>
  <NavBar v-bind:market-list="marketlist" :show-market="showMarket" v-on:showMarkets = "changMarkets"></NavBar>
 <router-view></router-view>
 <div class="mask" :class="[showMarket?'dispb':'']"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Toast, Indicator, InfiniteScroll, Tabbar, TabItem, TabContainer, TabContainerItem, Swipe, SwipeItem } from 'mint-ui'
import epHeader from '@/components/header/header'
import NavBar from '@/components/navbar/navbar'

import { getHomeData, getMarketAreas, getMarketList } from '@/config/req'
import { setStore } from '@/config/utils'

const $hasTouch = 'ontouchstart' in window
let eventStart = $hasTouch ? 'touchstart' : 'mousedown'
let eventEnd = $hasTouch ? 'touchend' : 'mouseup'
let eventMove = $hasTouch ? 'touchmove' : 'mousemove'
let eventResize = $hasTouch ? 'orientationchange' : 'resize'
let eventcancel = $hasTouch ? 'touchcancel' : 'mouseup'

let touchEvent = {
  eventStart: eventStart, eventEnd: eventEnd, eventMove: eventMove, eventResize: eventResize, eventcancel: eventcancel
}
export default {
  name: 'Order',
  data () {
    return {
      msg: 'Welcome to Home Page!',
      lists: [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6],
      active: 'tab-container2',
      width: 0,
      _startX: 0,
      _endX: 0,
      index: 1,
      currentX: 0,
      _mDistance: 0,
      screenWidth: 0,
      fineList: ' ',
      newList: ' ',
      topBanner: ' ',
      shopList: ' ',
      id: 1,
      hide: false,
      marketlist: ['haha', '天天鲜', '北环'],
      showMarket: false
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
    let a = this.marketlist instanceof Array
    console.log('type:', a)
  },
  computed: {
    ...mapState([
      'menuIndex',
      'hidemenu'
    ])
  },
  methods: {
    ...mapMutations([
      'HOME_ACTIVE',
      'HIDE_MENU'
    ]),
    fetchData: function () {
      console.log('fetchData')
      getHomeData({'cityId': '6401', 'lng': '106.27', 'lat': '38.47'})
      .then(data => {
        let dat = data.data.response
        this.fineList = dat.fineRecommendation.fineList
        this.newList = dat.newProductSale.newList
        this.topBanner = dat.topBanner
        this.shopList = dat.shopOpening.shopList
      })
      getMarketList()
      .then(data => {
        let dat = data.data.response
        this.marketlist = dat
      })
    },
    changMarkets () {
      console.log('changMarkets                   ')
      this.showMarket = !this.showMarket
    },
    showToast () {
      Toast('这是一个Toast！')
    },
    getdata () {
    },
    switchTab () {
      this.active = 'tab-container2'
    },
    dicator () {
      Indicator.open({
        text: 'Loading...',
        spinnerType: 'triple-bounce'
      })
      setTimeout(function () {
        Indicator.close()
      }, 2000)
    },
    doTouchStart (e) {
      console.log(e)
      console.log('touchstart')
      this._startX = e.touches[0].pageX
      console.log('touchstart')
      console.log(this._startX)
    },
    doTouchMove (e) {
      this.currentX = e.touches[0].pageX
      this._mDistance = this.currentX - this._startX
      this.width = this._mDistance / this.screenWidth
      setStore('width', 100)
      document.querySelector('.slider').style.transform = 'translateX(' + this.screenWidth * (this.index - this.width) * 0.33 + 'px)'
    },
    doTouchEnd (e) {
      this._endX = e.changedTouches[0].pageX
      this._mDistance = this._endX - this._startX
      this.width = this._mDistance / this.screenWidth
      if (this.width > 0.5 || this.width < -0.5) {
        if (this.width > 0 && this.index !== 0) {
          this.index = this.index - 1
        } else if (this.index === 0) {
          this.index = 2
        } else if (this.index !== 2) {
          this.index = this.index + 1
        } else {
          this.index = 0
        }
        console.log(this.index)
        this.width = 0
      } else {
        this.width = 0
      }
      document.querySelector('.slider').style.transform = 'translateX(' + this.screenWidth * this.index * 0.33 + 'px)'
    },
    selected (e) {
      this.active = 'tab-container3'
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.lists[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.lists.push(last + i)
        }
        this.loading = false
      }, 2500)
    }
  },
  mounted () {
    this.HOME_ACTIVE({ id: this.id })
    this.HIDE_MENU({ hide: this.hide })
    this.fetchData()
    getMarketAreas().then(function (data) {
    })
    document.querySelector('.mask').style.height = document.documentElement.clientHeight + 'px'
    this.screenWidth = screen.width
    let element = document.getElementById('container')
    element.addEventListener(touchEvent.eventStart, (e) => {
      this.doTouchStart(e)
    }, false)
    element.addEventListener(touchEvent.eventMove, (e) => {
      this.doTouchMove(e)
    }, false)
    element.addEventListener(touchEvent.eventEnd, (e) => {
      this.doTouchEnd(e)
      console.log('end')
    }, false)
  },
  components: {
    Tabbar,
    NavBar,
    TabItem,
    epHeader,
    Swipe,
    SwipeItem,
    InfiniteScroll,
    TabContainer,
    TabContainerItem
  }
}
</script>

