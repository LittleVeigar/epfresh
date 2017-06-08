<style scoped>
@import 'slide.css';
.slide {
  position: relative;
  width: 16rem;
  height: 6rem;
  overflow: hidden;
}

.slide .slide-detail{
    height: 16rem;
  }
.slide .slide__inner{
    position: relative;
    width: 16rem;
    height: 100%;
  }
.slide__inner .slide__inner--img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
.slide__inner img{
      width: 100%;
    }
.slide .slide__indicator{
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
.slide__indicator span{
      display: inline-block;
      width: 5px;
      height: 5px;
      margin-right: 5px;
      border-radius: 50%;
      background-color: #eee;
    }
.slide__indicator span.current{
        background-color: #4c9;
      }
.slide .slide__inner{
    transition: transform .5s linear;
  }
</style>
<template>
<section class="slide" :class="{'slide-detail':detail}">
  <ul class="slide__inner" @touchstart.prevent="start" @touchmove.prevent="move" @touchend.prevent="end" :style="{transform:'translate3d('+position+'px,0,0)'}">
    <li v-for="its in list" class="slide__inner--img" :style="{left : $index * width + 'px'}">
      <a :href="its.link">
        <img :src="its.img">
      </a>
    </li>
  </ul>
  <div class="slide__indicator">
    <span v-for="its in list" :class="{'current':$index===index}"></span>
  </div>
</section>
</template>
<script>
export default {
  data () {
    return {
      index: 0,
      width: 0,
      position: 0,
      tmp: 0,
      xy: 0,
      zz: 0
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
  ready () {
    this.width = document.documentElement.getBoundingClientRect().width
  },
  methods: {
    start (e) {
      this.xy = e.touches[0].clientX
    },
    move (e) {
      this.zz = e.touches[0].clientX - this.xy
      this.position = this.zz + this.tmp
    },
    end (e) {
      if (this.zz < -100) {
        if (this.index < this.list.length - 1) {
          this.index++
        }
      } else if (this.zz > 100) {
        if (this.index > 0) {
          this.index--
        }
      }
      this.tmp = this.position = -this.index * this.width
    }
  }
}
</script>
