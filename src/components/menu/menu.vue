<style scoped lang="scss">
@import 'menu.css';
.clearfix:after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}
  ul {
    list-style: none;
    padding:16px 0 30px 0;
    margin: 0;
    li {
      display: inline-block;
      float: left;
      width: 25%;
      -webkit-tap-highlight-color:transparent;
    }
    img {
        height: 35px;
        width: 35px;
    }
    .menu {
      background-color: #fff;
    }
    .menu_text {
      width: 80px;
      transform:translate3d(-50%,0,0);
      -webkit-transform:translate3d(-50%,0,0);
      font-size: 12px;
    }
  }
  .menu__inner {
    height: 85px;
  }
  .mint-swipe {
    height: 85px;
  }
a:focus {
  outline:none;
  color: inherit;
  -moz-outline:none;
}
a:visited,
a:active,
a:link {
    color: inherit;
    text-decoration: none;
}
</style>
<template>
<section class="menu" >
  <mt-swipe :auto="0">
    <mt-swipe-item v-for="item in didMenus">
      <ul lass="menu__inner clearfix">
        <li  v-for="menu in item" class="menu__inner--img clearfix" >
          <router-link to="/order">
            <div>
              <img :src="menu.logoUrl">
            </div>
            <span class="menu_text">{{menu.name}}</span>
          </router-link>
        </li>
      </ul>
    </mt-swipe-item>
  </mt-swipe>
</section>
</template>
<script>
import myOrder from '@/assets/images/myOrder_icon.png'
import preSale from '@/assets/images/pre-sale_icon.png'
import address from '@/assets/images/address_icon.png'
import addDistraputionCenter from '@/assets/images/addDistraputionCenter_icon.png'
import { getDcStores } from '@/config/req'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  data () {
    return {
      index: 0,
      width: 0,
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
      ]
    }
  },
  props: {
    detail: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array
    }
  },
  created () {
    this.fetchData()
  },
  ready () {
    this.width = document.documentElement.getBoundingClientRect().width
  },
  computed: {
    didMenus: function () {
      return this.$lodash.chunk(this.menus, 4)
    }
  },
  methods: {
    fetchData () {
      getDcStores()
      .then(data => {
        console.log(data.data.response)
        let rep = data.data.response
        let menus = this.$lodash(this.menus.slice(0, 3)).concat(rep, this.menus.splice(3))
        this.menus = menus.value()
        console.log(menus.value())
      })
    },
    start (e) {
      this.xy = e.touches[0].clientX
    },
    move (e) {
      this.zz = e.touches[0].clientX - this.xy
      this.position = this.zz + this.tmp
    },
    end (e) {
      if (this.zz < -100) { //  right
        if (this.index < this.list.length - 1) {
          this.index++
        }
      } else if (this.zz > 100) { //  left
        if (this.index > 0) {
          this.index--
        }
      }
      this.tmp = this.position = -this.index * this.width
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
}
</script>
