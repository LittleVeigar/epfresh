<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './_flex.scss';
@mixin prefix($map, $vendors: webkit moz ms o) {
    @each $prop, $value in $map {
        @if $vendors {
            @each $vendor in $vendors {
                #{"-" + $vendor + "-" + $prop}: #{$value};
            }
        }
        #{$prop}: #{$value};
    }
}
a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
.clearfix:after {
  clear:both;
  content:'.';
  display:block;
  width: 0;
  height: 0;
  visibility:hidden;
}
ul, ol { list-style: none; margin: 0;padding: 0;}
ul li {
  display: inline-block;
}
.head_goback {
  float: left;
  position: absolute;
  right: 15px;
  top: 50%;
  margin-top: -12px;
}
.menu-container {
  position: fixed;
  z-index: 4;
  width: 100%;
  overflow-x: hidden;
  top: 40px;
  height: 40px;
  max-width: 640px;
  line-height: 40px;
  box-sizing: border-box;
  padding:0 10px;
  white-space:nowrap;
  background: #fff;
  border-bottom: solid 1px #efefef;
}
.all-menu {
  color: #6B6B6B;
  font-size: 14px;
  text-align: left;
  transform:translate3d(0,0,0);
  li {
    margin: 0 10px;
    height: 37px;
  }
  .menu--active {
    color: #009983;
    border-bottom: solid 2px #009983;
  }
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
}

