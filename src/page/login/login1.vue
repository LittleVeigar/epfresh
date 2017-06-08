<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <mt-button size="small" type="primary">small</mt-button>
    <mt-button size="small" type="primary" @click.native="dicator">small</mt-button>
    <router-link to="/home">to home</router-link>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import { Toast, Indicator, Loadmore } from 'mint-ui'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to login !',
      list: [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    }
  },
  methods: {
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
    loadTop () {
      var that = this
      console.log('loadTop')
      setTimeout(function () {
        that.$refs.loadmore.onTopLoaded()
      }, 1000)
    },
    loadBottom () {
      var that = this
      console.log('loadBottom')
      setTimeout(function () {
        that.$refs.loadmore.onBottomLoaded()
      }, 1000)
    }
  },
  components: {
    Loadmore
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
