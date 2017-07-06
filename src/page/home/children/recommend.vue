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
  padding-bottom: 30px;
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
  width:130px;
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
</style>

<template>
  <div class="hello">
    <div class="swipe">
      <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in topBanner"><a :href="item.link"><img class="banner" :src="item.img" :alt="item.title"></a></mt-swipe-item>
    </mt-swipe>
    </div>
  <menu-ep v-bind:list="menus"></menu-ep>
  <section v-if="fineList.length">
    <div class="recomendation">
        <span class="perfect"><img class="perfect-img" src="../../../assets/images/perfect_icon.png">品推荐</span>
        <router-link class="more" to="/productlist">更多<img class="more-img" src="../../../assets/images/more_icon.png"></router-link>
      </div>
      <div class="clearfix  good-container">
          <div class="fine-list-left"  v-for="(item,index) in fineList" :class="{'bord-right':index%2==0}" @click="ToProductDetail(item.id)">
            <img class="fine-good-img" :src="item.url" >
            <div class="fine-good-name">{{item.title}}</div>
            <div class="fine-good-grade">{{item.grade}}</div>
            <div>
              <span class="fine-good-price">{{item.price}}</span>
              <span class="fine-good-wrap">{{item.packageSize}}</span>
            </div>
          </div>
      </div>
  </section>
  <section v-if="newList.length">
    <div class="recomendation">
        <span class="perfect"><img class="perfect-img" src="../../../assets/images/advance_icon.png">售商品</span>
        <router-link class="more" to="/productlist">更多<img class="more-img" src="../../../assets/images/more_icon.png"></router-link>
      </div>
      <div class="clearfix good-container">
          <div class="fine-list-left"  v-for="(item,index) in newList" :class="{'bord-right':index%2==0}" @click="ToProductDetail(item.id)">
            <img class="fine-good-img" :src="item.url" >
            <div class="fine-good-name">{{item.title}}</div>
            <div class="fine-good-grade">{{item.grade}}</div>
            <div>
              <span class="fine-good-price">{{item.price}}</span>
              <span class="fine-good-wrap">{{item.packageSize}}</span>
            </div>
          </div>
      </div>
  </section>
  <section v-if="shopList.length">
    <div class="recomendation shop-opening">
        <span class="perfect"><img class="perfect-img" src="../../../assets/images/new_icon.png">铺开张</span>
        <router-link class="more" to="/storelist">更多<img class="more-img" src="../../../assets/images/more_icon.png"></router-link>
      </div>
      <div class="clearfix">
        <div class="store clearfix" v-for="item in shopList" @click="toStore(item.id)">
          <div class="store-img"><img :src="item.logo"></div>
          <div class="store-info">
            <div class="store-name">{{item.title}}</div>
            <div class="store-description">{{item.description}}</div>
          </div>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Toast, Indicator, InfiniteScroll, Tabbar, TabItem, TabContainer, TabContainerItem, Swipe, SwipeItem } from 'mint-ui'
import epHeader from '@/components/header/header'
import NavBar from '@/components/navbar/navbar'
import MenuEp from '@/components/menu/menu'
import myOrder from '@/assets/images/myOrder_icon.png'
import preSale from '@/assets/images/pre-sale_icon.png'
import address from '@/assets/images/address_icon.png'
import addDistraputionCenter from '@/assets/images/addDistraputionCenter_icon.png'

import { getHomeData, getMarketAreas, getMarketList, getDcStores } from '@/config/req'

/* const $hasTouch = 'ontouchstart' in window
let eventStart = $hasTouch ? 'touchstart' : 'mousedown'
let eventEnd = $hasTouch ? 'touchend' : 'mouseup'
let eventMove = $hasTouch ? 'touchmove' : 'mousemove'
let eventResize = $hasTouch ? 'orientationchange' : 'resize'
let eventcancel = $hasTouch ? 'touchcancel' : 'mouseup' */

/* let touchEvent = {
  eventStart: eventStart, eventEnd: eventEnd, eventMove: eventMove, eventResize: eventResize, eventcancel: eventcancel
} */
export default {
  name: 'recomend',
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
      menus: [
        {
          name: '我的订单',
          logoUrl: myOrder
        },
        {
          name: '预售商品',
          logoUrl: preSale
        },
        {
          name: '收货地址',
          logoUrl: address
        },
        {
          name: '添加配送中心',
          logoUrl: addDistraputionCenter
        }
      ],
      marketlist: ['haha', '天天鲜', '北环']
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  computed: {
    ...mapState([
      'menuIndex',
      'hidemenu'
    ]),
    changeCity: function () {

    }
  },
  methods: {
    ...mapMutations([
      'HOME_ACTIVE',
      'HIDE_MENU'
    ]),
    fetchData: function () {
      getHomeData({cityId: '6401', lng: '106.27', lat: '38.47'})
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
      getDcStores(this.$store.state)
      .then(data => {
        let erp = data.data.response
        let lastmenus = this.menus.splice(3)
        this.menus = this.menus.splice(0, 3).concat(erp, lastmenus)
      })
    },
    toStore (id) {
      this.$router.push({name: 'Store', params: {id: id}})
    },
    showToast () {
      Toast('这是一个Toast！')
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
    ToProductDetail (id) {
      window.location.href = 'http://mtest.epfresh.com/common/product.html?#' + id + '&6401'
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
    getMarketAreas(this.$store.state, {'id': '2'}).then(function (data) {
    })
    this.screenWidth = screen.width
  },
  components: {
    Tabbar,
    NavBar,
    MenuEp,
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