.store_area {
  position: fixed;
  top: 0;
  z-index: 5;
  height: 40px;
  width: 100%;
  max-width: 640px;
  box-sizing: border-box;
  padding: 0 15px;
  background: #F1F1F2;
}
.store_title {
  height: 40px;
  line-height: 40px;
  .pull-down {
    width: 10px;
    margin-left: 5px;
  }
  .pull-up {
    transform: rotate(180deg);
  }
}
.grey-arrow {
  display: inline-block;
  width: 24px;
  height: 24px;
}
.market-dialog {
  position: fixed;
  z-index: 5;
  top:.8rem;
  width: 100%;
  max-width: 640px;
  min-height: 3.2rem;
  transition: all 1s;
  background: #F3F4F7;
  font-size: 12px;
  color: #959595;
  li {
    float:left;
    height: .5rem;
    line-height: .5rem;
    width: 30%;
    margin: .2rem 0 0 2.5%;
    border: solid 1px #efefef;
    border-radius:.3rem;
    background: #fff;
  }
  .market--selected {
    color: #3EB049;
    border: solid 1px #3EB049;
  }
  .market-select-button  {
    height:40px;
    position: absolute;
    bottom: 0;
    width:100%;
  }
  .market-select-button  div {
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
    &.market-select--green {
      color: #fff;
      background: #3EB049;
    }
  }
}
.products-filter-dialog {
  position: fixed;
  top: 110px;
  z-index: 2;
  min-height: 200px;
  padding-left: 80px;
  margin-left: -80px;
  width: 100%;
  background: #F3F4F7;
  box-sizing: border-box;
  li {
    float:left;
    height: .5rem;
    line-height: .5rem;
    margin: .2rem 0 0 2.5%;
    padding: 0 10px;
    border: solid 1px #efefef;
    border-radius:5px;
    background: #fff;
  }
  .selected-classify {
    color: #009983;
  }
  .dialog-filter-button {
    height:40px;
    position: absolute;
    bottom: 0;
    width:100%;
    margin-left: -80px;
    padding-left: 80px;
    box-sizing: border-box;
  }
  .dialog-filter-button div {
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
    &.dialog-filter--green {
      color: #fff;
      background: #3EB049;
    }
  }
}
.container {
  margin-top: 110px;
  font-size: 12px;
  .container-mask {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .sidebar {
    position: fixed;
    overflow: hidden;
    min-height: 100%;
    z-index: 3;
    left: 0;
    top: 80px;
    width: 80px;
    box-sizing: border-box;
    padding-bottom: 60px;
    background:#F1F1F2;
    color: #6B6B6B;
    font-size: 12px;
    li {
      @include flexbox();
      @include align-items(center);
      padding:0 5px;
      height: 35px;
      text-align: left;
      border-bottom: solid 1px #ccc;
    }
    .sidebar-menu--active {
      color: #009983;
      background: #fff;
    }
    .sidebar-menu {
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      border-right: solid 1px #efefef;
    }
  }
  @media screen and (min-width:640px){
    .sidebar {
      left: 50%;
      @include prefix((transform:translateX(-320px)), (webkit moz ms o));
    }
  }
  .main {
    @include flex-grow(2);
    margin:30px 0 55px 80px;
    .filter-button {
      @include flexbox();
      @include justify-content(space-around);
      position: fixed;
      z-index: 2;
      top: 80px;
      width: 100%;
      max-width: 640px;
      padding: 0 0 0 80px;
      color: #959595;
      box-sizing: border-box;
      height: 30px;
      line-height: 30px;
      margin-left: -80px;
      font-size: 12px;
      background: #fff;
      border-bottom: solid 1px #ccc;
    }
    .filter-selected {
      position: relative;
      top: 50%;
      float: left;
      width: 50%;
      height: 20px;
      box-sizing: border-box;
      margin-top: -10px;
      line-height: 20px;
    }
    .filter-selected--green {
      color:#009983;
    }
    .filter-product {
      @extend .filter-selected;
      border-left: solid 1px #efefef;
      img {
        width: 8px;
      }
      .pull-up {
        transform: rotate(180deg);
      }
    }
  }
}
.product-container {
  .product-distribution-center {
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
    background:#FaFaFa;
    text-align: left;
    font-size: 12px;
    color: #6B6B6B;
  }
  .market-container {
    overflow: hidden;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    white-space: nowrap;
    width: 98%;
  }
  .product-name {
    display: -webkit-box;
    height: 36px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding-right: 20px;
  }
  .product-text {
    @include flex-grow(2);
  }
  .product-info {
    @include flexbox();
    @include justify-content(flex-start);
    @include align-items(flex-start);
    margin-top: 10px;
    text-align: left;
  }
  .product-price {
    color:red;
  }
  .product-pack {
    font-size: 10px;
    padding:2px;
    background: #efefef;
  }
  img {
    object-fit:cover;
    max-height: 60px;
    width: 60px;
    max-width: 60px;
    box-sizing: border-box;
    margin-right: 10px;
  }
}
  .product-modify {
    height: 30px;
    font-size: 14px;
    text-align: right;
    .float-right {
      display: flex;
      justify-content:flex-end;
      text-align: center;
      margin-right: 10px;
    }
    .modify-color {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border:solid 1px #3EB049;
      border-radius: 5px;
      font-size: 20px;
      color: #3EB049;
    }
    .unaccept-color {
      @extend .modify-color;
      margin-right: 15px;
      background:lightgrey;
      color: #fff;
      border:solid 1px lightgrey;
    }
    .unadd-color {
      @extend .modify-color;
      margin-right: 15px;
      background:#3EB049;
      color: #fff;
    }
    .product-num {
      display: inline-block;
      height: 22px;
      margin: 0 5px;
      line-height: 22px;
      width: 80px;
      border-radius: 5px;
      background: #efefef;
    }
    .unit {
      display: inline-block;
      width: 40px;
      font-size: 14px;
      text-align: center;
      margin-left: 5px;
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
.mask {
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.test {
  height: 100px;
  font-size: 20px;
}
</style>
<template>
  <div class="store-list" id="store">
    <div class="store_area">
      <div class="store_title" @click="showMarketList">
        {{title}}
        <img
          class="pull-down"
          :class="{'pull-up': !switchShow}"
          :src="pullDown"
          alt="下拉">
      </div>
      <router-link class="head_goback"  to="/search">
        <img class="grey-arrow" :src="greyArrow">
      </router-link >
    </div>
    <div class="market-dialog " :class="{'dispn': switchShow}">
      <ul class="clearfix" ref="markets">
        <li :class="{'market--selected': didSelectAll}" @click="clearMarket">全部</li>
        <li v-for="item in marketlist"
          :data-id="item.id"
          :class="{'market--selected': select[item.id]}"
          @click.stop="toggleSelectMarket">
          {{item.shortName}}
        </li>
      </ul>
      <div class="market-select-button clearfix">
        <div @click="clearMarket">清空</div>
        <div class="market-select--green" @click="FetchSelectMarketData">确定</div>
      </div>
    </div>
    <section class="menu-container" >
     <ul class="all-menu" id="all-menu"
      @touchstart="menutouchstart"
      @touchmove="menutouchmove"
      @touchend="menutouchend"
      @click = "clickAllmenus()"
      >
        <li v-for="(item, index) in contents"
          :class = "{'menu--active': item.id===topIndex}"
          :data-id="item.id"
          :data-index="index">
          {{item.name}}
        </li>
      </ul>
    </section>
    <div class="parent">
    <section class="container">
      <div class="sidebar" v-focus id="sidebar" ontouchstart = "onTouchStart">
        <ul
          @touchstart="sidebarTouchstart"
          @touchmove="sidebarTouchmove"
          @touchend="sidebarTouchend"
          @click = "clickSidebarmenus()"
          class="sidebar-menu" id="sidebar-menu">
          <li
            v-for="(item, index) in didSidebarlists"
            :class="{'sidebar-menu--active': item.id=== sidebarIndex}" :data-id="item.id" :data-index="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="main">
        <div class="filter-button clearfix">
          <div class="filter-selected" :class="{'filter-selected--green':viewSelect}" @click="getSelected">只看已选</div>
          <div class="filter-product" :class="{'filter-selected--green':!filterClassifyAll}" @click="showFilterDialog">
            商品筛选
           <img class="pull-down" :class="{'pull-up': !filterDialog}" :src="pullDown"  alt="下拉">
          </div>
        </div>
        <div class="products-filter-dialog" :class="{'dispn':filterDialog}">
          <ul class="clearfix">
            <li :class="{'selected-classify':filterClassifyAll}">全部</li>
            <li v-for="item in filterProducts ? filterProducts.names : undefined" :class="{'selected-classify':selectedClassifies?selectedClassifies[item.id]:false }" @click="selectedClassify" :data-id="item.id">{{item.name}}</li>
          </ul>
          <div class="dialog-filter-button clearfix">
            <div class="clear-button" @click="clearClassify">清除</div>
            <div class="category-filter-button dialog-filter--green" @click="fetchClassifyData">确定</div>
          </div>
        </div>
        <div v-for="(product, index) in products.content"  class="product-container">
          <div class="product-distribution-center">
            <div class="market-container">
              <span>{{product.marketName}}</span>
              <span>{{product.storeName}}</span>
            </div>
          </div>
          <div class="product-info" >
            <div class="product-img" @click="ToProductDetail(product.id)">
              <img :src="product.thumbnail">
            </div>
            <div class="product-text">
              <div class="product-name">{{product.title}}</div>
              <div class="product-wrap">
                <span class="product-price">{{product.price}}</span>
                <span class="product-pack">{{product.pack}}</span>
              </div>
            </div>
          </div>
          <div class="product-modify clearfix">
              <span v-if="!product.isAcceptOrders"  class="unaccept-color" >+</span>
              <span v-else-if="!decideAddCart(product.id)"  class="unadd-color"
               @click="addToCart({
                productCount: product.moq,
                productUnitPrice: product.priceOnly,
                productId: product.id,
                salesType: product.type,
                versionId: product.lastSnapshotId
                })">+</span>
              <div v-else class="float-right ">
                <span class="decrease modify-color" @click="decr({index: index, incr: product.incr, cnt: product.cnt? product.cnt: product.moq, productCount: product.moq,
                productUnitPrice: product.priceOnly,
                productId: product.id,
                salesType: product.type,
                versionId: product.lastSnapshotId})">-</span>
                <span class="product-num" :data-id="product.id">{{product.cnt? product.cnt: product.moq}}</span>
                <span class=" modify-color"  @click="incr({index: index, incr: product.incr, cnt: product.cnt? product.cnt: product.moq, productCount: product.moq,
                productUnitPrice: product.priceOnly,
                productId: product.id,
                salesType: product.type,
                versionId: product.lastSnapshotId})">+</span>
                <span class="unit">{{product.packageUnit}}</span>
              </div>
            </div>
        </div>
      </div>
      <div class="container-mask" :class="{'dispn':filterDialog}"></div>
    </section>
    </div>
      <section class="store-container">
        <div class="load-more"  :class="{'dispn': !isMove}">
          上滑加载更多
        </div>
        <div  class="drop-bottom" :class="{'drop-bottom-none': bottomNone, 'dispn': isMove}">
          <span v-show="true" :class="{ 'rotate': topStatus === 'drop', 'rotate-bottom': end }">↓</span>
          <div class="drop-bottom-text"></div>
        </div>
      </section>
    <div class="mask" ref="mask" :class="{'dispn': switchShow}"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import alloytouch from 'alloytouch'
