<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '_flex.scss';
body {
  margin: 0;
}
input {
  border-bottom-width:0px;
  border-left-width:0px;
  border-top-width:0px;
  border-right-width:0px;
  padding: 0;
}
input:focus {
  outline: none;
}
@mixin flexSpaceBetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@mixin rounded($amount) {
  -moz-border-radius: $amount;
  -webkit-border-radius: $amount;
  border-radius: $amount;
}
.clearfix:after {
  clear:both;
  content:'.';
  display:block;
  width: 0;
  height: 0;
  visibility:hidden;
}

.title {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 640px;
  box-sizing: border-box;
  @include flexSpaceBetween;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  background: #fff;
  border-bottom:solid 1px #efefef;
  img {
    width: 8px;
    -webkit-transform:rotate(180deg);
    transform:rotate(180deg);
  }
  .title_cart {
    @include flex-grow(2);
  }
}
.product-list {
  margin: 50px 0 0 0;
  font-size: 16px;
  background: #efefef;
  .market_list {
    margin-top: 10px;
    background: #fff;
  }
  .market {
    @include flexSpaceBetween;
    padding: 0 10px;
    .market_title_icon {
      height: 40px;
      padding-right: 15px;
      @include flexbox();
      @include justify-content(flex-start);
      @include align-items(center);
    }
  }
  .market-name {
    flex-grow:2;
    height: 40px;
    line-height: 40px;
    text-align: left;
  }
  .checked-icon {
    display: inline-block;
    width:14px;
    min-width: 14px;
    height :14px;
    border-radius: 50%;
    border:solid 1px #ccc;
  }
  .checked {
    @extend .checked-icon;
    width:16px;
    min-width: 16px;
    height :16px;
    border:none;
    background: url(./checked.png) center no-repeat;
    background-size: cover;
  }
  .disabled_uncheck {
    background: #fff;
  }
  .more-icon {
    width: 8px;
  }
  .product {
    background: #fff;
  }
  .product-info {
    @include flexSpaceBetween;
    height: 90px;
    padding: 0 10px;
    border-top:solid 1px #efefef;
    font-size: 14px;
    text-align: left;
    .product-name {
      height: 40px;
      font-size: 14px;
    }
    .product-text {
      height: 75px;
      flex-grow:2;
      margin-left: 10px;
      font-size: 12px;
      .product-spec {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 5px;
      }
      .price {
        color: red;
      }
      .wrap {
        margin-left: 5px;
        padding: 2px;
        font-size: 10px;
        background:#f3f4f7;
        border-radius: 2px;
      }
    }
  }
  .product-img {
    object-fit:cover;
    height: 70px;
    width: 70px;
    min-width: 70px;
    box-sizing: border-box;
  }
  .icon {
    padding-right: 15px;
    text-align: center;
    height: 90px;
    line-height: 90px;
  }
  .product-modify {
    height: 30px;
    font-size: 14px;
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
    .product-num {
      display: inline-block;
      height: 22px;
      margin: 0 5px;
      line-height: 22px;
      width: 1.4rem;
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
}
.disabled_products {
  margin: 10px 0 0 0;
}
.markets_container {
  margin-bottom: 120px;
}
.product-list .uncheck {
  @extend .checked;
}
.product-list .check {
  @extend .checked-icon;
}
.product-abate {
  display: inline-flex;
  float: right;
  justify-content:space-around;
  align-items:center;
  width: 1.8rem;
  height: 24px;
  margin-right: 10px;
  @include rounded(5px);
  color: #959595;
  background: #efefef;
}
.excl {
  display: inline-block;
  width: 16px;
  height: 16px;
  border:solid 1px #ccc;
  @include rounded(50%);
}
.sum {
  position: fixed;
  bottom:55px;
  width: 7.5rem;
  max-width: 640px;
  height: 50px;
  line-height: 50px;
  border-top: solid 1px #efefef;
  background: #fff;
  font-size: 16px;
  .uncheck {
    display: inline-block;
    width:14px;
    min-width: 14px;
    height :14px;
    border-radius: 50%;
    border:solid 1px #ccc;
  }
  .check {
    display: inline-block;
    width:16px;
    min-width: 16px;
    height :16px;
    border-radius: 50%;
    border:none;
    background: url(./checked.png) left top no-repeat;
    background-size: cover;
  }
  .icon {
    display: inline-flex;
    justify-content:space-around;
    align-items:center;
    float: left;
    margin-left: 10px;
  }
  .check_all_icon {
    height: 40px;
    padding-right: 15px;
    @include flexbox();
    @include justify-content(flex-start);
    @include align-items(center);
  }
  .sum-info {
    display: inline-block;
  }
  .sum-money {
    color: red;
  }
  .sum_button {
    display: inline-block;
    width:2rem;
    color: #fff;
    background: #3EB049;
  }
  .sum_button--red {
    background: red;
  }
  .sum_button--grey {
    background: #959595;
  }
  .sum-right {
    display: inline-block;
    float: right;
  }
}
.toast-min {
  height: 20px;
  background: rgba(239, 239, 239, .5);
}
.mask {
  position: fixed;
  top: 0;
  display: none;
  z-index: 2;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.none_product {
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate3d(-50%,-50%,0);
    font-size: 14px;
  }
  img {
    width: 60px;
    margin-left: -10px;
  }
  .cart_text {
    margin-top: 5px;
  }
  .cart_button {
    display: inline-block;
    margin-top: 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    color: #fff;
    background: #3EB049;
  }
}
.dispn {
  display: none;
}
.product_count_dialog {
  position: fixed;
  top: 50%;
  z-index: 3;
  display: none;
  height: 140px;
  width: 90%;
  left: 5%;
  background: #fff;
  .modify_container {
    height: 100px;
    @include flexbox();
    @include justify-content(center);
    @include align-items(center);
  }
  .modify_input {
    width: 80px;
    height: 30px;
    border-bottom:solid 1px #efefef;
    border-top:solid 1px #efefef;
    text-align: center;
    font-size: 16px;
  }
  .decrease {
    height: 30px;
    width: 30px;
    @include flexbox();
    @include justify-content(center);
    @include align-items(center);
    border:solid 1px #efefef;
    img {
      width: 16px;
    }
  }
  .increase {
    @extend .decrease;
    img {
      width: 20px;
    }
  }
  .modify_button {
    box-sizing: border-box;
    height: 40px;
    @include flexbox();
    @include justify-content(flex-start);
    @include align-items(center);
    border-top:solid 1px #efefef;
    .modify_button_cancel {
      @include flex-grow(2);
      height: 39px;
      line-height: 39px;
      border-right: solid 1px #efefef;
    }
    .modify_button_confirm {
      @include flex-grow(2);
      height: 39px;
      line-height: 39px;
      color:#009983;
    }
  }
}
.delete_cart_dialog {
  @extend .product_count_dialog;
}
</style>
<template>
  <div class="shopping-trolley">
    <section class="title">
      <img src="../../assets/images/grey-arrow.png">
      <span class="title_cart">购物车</span>
      <span @click="toggle" :class="{'dispn': unproduct}">{{getEditText}}</span>
    </section>
    <div class="none_product" v-if="unproduct">
          <div class="main">
            <div>
              <img src="./cart_icon.png">
              <div class="cart_text">目前还没有商品</div>
            </div>
            <router-link to="./home" class="cart_button" >
              去选购商品
            </router-link>
          </div>
    </div>
    <div class="have_product" v-else>
    <div class="markets_container">
          <section class="product-list">
            <div class="market_list" v-for="(market,i) in contentAble(didContent)" v-bind:key="i">
              <div class="market" :class = "{'dispn': market.result.length === 0}">
              <div class="market_title_icon" @touchend="marketChecked(i)">
                <span :class="{ 'checked': marketIsChecked(i), 'checked-icon' : !marketIsChecked(i) }" ></span>
              </div>
                <span class="market-name">{{market.wholeSaleMarketName}}</span>
                <img class="more-icon" src="../../assets/images/more_icon.png">
              </div>
              <div class="product" v-for="(product,j) in market.result" v-bind:key="j">
                <div class="product-info">
                  <div class="icon" @touchend="productChecked({ id: product.id, isSelected: product.isSelected,key: j,willDele: product.willDele, disabled: false })">
                    <span  :class="{ 'checked': productState ({ isSelected: product.isSelected, willDele: product.willDele }) , 'checked-icon' : !productState ({ isSelected: product.isSelected, willDele: product.willDele }) }"></span>
                  </div>
                  <img class="product-img" :src="product.productImgUrl" @click="ToProductDetail(product.id)">
                  <div class="product-text">
                    <div class="product-name">{{product.productTitle}}</div>
                    <div class="product-spec">
                      <span class="price">{{product.productPackageSize}}</span>
                      <span class="wrap">{{product.productPriceUnit}}</span>
                    </div>
                  </div>
                </div>
                <div class="product-modify clearfix">
                  <div class="float-right ">
                    <span class="decrease modify-color" @click="decr( { pindex: i, cindex: j, inc: product.incr, min: product.minPlaceOrderValue, id: product.id, num: product.productCount } )">-</span>
                    <span class="product-num" @click="countClick({ pindex: i, cindex: j, inc: product.incr, id: product.id, num: product.productCount })">{{product.productCount}}</span>
                    <span class="increase modify-color" @click="incr( { pindex: i, cindex: j, inc: product.incr, id: product.id, num: product.productCount } )">+</span>
                    <span class="unit">{{product.productChargeUnit}}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="product-list disabled_products" v-for="(market,i) in contentUnabled(didContent)" v-bind:key="i">
            <div class="product" v-for="(product,j) in market.result" v-bind:key="j">
              <div class="product-info">
                <div class="icon" @touchend="productChecked({ id: product.id, isSelected: product.isSelected,key: j,willDele: product.willDele, disabled: true })">
                  <span   :class="{'disabled_uncheck uncheck': edit, 'checked': productState ({ isSelected: product.isSelected, willDele: product.willDele }) , 'checked-icon' : !productState ({ isSelected: product.isSelected, willDele: product.willDele })}"></span>
                </div>
                <img class="product-img" :src="product.productImgUrl" @click="ToProductDetail(product.id)">
                <div class="product-text">
                  <div class="product-name">{{product.productTitle}}</div>
                  <div class="product-spec">
                    <span class="price">{{product.productPackageSize}}</span>
                    <span class="wrap">{{product.productPriceUnit}}</span>
                  </div>
                </div>
              </div>
              <div class="product-modify clearfix">
                <div class="product-abate">
                  <span class="excl">!</span>
                  <span class="abate">失效商品</span>
                </div>
              </div>
            </div>
          </section>
    </div>
    <section class="sum clearfix">
      <div class="icon">
        <div @touchend="productAllChecked" class="check_all_icon">
          <span  :class="{ 'check': didAllChecked(), 'uncheck' :!didAllChecked() }" ></span>
        </div>
        <span class="check-all">全选</span>
      </div>
      <div class="sum-right" v-if="edit">
        <div class="sum-info">
          <span class="sum-text">合计：</span>
          <span class="sum-money">{{orderSumPrice}}</span>
        </div>
        <div class="sum_button" :class="{'sum_button--grey': !haveChecked}">
          结算({{shopingCarCnt}})
        </div>
      </div>
      <div class="sum-right " v-else @click="showDeleteDialog">
        <div class="sum_button sum_button--red" :class="{'sum_button--grey': !haveChecked}">
          删除({{shopingCarCnt}})
        </div>
      </div>
    </section>
    </div>
    <div class="mask">

    </div>
    <div class="product_count_dialog">
            <div class="modify_container">
              <span class="decrease" @click="modifyDecr"><img src="./decrease.svg"></span>
              <input type="number" class="modify_input" name="productCount" value="count" v-model.number="modifyDialog.num">
              <span class="increase" @click="modifyIncr"><img src="./increase.svg"></span>
            </div>
            <div class="modify_button">
              <div class="modify_button_cancel" @click="modifyCancel">取消</div>
              <div class="modify_button_confirm" @click="modifyConfirm">确定</div>
            </div>
    </div>
    <div class="delete_cart_dialog">
        <div class="modify_container">
            <span>是否删除</span>
          </div>
          <div class="modify_button">
            <div class="modify_button_cancel" @click="hideDeleteDialog">取消</div>
            <div class="modify_button_confirm" @click="delShoppingCar">确定</div>
          </div>
    </div>
  </div>
</template>
<script>
const core = require('mathjs/core')
const math = core.create()
// const Cookie = require('js-cookie')
math.import(require('mathjs/lib/function/arithmetic/add'))
math.import(require('mathjs/lib/function/arithmetic/subtract'))
math.import(require('mathjs/lib/function/arithmetic/multiply'))
math.import(require('mathjs/lib/function/arithmetic/divide'))
import { Toast } from 'mint-ui'
import { getListShoppingCar, updateShoppingCarSelected, updateShoppingCarProductCount, delFromShoppingCar } from '@/config/req'
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'shoppingTrolley',
  data () {
    return {
      msg: 'Welcome to profile !',
      id: 3,
      hide: false,
      content: [],
      unChecked: true,
      edit: true,
      editText: '编辑',
      productCheckOnoff: true,
      modifyDialog: {}
    }
  },
  created () {
    console.log('shlogin', this.login)
    if (!this.login) {
      this.$router.push({ path: 'login' })
    } else {
      console.log('login create', this.login)
      console.log('login create', this.accountId)
      console.log('login create', this.token)
      getListShoppingCar(this.$store.state, {'accountId': this.accountId, 'cityId': 6401})
      .then(data => {
        let dat = data.data.response
        dat.content.forEach(function (item, index) {
          item.result.forEach(function (product, index) {
            product.willDele = false
          })
        })
        this.content = dat
      })
    }
  },
  computed: {
    ...mapState([
      'login',
      'accountId',
      'token'
    ]),
    didContent: function () {
      if (this.content.content === undefined) {
        return []
      } else {
        if (this.productCheckOnoff) {
          this.productCheckOnoff = false
          this.content.content.forEach(function (item, index) {
            item.result.forEach(function (product, index) {
              product.willDele = false
            })
          })
          return this.content.content
        } else {
          return this.content.content
        }
      }
    },
    haveChecked: function () {
      if (this.content.content === undefined) {
        return false
      } else {
        if (this.edit) {
          return this.content.content.some(function (item) {
            return item.result.some(function (product) {
              return product.isSelected > 0
            })
          })
        } else {
          return this.content.content.some(function (item) {
            return item.result.some(function (product) {
              return product.willDele === true
            })
          })
        }
      }
    },
    shopingCarCnt: function () {
      let sum = 0
      if (this.edit) {
        if (this.content.content === undefined) {
          return 0
        } else {
          this.content.content.forEach(function (item, index) {
            item.result.forEach(function (product, index) {
              if (parseInt(product.isSelected)) {
                sum++
              }
            })
          })
        }
        return sum
      } else {
        if (this.content.content === undefined) {
          return 0
        } else {
          this.content.content.forEach(function (item, index) {
            item.result.forEach(function (product, index) {
              if (product.willDele) {
                sum++
              }
            })
          })
        }
        return sum
      }
    },
    orderSumPrice: function () {
      let sum = 0
      if (this.content.content === undefined) {
        return 0
      } else {
        this.content.content.forEach(function (item, index) {
          item.result.forEach(function (product, index) {
            if (parseInt(product.isSelected)) {
              sum = math.add(math.multiply(product.lastestUnitPrice, product.productCount).toFixed(3), sum)
            }
          })
        })
      }
      return sum.toFixed(3)
    },
    getEditText: function () {
      return this.edit ? '编辑' : '完成'
    },
    unproduct: function () {
      console.log('unpro', this.content.shopingCarCnt === 0)
      if (this.content.shopingCarCnt === 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    ...mapMutations([
      'HOME_ACTIVE',
      'HIDE_MENU',
      'ACCOUNT_LOGIN'
    ]),
    ...mapActions([
      'setAccountLogin'
    ]),
    toggle () {
      this.content.content.forEach(function (item, index) {
        item.result.forEach(function (product, index) {
          product.willDele = false
        })
      })
      this.edit = !this.edit
    },
    formatFloat (f, digit) {
      let m = Math.pow(10, digit)
      return parseInt(f * m, 10) / m
    },
    contentAble (value) {
      let list = []
      if (value === undefined) {
        return []
      } else {
        value.forEach(function (item, index) {
          if (item.isDisabled === 0) {
            list.push(item)
          }
        })
      }
      return list
    },
    contentUnabled (value) {
      let list = []
      if (value === undefined) {
        return []
      } else {
        value.forEach(function (item, index) {
          if (item.isDisabled === 1) {
            list.push(item)
          }
        })
      }
      return list
    },
    productChecked ({ id, isSelected, key, willDele, disabled }) {
      if (this.edit) {
        if (disabled) {
          return false
        } else {
          let list = []
          let selected = isSelected ? 0 : 1
          list.push({id, isSelected: selected})
          updateShoppingCarSelected({'list': list}, this.$store.state)
          this.content.content.forEach(function (item, index) {
            item.result.forEach(function (product, index) {
              if (parseInt(product.id) === parseInt(id)) {
                product.isSelected = isSelected ? 0 : 1
              }
            })
          })
        }
      } else {
        this.content.content.forEach(function (item, index) {
          item.result.forEach(function (product, index) {
            if (parseInt(product.id) === parseInt(id)) {
              product.willDele = !willDele
            }
          })
        })
      }
    },
    ToProductDetail (id) {
      window.location.href = 'http://mtest.epfresh.com/common/product.html?#' + id + '&6401'
    },
    productState ({ isSelected, willDele }) {
      if (this.edit) {
        return isSelected
      } else {
        return willDele
      }
    },
    marketIsChecked: function (index) {
      let market = this.content.content[index].result
      if (this.edit) {
        return market.every(function (item) {
          return item.isSelected > 0
        })
      } else {
        return market.every(function (item) {
          return item.willDele === true
        })
      }
    },
    marketChecked (index) {
      let market = this.content.content[index].result
      if (this.edit) {
        if (this.marketIsChecked(index) > 0) {
          market.forEach(function (product, index) {
            product.isSelected = 0
          })
        } else {
          market.forEach(function (product, index) {
            product.isSelected = 1
          })
        }
      } else {
        if (this.marketIsChecked(index)) {
          market.forEach(function (product, index) {
            product.willDele = false
          })
        } else {
          market.forEach(function (product, index) {
            product.willDele = true
          })
        }
      }
    },
    didAllChecked () {
      if (this.edit) {
        return this.contentAble(this.content.content).every(function (item) {
          return item.result.every(function (product) {
            return product.isSelected > 0
          })
        })
      } else {
        return this.content.content.every(function (item) {
          return item.result.every(function (product) {
            return product.willDele === true
          })
        })
      }
    },
    productAllChecked () {
      if (this.edit) {
        if (this.didAllChecked()) {
          let list = []
          this.unChecked = false
          this.content.content.filter(function (result) {
            return result.isDisabled === 0
          }).forEach(function (item, index) {
            item.result.forEach(function (product, index) {
              product.isSelected = 0
              list.push({id: product.id, isSelected: 0})
            })
          })
          updateShoppingCarSelected({'list': list}, this.$store.state)
        } else {
          let list = []
          this.unChecked = true
          this.content.content.filter(function (result) {
            return result.isDisabled === 0
          }).forEach(function (item, index) {
            item.result.forEach(function (product, index) {
              product.isSelected = 1
              list.push({id: product.id, isSelected: 1})
            })
          })
          updateShoppingCarSelected({'list': list}, this.$store.state)
        }
      } else {
        if (this.didAllChecked()) {
          this.content.content.forEach(function (item, index) {
            item.result.forEach(function (product, index) {
              product.willDele = false
            })
          })
        } else {
          this.content.content.forEach(function (item, index) {
            item.result.forEach(function (product, index) {
              product.willDele = true
            })
          })
        }
      }
    },
    decr ({ pindex, cindex, inc, min, id, num }) {
      let count = this.content.content[pindex].result[cindex].productCount
      if (count <= min) {
        this.showToast()
      } else {
        this.content.content[pindex].result[cindex].productCount = count - parseInt(inc)
        updateShoppingCarProductCount({'id': id, 'productCount': this.content.content[pindex].result[cindex].productCount}, this.$store.state)
      }
    },
    incr ({ pindex, cindex, inc, id, num }) {
      this.content.content[pindex].result[cindex].productCount = parseFloat(parseFloat(this.content.content[pindex].result[cindex].productCount + inc).toFixed(1))
      updateShoppingCarProductCount({'id': id, 'productCount': this.content.content[pindex].result[cindex].productCount}, this.$store.state)
    },
    countClick ({ pindex, cindex, inc, id, num }) {
      this.modifyDialog = Object.assign({pindex, cindex, inc, id, num})
      document.querySelector('.mask').style.display = 'block'
      document.querySelector('.product_count_dialog').style.display = 'block'
    },
    modifyDecr () {
      let count = this.modifyDialog
      count.num = count.num - parseInt(count.inc)
      this.modifyDialog = count
    },
    modifyIncr () {
      let count = this.modifyDialog
      count.num = count.num + parseInt(count.inc)
      this.modifyDialog = count
    },
    modifyCancel () {
      document.querySelector('.mask').style.display = 'none'
      document.querySelector('.product_count_dialog').style.display = 'none'
    },
    modifyConfirm () {
      let pindex = this.modifyDialog.pindex
      let cindex = this.modifyDialog.cindex
      let id = this.modifyDialog.id
      this.content.content[pindex].result[cindex].productCount = this.modifyDialog.num
      updateShoppingCarProductCount({'id': id, 'productCount': this.content.content[pindex].result[cindex].productCount}, this.$store.state)
      this.modifyCancel()
    },
    showToast () {
      Toast({
        message: '不能超过最小起订量',
        duration: '1000'
      })
    },
    fetchData () {
      getListShoppingCar(this.$store.state, {'accountId': this.accountId, 'cityId': 6401})
      .then(data => {
        let dat = data.data.response
        dat.content.forEach(function (item, index) {
          item.result.forEach(function (product, index) {
            product.willDele = false
          })
        })
        this.content = dat
      })
    },
    showDeleteDialog () {
      document.querySelector('.mask').style.display = 'block'
      document.querySelector('.delete_cart_dialog').style.display = 'block'
    },
    hideDeleteDialog () {
      document.querySelector('.mask').style.display = 'none'
      document.querySelector('.delete_cart_dialog').style.display = 'none'
    },
    delShoppingCar () {
      let ids = []
      this.content.content.forEach(function (item, index) {
        item.result.forEach(function (product, index) {
          if (product.willDele) {
            ids.push(product.id + '')
          }
        })
      })
      this.hideDeleteDialog()
      delFromShoppingCar({'ids': ids, 'cityId': '6401', 'accountId': this.accountId}, this.$store.state)
    }
  },
  mounted () {
    console.log('store.login', this.login)
    console.log('store.token', this.token)
    console.log('store.accountId', this.accountId)
    this.HOME_ACTIVE({ id: this.id })
    this.HIDE_MENU({ hidemenu: this.hide })
    document.getElementsByTagName('body')[0].style.backgroundColor = '#efefef'
    console.log(document.documentElement.clientHeight)
    document.querySelector('.mask').style.height = document.documentElement.clientHeight + 'px'
  },
  components: {
  }
}
</script>

