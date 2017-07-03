<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './_flex.scss';
a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
.head_goback {
  float: left;
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -8px;
}
.product-img {
  max-width: 100px;
  img {
    position: relative;
    display: block;
    top: 50%;
    width: 80px;
    height: 80px;
    object-fit:cover;
  }
}
.product-info {
  margin-left: 10px;
  .product-pack {
    @include flexbox;
    @include justify-content(flex-start);
    @include align-items(center);
  }
}

.store_area {
  position: fixed;
  top: 0;
  z-index: 2;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  border-bottom: solid 10px #efefef;
  background: #fff;
}
.store_title {
  height: 40px;
  line-height: 40px;
}
.grey-arrow {
  display: inline-block;
  transform:translate3d(0,0,0) rotate(180deg);
  width: 8px;
  height: 16px;
}
.store-container {
  margin-top: 50px;
}
.store-container--reset {
  transition: all ease-in .2s;
  transform:translate3d(0,0,0) !important;
  -ms-transform:translate3d(0,0,0) !important;   /* IE 9 */
  -moz-transform:translate3d(0,0,0) !important;  /* Firefox */
  -webkit-transform:translate3d(0,0,0) !important; /* Safari 和 Chrome */
  -o-transform:translate3d(0,0,0) !important;
}
.store-item {
  @include flexbox();
  @include justify-content(space-around);
  @include align-items(center);
  .store {
    width: 50%;
    border: solid 1px #efefef;
    border-radius: 5px;
    margin: 5px 5px;
    padding-bottom: 5px;
    text-align: left;
    background:#fff;
  }
  .store-title {
    height: 30px;
    line-height: 30px;
    margin-left: 8px;
    max-width:160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    font-size: 14px;
  }
  .store-brief {
    @include flexbox();
    @include justify-content(space-around);
    @include align-items(center);
    margin-left: 8px;
    line-height: 16px;
    font-size: 10px;
  }
  .store-info {
    @include flex-grow(2);
    color: #959595;
  }
  .phone {
    min-width: 40px;
    text-align: center;
    border-left: solid 1px #dadada;
  }
  .phone-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('../../assets/images/phone_icon.png') top left no-repeat;
    background-size: cover;
  }
}
.store-logo {
  position: relative;
  .store-status-icon {
    position: absolute;
    width: 32px;
    right: 0;
    top: 0;
  }
  img {
    width: auto;
    max-width: 100%;
  }
}
.rotate {
  transition: all ease-in .2s;
  display: inline-block;
  transform:rotate(180deg);
  -ms-transform:rotate(180deg);   /* IE 9 */
  -moz-transform:rotate(180deg);  /* Firefox */
  -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
  -o-transform:rotate(180deg);
}
.rotate-bottom {
  transition: all ease-in .2s;
    transform:rotate(0deg);
  -ms-transform:rotate(0deg);   /* IE 9 */
  -moz-transform:rotate(0deg);  /* Firefox */
  -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
  -o-transform:rotate(0deg);
}
.drop-bottom {
  transition: all ease-in .5s;
  display: block;
  font-size: 12px;
  color: #959595;
  opacity: 1;
}
.drop-bottom-none {
  transition: all ease-in .5s;
  display:block;
  opacity: 0;
}
.drop-bottom-text {
  margin-top: 6px;
  font-size: 12px;
}
.load-more {
  font-size: 12px;
  color: #959595;
}
.dispn {
  display: none;
}
</style>
<template>
  <div class="store-list">
    <div class="store_area">
      <router-link class="head_goback"  to="/home">
        <img class="grey-arrow" :src="greyArrow">
      </router-link >
      <div class="store_title">店铺列表</div>
    </div>
      <section class="store-container"
      @scroll="doScroll"
      @touchstart="dotouchstart"
      @touchmove="dotouchmove"
      @touchcancle="dotouchcancle"
      @touchend="dotouchend">
      <div class="store-item" v-for="item in didContent">
        <div class="store" @click="toStore(item[0].id)">
          <div class="store-logo">
            <img  :src="[item[0].headerImage ? item[0].headerImage : overhead]">
            <img class="store-status-icon" :src="statusIcon({isAcceptOrders: item[0].isAcceptOrders, recType: item[0].recType})">
          </div>
          <div class="store-title">{{item[0].name}}</div>
          <div class="store-brief">
            <div class="store-info">
              <div>{{item[0].stall}}</div>
              <div>共{{item[0].onShelvesProductCount}}件商品</div>
            </div>
            <div class="phone">
              <a class="phone-icon" v-bind:href="'tel:'+item[0].phone"></a>
            </div>
          </div>
        </div>
        <div class="store" @click="toStore(item[1].id)">
          <div class="store-logo">
            <img  :src="[item[1].headerImage ? item[1].headerImage : overhead]">
            <img class="store-status-icon" :src="statusIcon({isAcceptOrders: item[1].isAcceptOrders, recType: item[1].recType})">
          </div>
          <div class="store-title">{{item[1].name}}</div>
          <div class="store-brief">
            <div class="store-info">
              <div>{{item[1].stall}}</div>
              <div>共{{item[1].onShelvesProductCount}}件商品</div>
            </div>
            <div class="phone">
              <a class="phone-icon" v-bind:href="'tel:'+item[1].phone"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="load-more"  :class="{'dispn': !isMove}">
        上滑加载更多
      </div>
      <div  class="drop-bottom" :class="{'drop-bottom-none': bottomNone, 'dispn': isMove}">
        <span v-show="true" :class="{ 'rotate': topStatus === 'drop', 'rotate-bottom': end }">↓</span>
        <div class="drop-bottom-text"></div>
      </div>
      </section>
  </div>
