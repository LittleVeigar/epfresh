<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '_flex.scss';
h1, h2 {
  font-weight: normal;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
  font-weight: 600;
}
@mixin flexSpaceBetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order_hearder {
  @include flexbox();
  @include justify-content(flex-start);
  @include align-items(center);
  height: 40px;
  padding: 0 15px;
  background: #fff;
  .goback_icon {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    width: 10px;
  }
  .search_icon {
    width: 32px;
  }
  .my_order {
    @include flex-grow(2);
  }
}
.navbar {
  border-top: solid 1px #eee;
}
ul {
  font-size: 0;
  position: relative;
  padding: 0;
  width: 100%;
  user-select: none;
}
li {
  display: inline-block;
  width: 20%;
  height: 40px;
  background: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  color: #626262;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color:transparent;
}
.slider {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #009983;
  transition: all 0.5s;
}
.active {
  color:#009983;
}
.ripple {
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  position: absolute;
  opacity: 1;
}

.rippleEffect {
  -webkit-animation: rippleDrop .4s linear;
  animation: rippleDrop .4s linear;
}

@-webkit-keyframes
  rippleDrop {  100% {
   -webkit-transform: scale(2);
   transform: scale(2);
   opacity: 0;
  }
}
@keyframes
  rippleDrop {  100% {
   -webkit-transform: scale(2);
   transform: scale(2);
   opacity: 0;
  }
}
.order {
    background-color: #EAEAEA;
}
.order-item {
  font-size: 12px;
  padding: 0 4px;
  .item {
    margin-top: 10px;
    box-sizing: border-box;
    background-color: #fff;
    .order-title {
      @include flexSpaceBetween
      height: 40px;
      padding: 0 10px;
      border-bottom: solid 1px #EAEAEA;
    }
  }
}
.store {
  margin: 0 10px;
  @include flexSpaceBetween
  .store-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
  }
  .store-name {
    margin-left: 10px;
  }
}
.goods-list {
  background-color: #F7F7F9;
  margin: 0 5px;
  padding: 8px 0px;
  height: 60px;
  text-align: left;
  white-space:nowrap;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    width: 0px;
  }
  img {
    object-fit:cover;
    width: 60px;
    min-width: 60px;//uc
    height: 60px;
    margin: 0 5px;
  }
}
.goods-list--single {
  white-space:pre-wrap;
}
.order-sum {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  margin: 0 5px;
  .transit {
    color: red;
    font-size: 10px;
  }
  .sum-money {
    color: red;
    margin-left: 5px;
  }
}
.order-buttons {
  @include flexSpaceBetween
  height: 50px;
  margin: 0 10px;
  font-size: 12px;
  border-top: solid 1px #EAEAEA;
}
.order-delivery-code {
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 8px;
    margin-left: 5px;
  }
}
.order-follow {
  display: inline-block;
  height:24px;
  line-height: 24px;
  padding: 0 5px;
  border-radius: 2px;
  border: solid 1px #ccc;
}
.order-comfirm {
  @extend .order-follow;
  color: #fff;
  border: solid 1px #38B243;
  background-color: #38B243;
}
.single_product {
  @include flexbox();
  @include justify-content(flex-start);
  @include align-items(center);
  .single_product_info {
    @include flex-grow(2);
    @include flexbox();
    @include justify-content(flex-start);
    @include align-items(flex-start);
    height: 60px;
  }
}
.advance {
  display: inline-block;
  min-width: 16px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  margin-right: 5px;
  border-radius: 4px;
  border: solid 1px #1FADEE;
  color: #1FADEE;
  text-align: center;
}
.group {
  @extend .advance;
  border:1px solid #ff4242;
  color: #ff4242;
}
.dispn {
  display: none;
}
.none_order {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: 16px;
  color: #AAAAAA;
}
.none_order_icon {
  width: 80px;
}
.nomore_order {
  height: 40px;
  line-height: 40px;
  background: rgb(234, 234, 234);
  text-align: center;
  color: #AAAAAA;
  font-size: 12px;
}
</style>
<template>
  <div class="order">
    <div class="order_hearder">
      <img class="goback_icon" @click="goBack" src="./grey-arrow.png">
      <div class="my_order">我的订单</div>
      <router-link to="./searchorder">
        <img class="search_icon" src="./search_icon.svg">
      </router-link>
    </div>
    <section class="navbar">
      <ul>
        <li data-index="0" @click="gainIndex(index)" :class="{active:index==0}">全部</li>
        <li data-index="1" @click="gainIndex(index)" :class="{active:index==1}">待付款</li>
        <li data-index="2" @click="gainIndex(index)" :class="{active:index==2}">待发货</li>
        <li data-index="3" @click="gainIndex(index)" :class="{active:index==3}">待收货</li>
        <li data-index="4" @click="gainIndex(index)" :class="{active:index==4}">待评价</li>
        <li class="slider"></li>
      </ul>
    </section>
    <section class="order-item">
        <div v-if="orderSum">
          <div class="none_order">
            <img class="none_order_icon" src="./none_order.svg">
            <div>暂无订单</div>
          </div>
        </div>
        <div v-else class="item" v-for = "(item, index) in content" :key="index">
         <div class="order-title">
          <div>
             <span>
               订单：
             </span>
             <span>{{item.orderNo}}</span>
           </div>
           <div>
             {{item.placeOrderTime}}
           </div>
         </div>
         <div>
           <div class="store">
             <div class="store-title">
               <img src="./store_icon.png">
               <span class="store-name">{{item.wholeSaleMarketTitle}}</span>
             </div>
             <span class="store-state active">
               {{item.purchaseStatusTitle}}
             </span>
           </div>
           <div class="goods-list" :class="{'goods-list--single':item.result.length==1}">
              <div v-if="item.result.length==1" class="single_product">
                  <img  :src="item.result[0].productImgUrl">
                  <div class="single_product_info">
                        <span  :class="salesStyle(item.result[0].salesType)">{{salesText(item.result[0].salesType)}}</span>
                        <div>{{item.result[0].productTitle}}</div>
                  </div>
              </div>
              <img v-else v-for="(ware ,index) in item.result" :key="index" :src="ware.productImgUrl">
           </div>
           <div class="order-sum">
              <span>
                共{{item.productCount}}件
              </span>
              <span class="sum-money">
                订单金额：<span>{{item.orderSumPrice}}</span>元
              </span>
              <span class="transit">
                （含运费：<span>{{item.productExpressFee}}</span>元）
              </span>
           </div>
           <div class="order-buttons">
              <div class="active order-delivery-code">
                <span class="delivery-code">查看交货码</span>
                <img src="./arrow_green.png">
              </div>
              <div>
                <span class="order-follow">订单跟踪</span>
              </div>
           </div>
         </div>
        </div>
         <div class="nomore_order" v-if="!orderSum">没有更多了</div>
    </section>


