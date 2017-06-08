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
.dispn {
  display: none;
}
.store {
  padding-bottom: 50px;
}
.store-header {
  position: fixed;
  top: 0;
  width: 100%;
}
.contain {
  margin-top: 146px;
}
.header {
  height:100px;
  background:url('../../assets/images/store-bg.png');
  color: #fff;
  font-size: 14px;
  text-align: left;
  .top-icons {
    @include flexbox();
    @include justify-content(space-between);
    padding: 10px 15px 0 15px;
  }
  .go-back img {
    width: 20px;
  }
  .phone img {
    width: 16px;
  }
}
.store-title {
  @include flexbox();
  @include justify-content(space-between);
  margin: 10px 15px 0 15px;
  height: 40px;
}
.shortname {
  margin-top: 5px;
  font-size: 10px;
}
.focus {
  @include flexbox();
  @include justify-content(space-between);
  @include align-items(center);
  text-align:center;
  font-size: 12px;
  .fances {
    @include align-items(center);
    padding-right: 5px;
    border-right: solid 1px #fff;
  }
  .to-focus {
    @include align-items(center);
    padding-left: 5px;
  }
  .fances-num {
    height: 17px;
    line-height: 17px;
  }
  .star img{
    width: 14px;
  }
}
.menu {
  height: 40px;
  line-height: 40px;
  background: #fff;
  margin-bottom: 5px;
  border-bottom: solid 1px #efefef;
  .product-menu {
    height: 38px;
    float: left;
    width: 50%;
  }
  .store-menu {
    height: 38px;
    float: left;
    width: 50%;
  }
  .menu--cyan  {
    color:#009983;
    border-bottom: solid 2px #009983;
  }
}
.product {
  @include flexbox();
  @include justify-content(flex-start);
  @include align-items(flex-start);
  padding: 10px;
  border-top: solid 1px #efefef;
  text-align: left;
  font-size: 12px;
  background: #fff;
  .img-container {
    max-width: 90px;
    width: 90px;
  }
  img {
    width: 90px;
  }
  .product-info {
    margin-left: 10px;
    .product-name {
      height: 20px;
      line-height: 20px;
    }
    .product-price {
      color: red;
      font-size: 14px;
    }
    .product-wrap {
      background:#F3F4F7;
      padding: 0 2px;
      border-radius: 2px;
    }
  }
}
.main-info {
  margin: 10px 0;
  background: #fff;
  .info-common {
    @include flexbox();
    @include justify-content(flex-start);
    @include align-items(center);
    line-height: 40px;
    border-bottom: solid 1px #efefef;
    font-size: 14px;
  }
  .icon-container {
    @include flexbox();
    @include justify-content(center);
    @include align-items(center);
    width: 24px;
  }
  img {
    width: 14px;
  }
}
.qualify{
  @include flexbox();
  @include justify-content(space-between);
  @include align-items(center);
  line-height: 40px;
  padding: 0 10px;
  font-size: 14px;
  background: #fff;
  .authenticated {
    color:#40C41B;
  }
}

.transaction-status {
  margin-top: 10px;
  padding: 0 10px;
  background: #fff;
  font-size: 14px;
  .transaction-item {
    @include flexbox();
    @include justify-content(space-between);
    @include align-items(center);
    line-height: 26px;
  }
}

