<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './_flex.scss';
.head_goback {
  float: left;
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -8px;
}
.store_area {
  position: fixed;
  top: 0;
  z-index: 2;
  height: 41px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  border-bottom: solid 1px #efefef;
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
.product-container {
    margin-top: 41px;
}
.product-item {
  @include flexbox;
  @include justify-content(flex-start);
  @include align-items(center);
  height: 120px;
  padding: 0 15px;
  border-bottom: solid 1px #efefef;
  line-height: 24px;
  font-size: 12px;
  text-align: left;
  background-color: #fff;
}
.product-img {
  max-width: 100px;
  min-width: 100px;
  img {
    position: relative;
    display: block;
    top: 50%;
    width: 100%;
  }
}
.product-info {
  margin-left: 10px;
  .product-pack {
    @include flexbox;
    @include justify-content(flex-start);
    @include align-items(center);
  }
  .price {
    font-size: 14px;
    color: red;
  }
  .pack {
    margin-left: 5px;
    font-size: 10px;
    height: 16px;
    line-height: 16px;
    border-radius: 2px;
    background-color: #efefef;
  }
  .level {
    margin-left: 5px;
  }
  .store-icon {
    width: 16px;
  }
  .store-name {
    margin-left: 2px;
  }
  .store-title {
    @include flexbox;
    @include justify-content(flex-start);
    @include align-items(center);
    color: #000;
  }
}
</style>
<template>
  <div class="product-list">
    <div class="store_area">
      <router-link class="head_goback"  to="/home">
        <img class="grey-arrow" :src="greyArrow">
      </router-link >
      <div class="store_title">精品推荐</div>
    </div>
    <div class="product-container">
      <div class="product-item" v-for="item in content" @click="ToProductDetail(item.id)">
          <div class="product-img">
            <img :src="item.thumbnail">
          </div>
          <div class="product-info">
              <div>{{item.species}}</div>
              <div class="product-pack">
                <span class="price">{{item.price}}</span>
                <span class="pack">{{item.pack}}</span>
              </div>
              <div>
                <span class="origin">{{item.origin}}</span>
                <span class="level">{{item.level}}</span>
              </div>
              <div class="store-title">
                <img class="store-icon" src="./store_icon.png">
                <span class="store-name">{{item.storeName}}</span>
              </div>
          </div>
      </div>
    </div>

  </div>
</template>
<script>
import greyArrow from '@/assets/images/grey-arrow.png'
import { Toast, Indicator } from 'mint-ui'
import { getProductList } from '@/config/req'
import { mapMutations } from 'vuex'
export default {
  name: 'Order',
  data () {
    return {
      content: [],
      greyArrow,
      hide: true
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  methods: {
    ...mapMutations([
      'HIDE_MENU'
    ]),
    fetchData () {
      let _this = this
      getProductList()
      .then(function (data) {
        console.log(data.data.response.content)
        _this.content = data.data.response.content
      })
    },
    showToast () {
      Toast('这是一个Toast！')
    },
    ToProductDetail (id) {
      window.location.href = 'http://mtest.epfresh.com/common/product.html?#' + id + '&6401'
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
    Toast,
    Indicator
  },
  mounted () {
    this.HIDE_MENU({ hidemenu: this.hide })
  }
}
</script>
