<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './_flex.scss';
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
  width: 100px;
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
<div>
  <div class="product">
    <Slide :list="list"></Slide>
  </div>

  <div class="product-list">
    <div class="product-item" v-for="item in content">
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
import { Toast, Indicator } from 'mint-ui'
import Slide from '@/components/slide/index'
import Vue from 'vue'
import { getProductList, getProduct } from '@/config/req'
Vue.use(Slide)
export default {
  name: 'Order',
  data () {
    return {
      msg: 'Welcome to Order !',
      content: [],
      index: 0,
      list: [
        {
          img: 'http://7xpf2j.com2.z0.glb.qiniucdn.com/2017%2F3%2F2%2F2e09a72a21354d9f888d4469ecfada0f.jpg-PRODUCTIMAGEDETAILS',
          link: 'www.baidu.com'
        },
        {
          img: 'http://7xpf2j.com2.z0.glb.qiniucdn.com/2017%2F3%2F2%2F2e09a72a21354d9f888d4469ecfada0f.jpg-PRODUCTIMAGEDETAILS',
          link: 'www.baidu.com'
        },
        {
          img: 'http://7xpf2j.com2.z0.glb.qiniucdn.com/2017%2F3%2F2%2F2e09a72a21354d9f888d4469ecfada0f.jpg-PRODUCTIMAGEDETAILS',
          link: 'www.baidu.com'
        }
      ]
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  methods: {
    fetchData () {
      let _this = this
      getProductList()
      .then(function (data) {
        console.log(data.data.response.content)
        _this.content = data.data.response.content
      })
      getProduct()
      .then(function (data) {
        console.log(data.data.response)
      })
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
  components: {
    Toast,
    Indicator
  }
}
</script>
