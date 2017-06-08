<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '_flex.scss';
h1, h2 {
  font-weight: normal;
}
.search {
  background: #efefef;
}
.search_header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  -moz-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  height: 40px;
  border-bottom: solid 1px #efefef;
  background: #FFDA44;
  font-size: 14px;
}
.go_icon {
  min-width: 40px;
}
.grey-arrow {
  display: inline-block;
  -webkit-transform:translate3d(0,0,0) rotate(180deg);
  transform:translate3d(0,0,0) rotate(180deg);
  width: 20px;
  height: 20px;
}
.search_body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  -moz-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  -webkit-box-flex: 2;
  -webkit-flex-grow: 2;
  -moz-flex-grow: 2;
  -ms-flex-positive: 2;
  flex-grow: 2;
  height: 30px;
  border-radius: 2px;
  background:#efefef;
}
.search-icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin: 0 5px;
      background-image: url("./search_icon.svg");
      background-size: cover;
    }
    .search_input {
      @include flex-grow(2);
      border-bottom-width:0px;
      border-left-width:0px;
      border-top-width:0px;
      border-right-width:0px;
      font-size: 12px;
      color: #AFAFAF;
      background: #efefef;
    }
    .search_input:focus {
      outline: none;
    }
    .search_button {
      min-width: 40px;
    }
    .hot_search {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      font-size: 12px;
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
      background: #fff;
      .search_item {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        margin-left: 10px;
        border-radius: 8px;
        background: #efefef;
      }
    }
    .search_history {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      -webkit-justify-content: space-between;
      -moz-justify-content: space-between;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      height: 35px;
      margin-top: 10px;
      padding: 0 15px;
      border-bottom: solid 1px #efefef;
      font-size: 14px;
      background: #fff;
      .dustbins {
        width: 24px;
        height: 24px;
      }
    }
    .search_history_list {
      padding: 0 15px;
      box-sizing: border-box;
      background: #fff;
    }
    .history_item {
      height: 30px;
      line-height: 30px;
      background: #fff;
      font-size: 14px;
      text-align: left;
      border-bottom: solid 1px #efefef;
    }
    .good-item {
      background: #fff;
      display: inline-block;
      float: left;
      width: 48%;
      margin:5px 1% 0 1%;
      padding: 5px;
      box-sizing: border-box;
      font-size: 12px;
    }
    .good-img {
      width: 100%;
      min-height: 180px;
      object-fit:cover;
    }
    .good-name {
      display: -webkit-box;
      height: 30px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-align: left;
    }
    .good-price {
      position: relative;
      text-align: left;
      margin-top:5px;
      height: 22px;
    }
    .price-left {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      -webkit-justify-content: flex-start;
      -moz-justify-content: flex-start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      height: 22px;
      color: #F13131;
      font-size: 14px;
    }
    .price-right {
      color: #F13131;
      font-size: 10px;
    }
    .view-similar {
      position: absolute;
      right: 0;
      top: 0;
      display: inline-block;
      border:solid 1px #efefef;
      padding: 2px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
    }
    .rmb-icon {
      display: inline-block;
      -webkit-transform:translate3d(0,0,0) ;
      transform:translate3d(0,0,0);
      width: 10px;
      height: 10px;
    }
    .dispn {
      display: none;
    }
    .top-line {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      -webkit-justify-content: flex-start;
      -moz-justify-content: flex-start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      height: 40px;
      padding: 0 8px;
      background: #fff;
    }
    .top-line-img {
      width: 40px;
      height: 40px;
    }
    .top-title {
      min-width: 50px;
    }
    .top-title span {
      display: inline-block;
      padding:0 5px;
      font-size: 12px;
      border-radius: 2px;
      border:solid 2px #D91E29;
      color: #D91E29;
    }
    .top-text {
      font-size: 14px;
      -webkit-box-flex: 2;
      -webkit-flex-grow: 2;
      -moz-flex-grow: 2;
      -ms-flex-positive: 2;
      flex-grow: 2;
    }
    .headline-news,
    .hot-news {
      width: 100%;
      height: 20px;
      overflow: hidden;
    }
    .headline-news ul li,
    .hot-news ul li {
      height: 20px;
      width: 250px;
      overflow: hidden;
      display: inline-block;
      white-space: nowrap;
    }
    .headline-news ul,
    .hot-news ul {
      height: 20px;
      -webkit-transform: translateX(-250px);
      white-space: nowrap;
      overflow: hidden;
    }
    ul {
      list-style:none;
      margin: 0;
      padding: 0;
      -webkit-margin-before: 0;
      -webkit-padding-start: 0;
    }
