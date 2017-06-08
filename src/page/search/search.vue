<template>
  <div class="search">

  </div>
</template>

<script>
import { Toast, Indicator, InfiniteScroll, Tabbar, TabItem } from 'mint-ui'
import Slide from '@/components/slide/index'
import Vue from 'vue'
Vue.use(Slide)
export default {
  name: 'Order',
  data () {
    return {
      msg: 'Welcome to Order !',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