</template>

<script>
import greyArrow from '@/assets/images/grey-arrow.png'
import overhead from '@/assets/images/overhead-green.png'
import phoneIcon from '@/assets/images/phone_icon.png'
import storeRestIcon from '@/assets/images/store_rest_icon.png'
import storeCollectIcon from '@/assets/images/store_collect_icon.png'
import storeRecentlyIcon from '@/assets/images/store_recently_icon.png'
import { Toast, Indicator, Loadmore } from 'mint-ui'
import { getStoreList } from '@/config/req'
import { mapMutations } from 'vuex'
export default {
  name: 'Order',
  data () {
    return {
      msg: 'Welcome to Order !',
      content: [],
      greyArrow,
      overhead: overhead,
      storeRestIcon,
      phoneIcon,
      storeCollectIcon,
      storeRecentlyIcon,
      allLoaded: false,
      isMove: true,
      topStatus: 'drop',
      _startY: 0,
      _endY: 0,
      currentY: 0,
      _mDistance: 0,
      isBottom: false,
      end: false,
      hide: true,
      totalPages: 1,
      currentPage: 0,
      template: {
        none: '上拉加载更多',
        message: '释放更新',
        loading: '正在更新，请稍后',
        success: '加载成功',
        error: '加载失败'
      },
      bottomNone: false,
      containerReset: true
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData(0)
    window.addEventListener('scroll', this.doScroll)
  },
  computed: {
    didContent: function () {
      return this.$lodash.chunk(this.content, 2)
    }
  },
  methods: {
    ...mapMutations([
      'HIDE_MENU'
    ]),
    fetchData (pn) {
      getStoreList(this.$store.state, {'marketId': '', 'pageNumber': pn, 'sortProperty': 'name', 'sortDirection': 'DESC', 'favorite': '', 'areaId': ''})
      .then(data => {
        let content = data.data.response.content
        this.totalPages = data.data.response.totalPages
        this.currentPage
        this.content = content
        console.log('store', content)
      })
    },
    toStore (id) {
      this.$router.push({name: 'Store', params: {id: id}})
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
    statusIcon ({recType, isAcceptOrders}) {
      if ((isAcceptOrders.toString()) === '1') {
        if (recType === null) {
          return
        }
        if ((recType.toString()) === '1') {
          return this.storeRecentlyIcon
        } else if ((recType.toString()) === '2') {
          return this.storeCollectIcon
        }
      } else {
        return this.storeRestIcon
      }
    },
    dotouchstart (e) {
      if (!this.isBottom) {
        return false
      }
      this.isMove = false
      this.containerReset = false
      this.bottomNone = false
      let dropBottomText = document.getElementsByClassName('drop-bottom-text')
      dropBottomText[0].innerHTML = this.template.none
      this._startY = e.touches[0].pageY
    },
    dotouchmove (e) {
      if (!this.isBottom) {
        return false
      }
      this.end = true
      this.currentY = e.touches[0].pageY
      this._mDistance = this.currentY - this._startY
      if (this._mDistance < 0) {
        if (Math.abs(this._mDistance) > 0) {
          e.preventDefault()
        }
        let dropBottomText = document.getElementsByClassName('drop-bottom-text')
        dropBottomText[0].innerHTML = this.template.message
        document.querySelector('.store-container').style.transform = 'translate3d( 0,' + -Math.abs(this._mDistance) + 'px,0)'
      }
    },
    dotouchcancle (e) {
      if (!this.isBottom) {
        return false
      }
      console.log('touchcancle')
      this.end = false
      this._endY = e.changedTouches[0].pageY
      this._mDistance = this._endY - this._startY
      document.querySelector('.store-container').style.transform = 'translate3d( 0,0,0)'
    },
    dotouchend (e) {
      if (!this.isBottom) {
        return false
      }
      console.log('touchend')
      this.end = false
      this._endY = e.changedTouches[0].pageY
      this._mDistance = this._endY - this._startY
      let dropBottomText = document.getElementsByClassName('drop-bottom-text')
      dropBottomText[0].innerHTML = this.template.loading
      this.containerReset = true
      document.querySelector('.store-container').style.transform = 'translate3d( 0,0,0)'
      this.currentPage = this.currentPage + 1
      if (this.currentPage < this.totalPages) {
        getStoreList(this.$store.state, {'marketId': '', 'pageNumber': this.currentPage, 'sortProperty': 'name', 'sortDirection': 'DESC', 'favorite': '', 'areaId': ''})
        .then(data => {
          dropBottomText[0].innerHTML = this.template.success
          this.bottomNone = true
          let content = data.data.response.content
          console.log(content)
          this.isBottom = false
          this.isMove = true
          let that = this
          setTimeout(function () {
            for (var i = 0; i < content.length; i++) {
              that.content.push(content[i])
            }
          }, 0)
          console.log('didContent', this.content)
        })
      } else {
        this.isMove = true
        document.querySelector('.load-more').innerHTML = '没有更多啦'
      }
    },
    getScrollTop () {
      let scrollTop = 0
      let bodyScrollTop = 0
      let documentScrollTop = 0
      if (document.body) {
        bodyScrollTop = document.body.scrollTop
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
      }
      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
      return scrollTop
    },
    getScrollHeight () {
      let scrollHeight = 0
      let bodyScrollHeight = 0
      let documentScrollHeight = 0
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight
      }
      scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
      return scrollHeight
    },
    getWindowHeight () {
      let windowHeight = 0
      if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight
      } else {
        windowHeight = document.body.clientHeight
      }
      return windowHeight
    },
    doScroll () {
      let isBottom = (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight())
      if (isBottom) {
        this.isBottom = true
      } else {
        this.isBottom = false
      }
    }
  },
  components: {
    Toast,
    Indicator,
    Loadmore
  },
  mounted () {
    let dropBottomText = document.getElementsByClassName('drop-bottom-text')
    dropBottomText[0].innerHTML = this.template.none
    document.getElementById('app').style.marginBottom = '20px'
    this.HIDE_MENU({ hidemenu: this.hide })
  }
}
</script>
