<template>
  <div class="search">
        <div id="allmap"></div>
        <div>{{msg}}
        </div>
        <div>{{city}}</div>
        <div id="container">
          <div id="movetarget">
            <ul>
              <li v-for="i in 20">{{msg}}</li>
            </ul>
          </div>
        </div>
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
      var myIcon = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif')
      var marker = new BMap.Marker(locat, {icon: myIcon})// 创建标注
      map.addOverlay(marker, 200)             // 将标注添加到地图中
      marker.disableDragging()           // 不可拖拽
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
      }
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
</style>
