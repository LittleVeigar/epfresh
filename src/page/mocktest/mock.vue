<template>
  <div class="search">
        <div id="allmap"></div>
        <div>{{msg}}
        </div>
        <div>{{city}}</div>
        <div id="container">
          <div id="movetarget">
            <ul>
              <li v-for="i in 5">{{msg}}</li>
            </ul>
          </div>
        </div>
        <div id="r-result"></div>
        <form method="post" accept="upload/img" enctype="multipart/form-data">
          <div class="field required">
            <label>头像</label>
            <input type="file" name="">
            <input type="image" name="avatar">
          </div>
           <input type="submit" class="ui button fluid" value="提交表单">
        </form>
        <canvas id="canvas"></canvas>
  </div>
</template>

<script>
  import Vue from 'vue'
  import data from '@/utils/mock'
  import { getMock } from '@/config/req'
  import BMap from 'BMap'
  export default {
    name: 'Order',
    data () {
      return {
        msg: 'Welcome to Order !',
        data: data,
        city: ''
      }
    },
    mounted () {
      getMock().then(data => {
        console.log(data)
      })
            // 百度地图API功能
      let _this = this
      let map = new BMap.Map('allmap')
      let point = new BMap.Point(116.331398, 39.897445)
      map.centerAndZoom(point, 12)
      function myFun (result) {
        let cityName = result.name
        map.setCenter(cityName)
        _this.city = cityName
        console.log(result.center.lat)
      }
      var opts = {type: 'BMAP_NAVIGATION_CONTROL_SMALL', enableGeolocation: true}
      map.addControl(new BMap.NavigationControl(opts))
      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl()
      let locat = {}
      geolocationControl.addEventListener('locationSuccess', function (e) {
        // 定位成功事件
        var address = ''
        address += e.addressComponent.province
        address += e.addressComponent.city
        address += e.addressComponent.district
        address += e.addressComponent.street
        address += e.addressComponent.streetNumber
        console.log(e)
        locat.lng = e.point.lng + 0.01
        locat.lat = e.point.lat + 0.01
        console.log('当前定位地址为：' + address)
      })
      geolocationControl.addEventListener('locationError', function (e) {
        // 定位失败事件
        alert(e.message)
      })
      map.addControl(geolocationControl)
      let myCity = new BMap.LocalCity()
      myCity.get(myFun)
      map.centerAndZoom(locat, 12)
      var myKeys = ['上海', '黄浦江']
      var local = new BMap.LocalSearch('上海', {
        renderOptions: {map: '上海', panel: 'r-result'},
        pageCapacity: 5
      })
      local.searchInBounds(myKeys, map.getBounds())
    }
  }
let movetarget = document.getElementById('movetarget')
new Vue({
    el: '#container',
    created: function () {
    },
    data: {
      // 初始化设置
      options: {
        touch: '#container', // 反馈触摸的dom
        vertical: true, // 不必需，默认是true代表监听竖直方向touch
        target: movetarget, // 运动的对象
        property: 'translateY',  // 被滚动的属性
        sensitivity: 1, // 不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1, // 不必需,默认值是1代表touch区域的1px的对应target.y的1
        step: 40
      },
      // 动态设置属性
      min: window.innerHeight - 45 - 48 - 2000, // 不必需,滚动属性的最小值
      max: 0 // 不必需,滚动属性的最大值
    },
    methods: {
      // 回调函数
      onAnimationEnd () {
        console.log('onAnimationEnd')
      },
      onTouchStart () {
        console.log('start')
      },
      draw () {
        var ctx = document.getElementById('canvas').getContext('2d')
        var lingrad = ctx.createLinearGradient(0, 0, 0, 150)
        lingrad.addColorStop(0, '#00ABEB')
        lingrad.addColorStop(0.5, '#fff')
        lingrad.addColorStop(0.5, '#26C000')
        lingrad.addColorStop(1, '#fff')

        var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95)
        lingrad2.addColorStop(0.5, '#000')
        lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = lingrad
        ctx.strokeStyle = lingrad2
        ctx.fillRect(10, 10, 130, 130)
        ctx.strokeRect(50, 50, 50, 50)
      }
    },
    mounted () {
      this.draw()
    }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
#allmap {
  width: 100%;
  height: 300px;
}
#r-result{width:100%;}
</style>
