<style scoped lang="scss">
.navbar {
  position: relative;
}
ul {
  font-size: 0;
  position: relative;
  padding: 0;
  user-select: none;
  text-align: left;
  margin: 0 15px;
}
li {
  display: inline-block;
  height: 40px;
  margin: 0 10px;
  background: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  color: #626262;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color:transparent;
}
.active--cyan {
  color:#009983;
}
.slider {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #009983;
  transition: all 0.5s;
}
.ripple {
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  position: absolute;
  opacity: 1;
}

.rippleEffect {
  -webkit-animation: rippleDrop .4s linear;
  animation: rippleDrop .4s linear;
}
.more_icon {
  position: absolute;
  width: 8px;
  top: 50%;
  margin-top: -7px;
  right: 15px;
  transform: rotate(90deg);
}
@-webkit-keyframes
  rippleDrop {  100% {
   -webkit-transform: scale(2);
   transform: scale(2);
   opacity: 0;
  }
}
@keyframes
  rippleDrop {  100% {
   -webkit-transform: scale(2);
   transform: scale(2);
   opacity: 0;
  }
}
.markets {
  position: absolute;
  display: none;
  width: 100%;
  top: 40px;
  padding: 10px 0;
  z-index: 3;
  border-top: solid 1px #efefef;
  background: #fff;
  text-align: left;
  .market_item {
    display: inline-block;
    float: left;
    height: 40px;
    line-height: 40px;
    width: 30%;
    margin: 5px 1.4%;
    box-sizing: border-box;
    border:solid 1px #efefef;
    border-radius: 5px;
    font-size: 14px;
    color: #626262;
    text-align: center;
  }
  .active--green {
    color:#4EB659;
    border:solid 1px #4EB659;
  }
}
.dispb {
  display: block;
}
</style>
<template>
<section class="navbar">
  <div class="markets" :class="[showMarket?'dispb':'']">
      <router-link class="market_item" v-for="(item,index) in marketList"   :to="'/home/'+index+'/marketdetail'" :class="{'active--green':initIndex==(index+1)}" >
        <span  :data-index="index+1" @click="selectMarket" >{{item.shortName}}</span>
      </router-link>
  </div>
  <ul class="ul">
    <router-link to="/home/id">
      <li data-index="0" @click="gainIndex" :class="{'active--cyan':initIndex==0}">推荐</li>
    </router-link>
    <router-link v-for="(item,index) in marketList"   :to="'/home/'+index+'/marketdetail'">
      <li :data-index="index+1" @click="gainIndex" :class="{'active--cyan':initIndex==(index+1)}">{{item.shortName}}</li>
    </router-link>
    <li class="slider"></li>
  </ul>
  <img class="more_icon" @click = 'showMarkets' src="../../assets/images/more_icon.png">
</section>
</template>
<script>
export default {
  data () {
    return {
      initIndex: 0,
      width: 0,
      screenWidth: 0
    }
  },
  props: {
    marketList: {
      type: Array,
      required: true
    },
    showMarket: {
      type: Boolean,
      required: true
    }
  },
  created () {

  },
  computed: {
    computeIndex: function (key) {
      return key === this.initIndex
    }
  },
  methods: {
    gainIndex () {
      this.screenWidth = screen.width
      let index = event.currentTarget.getAttribute('data-index')
      this.initIndex = index
      document.querySelector('.slider').style.transform = 'translateX(' + (document.querySelectorAll('li')[index].offsetLeft - 10) + 'px)'
      document.querySelector('.slider').style.width = document.querySelectorAll('li')[index].offsetWidth + 'px'
    },
    showMarkets () {
      this.$emit('showMarkets')
    },
    selectMarket () {
      this.gainIndex()
      this.showMarkets()
    }
  },
  mounted () {
    document.querySelector('.slider').style.width = document.querySelectorAll('li')[0].offsetWidth + 'px'
  }
}
</script>