import greyArrow from './search_icon.svg'
import pullDown from './pull-down_icon.svg'
import { Toast, Indicator, Loadmore } from 'mint-ui'
import { getTree4purchaser, getPartproductList, getMarketlist4purchaser, getShoppingCarCntNew, addToShoppingCarNew } from '@/config/req'
import { mapMutations } from 'vuex'
export default {
  name: 'Order',
  data () {
    return {
      contents: [],
      products: [],
      marketlist: [],
      shoppingCar: null,
      greyArrow,
      title: '全部',
      sidebarlists: undefined,
      pullDown,
      select: {},
      marketids: [],
      selectAll: true,
      id: 2,
      viewSelect: false,
      allLoaded: false,
      isMove: false,
      filterDialog: true,
      selectedClassifies: null,
      topStatus: 'drop',
      _startY: 0,
      _endY: 0,
      currentY: 0,
      _mDistance: 0,
      topmenu_index: 1,
      sidebarmenu_id: 49,
      sidebarmenu_index: 0,
      menu_startX: 0,
      menu_endX: 0,
      menu_currentX: 0,
      menu_mDistance: 0,
      menu_trans: 0,
      menu_leftend: 20,
      sidebar_startY: 0,
      sidebar_endY: 0,
      sidebar_currentY: 0,
      sidebar_mDistance: 0,
      sidebar_trans: 0,
      sidebar_bottomend: 0,
      sidebarHeight: 0,
      isBottom: false,
      switchShow: true,
      end: false,
      hide: false,
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
    window.addEventListener('scroll', this.doScroll)
  },
  computed: {
    topIndex: function () {
      return parseInt(this.topmenu_index)
    },
    sidebarIndex: function () {
      return parseInt(this.sidebarmenu_id)
    },
    didSidebarlists: function () {
      return this.sidebarlists ? this.sidebarlists : (this.contents[0] ? this.contents[0].categories : undefined)
    },
    filterProducts: function () {
      return this.sidebarlists ? this.sidebarlists[this.sidebarmenu_index] : (this.contents[0] ? this.contents[0].categories[this.sidebarmenu_index] : undefined)
    },
    didSelectAll: function () {
      let all = false
      for (let item in this.select) {
        all = all || this.select[item]
        if (this.select[item]) {
          this.selectAll = false
        }
      }
      if (!all) {
        this.selectAll = true
      }
      return this.selectAll
    },
    filterClassifyAll: function () {
      let selectedAll = true
      if (this.selectedClassifies) {
        for (let i in this.selectedClassifies) {
          if (this.selectedClassifies[i]) {
            selectedAll = false
          }
        }
      }
      console.log(selectedAll)
      return selectedAll
    }
  },
  methods: {
    init () {
      document.getElementById('sidebar-menu').style.transform = 'translate3d(0, 0, 0)'
      document.body.scrollTop = 0
      this.clearClassify()
    },
    ...mapMutations([
      'HIDE_MENU',
      'HOME_ACTIVE'
    ]),
    showMarketList () {
      this.switchShow = !this.switchShow
    },
    showFilterDialog () {
      this.filterDialog = !this.filterDialog
    },
    fetchClassifyData () {
      if (this.selectedClassifies) {
        console.log(Object.keys(this.selectedClassifies))
        let keys = Object.keys(this.selectedClassifies)
        let arr = []
        let len = keys.length
        for (let i = 0; i < len; i++) {
          if (this.selectedClassifies[keys[i]]) {
            arr.push(keys[i])
          }
        }
        getPartproductList({categoryId: this.sidebarmenu_id, topCategoryId: this.topmenu_index, nameIds: arr, state: this.$store.state})
        .then(data => {
          let dat = data.data.response
          this.products = dat
        })
      } else {
        getPartproductList({categoryId: this.sidebarmenu_id, topCategoryId: this.topmenu_index, state: this.$store.state})
        .then(data => {
          let dat = data.data.response
          this.products = dat
        })
      }
      this.filterDialog = true
    },
    toggleSelectMarket (e) {
      let ev = e || window.event
      let target = ev.target || ev.srcElement
      let id = parseInt(target.dataset.id)
      this.select[id] = !this.select[id]
    },
    selectedClassify (e) {
      let ev = e || window.event
      let target = ev.target || ev.srcElement
      let id = parseInt(target.dataset.id)
      if (this.selectedClassifies) {
        this.$set(this.selectedClassifies, id, !this.selectedClassifies[id])
      } else {
        this.selectedClassifies = {}
        this.$set(this.selectedClassifies, id, true)
      }
    },
    clearClassify (e) {
      this.selectedClassifies = null
    },
    getSelected () {
      this.init()
      getPartproductList({categoryId: this.sidebarmenu_id, topCategoryId: this.topmenu_index, selected: !this.viewSelect, state: this.$store.state})
      .then(data => {
        let dat = data.data.response
        this.products = dat
      })
      this.viewSelect = !this.viewSelect
    },
    FetchSelectMarketData () {
      this.switchShow = !this.switchShow
      if (this.selectAll) {
        this.title = '全部'
        this.fetchData(['2'], this.marketids)
      } else {
        let selectMarkets = this.$refs.markets.querySelectorAll('.market--selected')
        let len = selectMarkets.length
        let arr = []
        if (len > 1) {
          this.title = `已选${len}个市场`
        } else {
          this.title = selectMarkets[0].innerText
        }
        for (let i = 0; i < len; i++) {
          let id = selectMarkets[i].dataset.id
          arr.push(id)
        }
        this.fetchData(['2'], arr)
      }
    },
    getSidebar (index) {
      return this.contents[index].categories
    },
    clearMarket () {
      let len = this.marketlist.length
      for (let i = 0; i < len; i++) {
        let marketid = this.marketlist[i].id
        this.marketids.push(marketid)
        this.$set(this.select, marketid, false)
      }
      console.log('len', this.select[1])
    },
    fetchData (ids, marketid) {
      getTree4purchaser(marketid, this.$store.state)
      .then(data => {
        let dat = data.data.response
        this.contents = dat
        return dat
      })
      .then(dat => {
        this.topmenu_index = dat[0].id
        this.sidebarmenu_id = dat[0].categories[0].id
        return getPartproductList({categoryId: dat[0].categories[0].id, topCategoryId: dat[0].id, state: this.$store.state})
      })
      .then(data => {
        let dat = data.data.response
        return dat
      })
      .then(products => {
        getShoppingCarCntNew(this.$store.state)
        .then(data => {
          this.shoppingCar = data.data.response
          console.log(typeof products.content)
          let content = products.content
          content.forEach((product) => {
            let productCnt = this.shoppingCar.productCnt
            for (let i = 0; i < productCnt.length; i++) {
              if (product.id === productCnt[i].productId) {
                product.cnt = productCnt[i].cnt
              }
            }
          })
          products.content = content
          this.products = products
          this.$set(this.products, content, content)
        })
      })
      getMarketlist4purchaser(ids)
      .then(data => {
        this.marketlist = data.data.response
        let select = true
        select = !Object.keys(this.select).length
        if (select) {
          this.clearMarket()
        }
      })
    },
    gainCartCnt () {
      getShoppingCarCntNew(this.$store.state)
      .then(data => {
        this.shoppingCar = data.data.response
        let content = this.products.content
        content.forEach((product) => {
          let productCnt = this.shoppingCar.productCnt
          for (let i = 0; i < productCnt.length; i++) {
            if (product.id === productCnt[i].productId) {
              product.cnt = productCnt[i].cnt
            }
          }
        })
        this.$set(this.products, content, content)
      })
    },
    decideAddCart (id) {
      if (!this.shoppingCar) {
        return false
      }
      return this.shoppingCar.productCnt.some(function (item) {
        return item.productId === id
      })
    },
    addToCart ({productCount,
            productUnitPrice,
            productId,
            salesType,
            versionId
          }) {
      let product = {
        'id': null,
        'type': null,
        'idAndType': null,
        'productId': productId,
        'cnt': productCount
      }
      this.shoppingCar.productCnt.push(product)
      console.log('addtoken', this.$store.state)
      addToShoppingCarNew({versionId, productCount, productUnitPrice, productId, salesType}, this.$store.state)
      .then(data => {
        console.log(data.data.response)
        console.log(this.shoppingCar)
      })
      .catch(function () {
        Toast('添加购物车失败！')
      })
    },
    incr ({index, incr, cnt, versionId, productCount, productUnitPrice, productId, salesType}) {
      let num = parseFloat((cnt + incr).toFixed(1))
      let content = this.products.content
      let count = 'cnt'
      content[index].count = num
      this.$set(this.products.content[index], count, num)
      console.log(this.products.content[index].cnt)
      console.log(num)
      console.log('addtoken', this.$store.state.token)
      addToShoppingCarNew({versionId, productCount: num, productUnitPrice, productId, salesType}, this.$store.state)
    },
    decr ({index, incr, cnt, versionId, productCount, productUnitPrice, productId, salesType}) {
      let num = parseFloat((cnt - incr).toFixed(1))
      let content = this.products.content
      let count = 'cnt'
      content[index].count = num
      this.$set(this.products.content[index], count, num)
      console.log(this.products.content[index])
      console.log(num)
      addToShoppingCarNew({versionId, productCount: num, productUnitPrice, productId, salesType}, this.$store.state)
      if (num === 0) {
        let productCnt = this.shoppingCar.productCnt.filter(function (item) {
          return item.productId !== productId
        })
        this.shoppingCar.productCnt = productCnt
      }
    },
    ToProductDetail (id) {
      window.location.href = 'http://mtest.epfresh.com/common/product.html?#' + id + '&6401'
    },
    showToast () {
      Toast('这是一个Toast！')
    },
    clickAllmenus () {
      this.sidebarmenu_index = 0
      this.init()
      let ev = ev || window.event
      let target = ev.target || ev.srcElement
      if (target.nodeName.toLowerCase() === 'li') {
        let id = target.dataset.id
        let index = target.dataset.index
        let firstid = this.contents[index].categories[0].id
        this.sidebarlists = this.contents[index].categories
        this.topmenu_index = id
        this.sidebarmenu_id = this.sidebarlists[0].id
        getPartproductList({categoryId: firstid, topCategoryId: id, state: this.$store.state})
        .then(data => {
          let dat = data.data.response
          this.products = dat
          this.init()
        })
      }
    },
    clickSidebarmenus () {
      this.init()
      let ev = ev || window.event
      let target = ev.target || ev.srcElement
      if (target.nodeName.toLowerCase() === 'li') {
        let id = target.dataset.id
        this.sidebarmenu_index = target.dataset.index
        this.sidebarmenu_id = id
        getPartproductList({categoryId: id, topCategoryId: this.topmenu_index, state: this.$store.state})
        .then(data => {
          let dat = data.data.response
          this.products = dat
        })
      }
    },
    menutouchstart (e) {
      this.menu_startX = e.touches[0].pageX
      this.menu_leftend = document.getElementById('all-menu').scrollWidth - document.body.clientWidth + 20
    },
    menutouchmove (e) {
      this.menu_currentX = e.touches[0].pageX
      let mDistance = this.menu_currentX - this.menu_startX
      this.menu_mDistance = this.menu_currentX - this.menu_startX
      let transnum = (this.menu_trans + mDistance * 0.6)
      if (Math.abs(this.menu_mDistance) > 50) {
        e.preventDefault()
      }
      if (transnum > 0) {
        // this.menu_trans = 0
        document.querySelector('.all-menu').style.transform = 'translate3d( ' + transnum + 'px,0,0)'
      } else if (transnum < -this.menu_leftend) {
        document.querySelector('.all-menu').style.transform = 'translate3d( ' + transnum + 'px,0,0)'
      } else {
        if (Math.abs(this.menu_mDistance) > 10) {
          document.querySelector('.all-menu').style.transform = 'translate3d( ' + transnum + 'px,0,0)'
        }
      }
    },
    menutouchend (e) {
      this.menu_endX = e.changedTouches[0].pageX
      this.menu_mDistance = this.menu_endX - this.menu_startX
      let transnum = (this.menu_trans + this.menu_mDistance * 0.4)
      if (transnum > 20) {
        this.menu_trans = 0
        document.querySelector('.all-menu').style.transform = 'translate3d(0,0,0)'
      } else if (transnum < -this.menu_leftend - 20) {
        document.querySelector('.all-menu').style.transform = 'translate3d( ' + -this.menu_leftend + 'px,0,0)'
      } else {
        if (Math.abs(this.menu_mDistance) > 10) {
          document.querySelector('.all-menu').style.transform = 'translate3d( ' + transnum + 'px,0,0)'
        }
      }
    },
    sidebarTouchstart (e) {
      this.sidebar_startY = e.touches[0].pageY
      let scrollHeight = document.getElementById('sidebar').scrollHeight
      let bodyHeight = document.body.offsetHeight
      if (scrollHeight > bodyHeight) {
        this.sidebar_bottomend = document.getElementById('sidebar').scrollHeight - document.body.offsetHeight + 135
      } else {
        this.sidebar_bottomend = 0
      }
    },
    sidebarTouchmove (e) {
      e.preventDefault()
      this.sidebar_currentY = e.touches[0].pageY
      this.sidebar_mDistance = this.sidebar_currentY - this.sidebar_startY
      let transnum = (this.sidebar_trans + this.sidebar_mDistance * 0.6)
      if (transnum > 0) {
        this.sidebar_trans = 0
        document.querySelector('.sidebar-menu').style.transform = 'translate3d(0,0,0)'
      } else if (transnum < -this.sidebar_bottomend + 20) {
        document.querySelector('.sidebar-menu').style.transform = 'translate3d( 0,' + -this.sidebar_bottomend + 'px,0)'
      } else {
        if (Math.abs(this.sidebar_mDistance) > 10) {
          document.querySelector('.sidebar-menu').style.transform = 'translate3d( 0,' + transnum + 'px,0)'
        }
      }
    },
    sidebarTouchend (e) {
      this.sidebar_endY = e.changedTouches[0].pageY
      this.sidebar_trans = this.getTransformNum(window.getComputedStyle(document.querySelector('.sidebar-menu'), null).transform, 5)
    },
    getTransformNum (str, num) {
      let trans = str.replace(/[^0-9\-\.,]/g, '').split(',')
      return parseInt(trans[num])
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
    console.log(this.$store.state)
    this.HOME_ACTIVE({ id: this.id })
    this.HIDE_MENU({ hidemenu: this.hide })
    this.fetchData(['2'], [1])
  },
  updated () {
    this.$refs.mask.style['height'] = document.body.clientHeight + 'px'
    document.querySelector('.container-mask').style['height'] = document.body.clientHeight + 'px'
    document.getElementsByTagName('body')[0].style.backgroundColor = '#fff'
  },
  directives: {
    focus: {
      bind: function (el) {
        console.log('bind')
      },
      inserted: function (el) {
        console.log('inserted')
      },
      update: function (el) {
        console.log('update')
      },
      componentUpdated: function (el) {
        console.log('componentUpdated')
      },
      unbind: function (el) {
        console.log('unbind')
      }
    }

  }
}
</script>