<!--     <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in lists">{{ item }}</li>
</ul>
 -->
  </div>
</template>
<script>
import { getOrdersList } from '@/config/req'
import { mapMutations } from 'vuex'
import { Toast, Indicator, InfiniteScroll, Tabbar, TabItem } from 'mint-ui'
import Slide from '@/components/slide/index'
import Vue from 'vue'
Vue.use(Slide)
export default {
  name: 'Order',
  data () {
    return {
      index: 0,
      width: 0,
      screenWidth: 0,
      lists: [1, 2, 3, 4, 5],
      hide: true,
      content: ''
    }
  },
  computed: {
    orderSum: function () {
      return this.content.length === 0
    }
  },
  methods: {
    ...mapMutations([
      'HIDE_MENU'
    ]),
    goBack () {
      this.$router.go(-1)
    },
    salesText (i) {
      switch (i) {
        case 1:
          return ''
        case 2:
          return '预'
        default:
          return '团'
      }
    },
    salesStyle (i) {
      switch (i) {
        case 1:
          return 'dispn'
        case 2:
          return 'advance'
        default:
          return 'group'
      }
    },
    fetchData (id) {
      getOrdersList(this.$store.state, {'pageNumber': 0, 'accountId': 36, 'pageSize': 10, 'type': id})
      .then(data => {
        let dat = data.data.response.content
        console.log('orderlists:', dat)
        this.content = dat
      })
    },
    fetchDiffData (i) {
      this.fetchData(i)
    },
    gainIndex (i) {
      this.screenWidth = screen.width
      this.index = event.currentTarget.getAttribute('data-index')
      switch (parseInt(this.index)) {
        case 0:
          this.fetchData(4)
          break
        case 1:
          this.fetchData(1)
          break
        case 2:
          this.fetchData(2)
          break
        case 3:
          this.fetchData(3)
          break
        default :
          this.fetchData(9)
          break
      }
      document.querySelector('.slider').style.transform = 'translateX(' + this.screenWidth * this.index * 0.2 + 'px)'
    },
    showToast () {
      Toast('这是一个Toast！')
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
    this.HIDE_MENU({ hidemenu: this.hide })
    this.fetchData(4)
    document.getElementsByTagName('body')[0].style.backgroundColor = '#EAEAEA'
    document.getElementById('app').style.marginBottom = '0px'
  },
  components: {
    InfiniteScroll,
    Tabbar,
    TabItem
  }
}
</script>
