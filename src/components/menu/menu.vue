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
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  data () {
    return {
      index: 0,
      width: 0,
      menus: []
    }
  },
  props: {
    detail: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      required: true
    }
  },
  ready () {
    this.width = document.documentElement.getBoundingClientRect().width
  },
  computed: {
    didMenus: function () {
      return this.$lodash.chunk(this.list, 4)
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
}
</script>