.store-service {
  margin-top: 10px;
  font-size: 14px;
  background: #fff;
  .service-title {
    text-align: left;
    line-height: 40px;
    padding: 0 10px;
  }
  .service-items {
    padding: 0 10px;
    border-top: solid 1px #efefef;
  }
  .service-item  {
    @include flexbox();
    @include justify-content(flex-start);
    @include align-items(center);
    line-height: 30px;
    img {
      width: 14px;
    }
  }
  .service-icon {
    width: 24px;
  }
}
.store-brief {
  margin: 10px 0 0px 0;
  padding: 0 10px;
  background: #fff;
  font-size: 14px;
  text-align: left;
  .brief-title {
      line-height: 40px;
  }
  .brief-main {
    line-height: 20px;
  }
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(100px);
  opacity: 0;
}
</style>
<template>
    <div class="store">
      <section  class="store-header">
        <div class="header">
            <div class="top-icons">
              <div class="go-back" @click="goBack "><img src="./grey_arrow.png"></div>
              <a href="tel:13733182056"><div class="phone"><img src="./phone.png"></div></a>
            </div>
            <div class="store-title">
              <div>
                <div class="store-name">{{storeInfo.name}}</div>
                <div class="shortname">{{storeInfo.market.shortName}}</div>
              </div>
              <div class="focus">
                <div class="fances">
                  <div class="fances-num">{{storeInfo.favoriteCount}}</div>
                  <div>粉丝数</div>
                </div>
                <div class="to-focus">
                  <div class="star"><img src="./star.png"></div>
                  <div>关注</div>
                </div>
              </div>
            </div>
          </div>
          <div class="menu">
            <div class="product-menu " :class="{'menu--cyan': toggle}" @click="toggleClick(1)">商品</div>
            <div class="store-menu" :class="{'menu--cyan': !toggle}" @click="toggleClick(2)">店铺</div>
          </div>
      </section>
      <section class="contain">
      <transition name="slide-fade">
        <div class="product-container" v-if="toggle">
          <div class="product" v-for="product in storeInfo.nowSaleProducts">
            <div class="img-container" data-id="product.id" @click="ToProductDetail(product.id)">
              <img :src="product.thumbnail">
            </div>
            <div class="product-info">
              <div class="product-name">{{product.title}}</div>
              <div>
                <span class="product-price">{{product.price}}</span>
                <span class="product-wrap">{{product.pack}}</span>
              </div>
            </div>
          </div>
        </div>
          <div class="store-container" v-else>
           <div class="main-info">
              <div class="store-name info-common">
                <div class="icon-container"><img src="./store_icon.png"></div>
                <div>{{storeInfo.market.name}}</div>
              </div>
              <div class="store-addr info-common">
                <div class="icon-container"><img src="./adr-icon.png"></div>
                <div>{{storeInfo.address}}</div>
              </div>
              <div class="store-phone info-common">
                <div class="icon-container"><img src="./grey-phone.png"></div>
                <div>{{storeInfo.managerPhone}}</div>
              </div>
            </div>
            <div class="qualify">
              <div>供货商资质</div>
              <div class="authenticated">已通过认证</div>
            </div>
            <div class="transaction-status ">
              <div class="transaction-item">
                <div>接单时间</div>
                <div>{{storeInfo.businessTime}}</div>
              </div>
              <div class="transaction-item">
                <div>信誉评价</div>
                <div>100%好评率></div>
              </div>
              <div class="transaction-item">
                <div>成交量</div>
                <div>{{storeInfo.orderCount}}单</div>
              </div>
              <div class="transaction-item">
                <div>主营类目</div>
                <div>{{storeInfo.mainBusinessCategoryNames}}</div>
              </div>
            </div>
            <div class="store-service">
              <div class="service-title">商家优惠及服务</div>
              <div class="service-items">
                <div class="service-item">
                  <div class="service-icon"><img src="./payment.png"></div>
                  <div>支持预先支付，货到付款</div>
                </div>
                <div class="service-item">
                  <div class="service-icon"><img src="./coupon.png"></div>
                  <div>支持平台及店铺优惠券</div>
                </div>
                <div class="service-item">
                  <div class="service-icon"><img src="./dispatch.png"></div>
                  <div>支持集单自提，集单配送</div>
                </div>
              </div>
            </div>
            <div class="store-brief">
              <div class="brief-title">
                店铺简介
              </div>
              <div class="brief-main">
                {{storeInfo.description}}
              </div>
            </div>
        </div>
        </transition>
      </section>
<!--       <section class="order-item">
   <div class="nomore_order" >没有更多了</div>
    </section> -->
    </div>
</template>
<script>
import storeBg from '@/assets/images/store-bg.png'
import { getOrdersList, getStoreload } from '@/config/req'
import { mapMutations } from 'vuex'
import { Toast, Indicator, InfiniteScroll } from 'mint-ui'
export default {
  name: 'Order',
  data () {
    return {
      index: 0,
      storeInfo: null,
      toggle: true,
      width: 0,
      storeBg,
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
    toggleClick (num) {
      if (num === 1) {
        this.toggle = true
      } else {
        this.toggle = false
      }
    },
    fetchData (id) {
      getStoreload(id)
      .then(data => {
        console.log('data', data.data.response)
        this.storeInfo = data.data.response
      })
    },
    fetchDiffData (i) {
      getOrdersList()
    },
    ToProductDetail (id) {
      window.location.href = 'http://mfort.epfresh.com/common/product.html?#' + id + '&31'
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
    this.fetchData(this.$route.params.id)
    document.getElementsByTagName('body')[0].style.backgroundColor = '#EAEAEA'
    document.getElementsByTagName('html')[0].style.backgroundColor = '#EAEAEA'
    document.getElementById('app').style.marginBottom = '0px'
  },
  components: {
    InfiniteScroll
  }
}
</script>
