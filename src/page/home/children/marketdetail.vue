<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../_flex.scss';
.clearfix:after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}
.select {
  background: #fff;
}
.markets-title {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  font-size: 18px;
  text-align: left;
  background: #F5F5FF;
}

.markets {
  text-align: left;
  background: #fff;
}
.market-area {
  display: inline-block;
  width: 60px;
  white-space:nowrap;
  overflow:hidden;
  margin: 5px 15px;
  font-size: 12px;
}
.distribution_center_title {
  @extend .markets-title;
  @include flexbox();
  @include justify-content(space-between);
  @include align-items(center);
  background: #efefef;
  font-size: 16px;
}
.item_title {
  text-align: left;
  margin: 10px 15px;
  padding:0 5px;
  border-left: solid 4px #3EB049;
  color: #3EB049;
  font-weight: 500;
}
.stores_container {
  @include flexbox();
  @include justify-content(flex-start);
  @include align-items(center);
  @include flex-wrap(wrap);
}
.item_container {
  width: 110px;
  height: 100px;
  margin: 10px 4px;
  border: solid 1px #efefef;
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  .store_img {
    text-align: center;
  }
  .store_img>img {
    margin: 10px;
    width: 60px;
    height: 60px;
    border-radius: 15px;
  }
  .store_name {
    width: 90px;
    margin: 0 auto;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
}
.browse-over {
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  color: #B5B5B5;
  background: #efefef;
}
.browse_button {
  position: fixed;
  bottom: 100px;
  right: -50px;
  transition: right ease-in .2s;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #389E42;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 0 5px 5px #D6D6D6;
  border-radius: 50%;
}
.browse_button--small {
  font-size: 14px;
}
.dipb  {
  transition: right ease-in .2s;
  display: inline-block;
  right: 15px;
  bottom: 100px;
  right: 15px;
}
.market_area_dialog {
  position: fixed;
  bottom: -400px;
  transition: bottom ease .4s;
  background: #ddd;
  margin:0 10px;
  border-radius: 5px;
  .market_dialog_container {
    @include flexbox();
    @include justify-content(flex-start);
    @include align-items(center);
    @include flex-wrap(wrap);
    position: relative;
    top: 15px;
    background: #fff;
  }
  .market-area_dialog {
    margin: 15px 5px;
    width: 70px;
  }
}
.market_area_dialog--toview {
  transition: bottom ease .4s;
  bottom: 150px;
}
</style>
<template>
  <div class="select">
    <div class="markets-title">逛市场</div>
    <div class="markets">
      <a class="market-area"  @click="goAnchor('#area'+index)" v-for="(item,index) in marketarea">{{item.name}}</a>
    </div>
    <div class="distribution_center_title">
      <span>配送中心</span>
      <span>更多></span>
    </div>
    <div class="market_area_detail">
        <div v-for="(item,index) in marketarea" class="area_item" v-bind:key="index">
          <div :id="'area'+index" class="item_title">{{item.name}}</div>
          <div class="stores_container">
              <div v-for="(store,index) in item.stores" class="item_container">
                <div class="store_img"><img :src="store.logoUrl"></div>
                <div class="store_name">{{store.name}}</div>
            </div>
          </div>
        </div>
    </div>
    <div class="market_area_dialog" :class="{'market_area_dialog--toview':browseButtonState}">
        <div class="market_dialog_container">
          <a class="market-area market-area_dialog"  @click="goAnchor('#area'+index)" v-for="(item,index) in marketarea">{{item.name}}</a>
        </div>
    </div>
    <div class="browse-over">
      逛完了
    </div>
    <div class="browse_button" @click="buttonChange" :class="{'browse_button--small':browseButtonState,'dipb':scrolled}">{{didbuttonText}}</div>
  </div>
</template>

<script >
  import { mapMutations } from 'vuex'
  import { getMarketLoad } from '@/config/req'
  export default {
    data () {
      return {
        msg: 'hello world',
        city: '定位中',
        address: '上海市杨浦区邯郸路220号',
        citys: ['上海市', '银川市', '苏州市', '北京市'],
        selectCity: 0,
        hide: false,
        marketarea: '',
        buttonText: '逛',
        browseButtonState: false,
        scrolled: false
      }
    },
    watch: {
    },
    beforeRouteUpdate (to, from, next) {
      console.log('before')
      console.log(to)
      this.fetchData(parseInt(to.params.id) + 1)
      next()
    },
    mounted () {
      this.HIDE_MENU({ hidemenu: this.hide })
      let _this = this
      this.fetchData(1)
      window.addEventListener('scroll', _this.handleScroll)
    },
    methods: {
      ...mapMutations([
        'HIDE_MENU'
      ]),
      chooseCity: function (index) {
        this.selectCity = index
      },
      buttonChange () {
        this.browseButtonState = !this.browseButtonState
      },
      handleScroll () {
        this.scrolled = window.scrollY > 250
        this.browseButtonState = false
      },
      goAnchor (selector) {
        var anchor = this.$el.querySelector(selector)
        document.body.scrollTop = anchor.offsetTop - 120
        this.browseButtonState = false
      },
      fetchData: function (id) {
        getMarketLoad(id)
        .then(data => {
          let dat = data.data.response
          this.marketarea = dat.marketAreas
          console.log('id', id)
          console.log('marketload', dat)
        })
      }
    },
    computed: {
      computeSelectCity: function () {
        return this.selectCity
      },
      didbuttonText: function () {
        return this.browseButtonState ? '收起' : '逛'
      }
    }
  }
</script>
