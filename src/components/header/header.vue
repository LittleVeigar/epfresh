<style lang="scss" scoped>
@mixin flex-grow($int: 0) {
  -webkit-box-flex: $int;
  -webkit-flex-grow: $int;
  -moz-flex-grow: $int;
  -ms-flex-positive: $int;
  flex-grow: $int;
}
  .header {
    display: flex;
    height: 40px;
    justify-content:flex-start;
    align-items:center;
    background-color: #EFEFEF;
    font-size: 16px;
  }
  .city-name {
    display: inline-flex;
    justify-content:center;
    align-items:center;
    margin: 0 8px;
    font-size: 14px;
    i {
      height: 16px;
      width: 16px;
      background-image: url("./triangular.svg");
      background-size: cover;
    }
  }
  .search {
    display: inline-flex;
    @include flex-grow(2);
    margin:0 10px 0 0;
    height: 30px;
    justify-content:flex-start;
    align-items:center;
    border-radius: 2px;
    background-color: #fff;
    color: #ccc;
    font-size: 14px;
    .search-icon {
      width: 24px;
      height: 24px;
      margin: 0 5px;
      background-image: url("./search_icon.svg");
      background-size: cover;
    }
  }
  #allmap {width: 0%;height: 0%;overflow: hidden;margin:0;font-family:"微软雅黑";}
</style>
<template>
<section class="header" >
<router-link to="/beihuan">
  <span class="city-name">
    <span>
      {{city_name}}
    </span>
    <i></i>
  </span>
</router-link>
  <router-link class="search" to="/search">
    <span class="search-icon"></span>
    <span class="search-text">请输入商品名称</span>
  </router-link>
    <div id="allmap"></div>
</section>
</template>
<script>
  import BMap from 'BMap'
  export default {
    data () {
      return {
        city_name: '银川市',
        width: 0
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
    mounted () {
      // 百度地图API功能
      let _this = this
      let map = new BMap.Map('allmap')
      let point = new BMap.Point(116.331398, 39.897445)
      map.centerAndZoom(point, 12)
      function myFun (result) {
        let cityName = result.name
        map.setCenter(cityName)
        _this.city_name = cityName
        console.log(result.center.lat)
      }
      let myCity = new BMap.LocalCity()
      myCity.get(myFun)
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
        if (this.zz < -100) { //  right
          if (this.index < this.list.length - 1) {
            this.index++
          }
        } else if (this.zz > 100) { //  left
          if (this.index > 0) {
            this.index--
          }
        }
        this.tmp = this.position = -this.index * this.width
      }
    }
}
</script>
