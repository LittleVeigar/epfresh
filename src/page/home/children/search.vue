<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../_flex.scss';
h1, h2 {
  font-weight: normal;
}
.search {
  background: #efefef;
}
.search_header {
  @include flexbox();
  @include justify-content(flex-start);
  @include align-items(center);
  height: 40px;
  border-bottom: solid 1px #efefef;
  background: #fff;
  font-size: 14px;
}
.go_icon {
  min-width: 40px;
}
.grey-arrow {
  display: inline-block;
  transform:translate3d(0,0,0) rotate(180deg);
  width: 8px;
  height: 16px;
}
.search_body {
  @include flexbox();
  @include justify-content(flex-start);
  @include align-items(center);
  @include flex-grow(2);
  height: 30px;
  border-radius: 2px;
  background:#efefef;
}
.search-icon {
      display: inline-block;
      width: 24px;
      height: 24px;
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
      @include flexbox();
      @include justify-content(space-between);
      @include align-items(center);
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
</style>
<template>
  <div class="search">
      <div class="search_header">
        <router-link to="/home">
          <div class="go_icon">
            <img class="grey-arrow" src="./grey_arrow.png">
          </div>
        </router-link>
      <div class="search_body">
        <label  class="search-icon" for="search"></label>
        <input class="search_input"  name="search" v-model.trim="searchText" v-on:keyup.enter="Search" v-on:keyup="searchChange()"  autofocus placeholder="请输入商品名称">
      </div>
      <div class="search_button" @click="Search"  >
        搜索
      </div>
    </div>
    <div class="hot_search">
      <span class="hot_search_title">热搜</span>
      <span class="search_item" v-for="item in hotItems">{{item }}</span>
    </div>
    <div class="search_history">
      <span>历史搜索</span>
      <img class="dustbins" src="./dustbins.svg" @click="Clear">
    </div>
    <div class="search_history_list">
      <div class="history_item" v-for="item in historyList">{{item}}</div>
    </div>
  </div>
</template>

<script>
/*
  import { setStore, getStore, removeStore, clearStore, traverseStore } from '@/config/utils'
 */
import { setStore, traverseStore, clearStore, getStore } from '@/config/utils'
import { mapMutations } from 'vuex'
import { getSearchHot } from '@/config/req'
import { Toast, Indicator, InfiniteScroll, Tabbar, TabItem } from 'mint-ui'
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
    getSearchHot()
    .then(data => {
      let dat = data.data.response
      this.hotItems = dat
    })
  },
  methods: {
    ...mapMutations([
      'HIDE_MENU'
    ]),
    showToast () {
      Toast('这是一个Toast！')
    },
    searchChange () {
      console.log(this.searchText)
    },
    Search () {
      console.log('search', this.searchText)
      console.log(this.historyList instanceof Array)
      this.historyList.push(this.searchText)
      setStore('historyList', this.historyList)
      console.log(traverseStore())
    },
    Clear () {
      clearStore()
      this.historyList = []
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
  components: {
    InfiniteScroll,
    Tabbar,
    TabItem
  },
  computed () {
  },
  mounted () {
    this.historyList = JSON.parse(getStore('historyList'))
    this.HIDE_MENU({ hidemenu: this.hide })
  }
}
</script>