</style>
<template>
  <div class="search">
      <div class="search_header dispn ">
        <router-link to="/home">
          <div class="go_icon">
            <img class="grey-arrow" src="./scan.png">
          </div>
        </router-link>
      <div class="search_body">
        <label  class="search-icon" for="search"></label>
        <input class="search_input"  name="search" v-model.trim="searchText" v-on:keyup.enter="Search" v-on:keyup="searchChange()"  autofocus placeholder="优衣库">
      </div>
      <div class="search_button" >
        <img class="grey-arrow" src="./classify.png">
      </div>
    </div>
    <div class=" top-line ">
      <div>
        <img class="top-line-img" src="./classify.png">
      </div>
      <div class="top-title">
        <span>热议</span>
        <span>头条</span>
      </div>
      <div class="top-text">
        <div class="headline-news">
          <ul>
            <li>1欢迎毕业生加入校友会，也希望师兄师姐在招聘栏目中提供的招聘信息，实名添加，望大家合作愉快！</li>
            <li>2欢迎毕业生加入校友会，也希望师兄师姐在招聘栏目中提供的招聘信息，实名添加，望大家合作愉快！</li>
            <li>3欢迎毕业生加入校友会，也希望师兄师姐在招聘栏目中提供的招聘信息，实名添加，望大家合作愉快！</li>
          </ul>
        </div>
        <div class="hot-news">
          <ul>
            <li>欢迎毕业生加入校友会，也希望师兄师姐在招聘栏目中提供的招聘信息，实名添加，望大家合作愉快！</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="good-list">
        <div class="good-item">
          <div>
            <img class="good-img" src="http://7xpf2j.com2.z0.glb.qiniucdn.com/2017%2F3%2F15%2F857d434e04174ceeaa4ef6433e6941b6.jpg-PRODUCTTHUMBNAIL">
          </div>
          <div class="good-name">
            牛胸肉-西门塔尔-优等品-臻回味-宁夏-1公斤/袋牛胸肉-西门塔尔-优等品-臻回味-宁夏-1公斤/袋
          </div>
          <div class="good-price">
            <span class="price-left">
              <img class="rmb-icon" src="./rmb.png">
              98
              <span class="price-right">.00</span>
            </span>
            <span class="view-similar">看相似</span>
          </div>
        </div>
        <div class="good-item">
          <div>
            <img class="good-img" src="http://7xpf2j.com2.z0.glb.qiniucdn.com/2017%2F3%2F15%2F857d434e04174ceeaa4ef6433e6941b6.jpg-PRODUCTTHUMBNAIL">
          </div>
          <div class="good-name">
            牛胸肉-西门塔尔-优等品-臻回味-宁夏-1公斤/袋牛胸肉-西门塔尔-优等品-臻回味-宁夏-1公斤/袋
          </div>
          <div class="good-price">
            <span class="price-left">
              <img class="rmb-icon" src="./rmb.png">
              98
              <span class="price-right">.00</span>
            </span>
            <span class="view-similar">看相似</span>
          </div>
        </div>
        <div class="good-item">
          <div>
            <img class="good-img" src="http://7xpf2j.com2.z0.glb.qiniucdn.com/2017%2F3%2F15%2F857d434e04174ceeaa4ef6433e6941b6.jpg-PRODUCTTHUMBNAIL">
          </div>
          <div class="good-name">
            牛胸肉-西门塔尔-优等品-臻回味-宁夏-1公斤/袋牛胸肉-西门塔尔-优等品-臻回味-宁夏-1公斤/袋
          </div>
          <div class="good-price">
            <span class="price-left">
              <img class="rmb-icon" src="./rmb.png">
              98
              <span class="price-right">.00</span>
            </span>
            <span class="view-similar">看相似</span>
          </div>
        </div>
        <div class="good-item">
          <div>
            <img class="good-img" src="http://7xpf2j.com2.z0.glb.qiniucdn.com/2017%2F3%2F15%2F857d434e04174ceeaa4ef6433e6941b6.jpg-PRODUCTTHUMBNAIL">
          </div>
          <div class="good-name">
            牛胸肉-西门塔尔-优等品-臻回味-宁夏-1公斤/袋牛胸肉-西门塔尔-优等品-臻回味-宁夏-1公斤/袋
          </div>
          <div class="good-price">
            <span class="price-left">
              <img class="rmb-icon" src="./rmb.png">
              98
              <span class="price-right">.00</span>
            </span>
            <span class="view-similar">看相似</span>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { InfiniteScroll, Tabbar, TabItem } from 'mint-ui'
import Slide from '@/components/slide/index'
import Vue from 'vue'
Vue.use(Slide)
export default {
  name: 'Order',
  data () {
    return {
      msg: 'Welcome to Order !',
      hotItems: [],
      historyList: [ ],
      searchText: '',
      hide: true
    }
  },
  created () {
  },
  methods: {
    ...mapMutations([
      'HIDE_MENU'
    ]),
    searchChange () {
    },
    Search () {
    }
  },
  components: {
    InfiniteScroll,
    Tabbar,
    TabItem
  },
  computed () {
  },
  mounted () {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#F2F2F2'
  }
}
</script>
