<template>
<div class="select">
    <div class="select_area">
      <router-link class="head_goback"  to="/home">
        <img class="grey-arrow" src="../../../assets/images/grey-arrow.png">
      </router-link >
      <div class="select_title">选择区域-{{city}}</div>
    </div>
    <div class="select_address">
      收货地址
    </div>
    <div v-for="(addr, index) in address" class="select_address_detail">
      {{addr.address}}
    </div>
    <div class="location">
      <div class="location_title">
        当前定位城市
      </div>
      <div class="location_city">
        <span class="city_text">
          {{city}}
        </span>
      </div>
    </div>
    <div class="open_area clearfix">
        <div class="open_title">已开通区域</div>
          <div class="open_list" >
            <span v-for="(city,index) in citys"  class="open_list_city " v-bind:key="index" :class="{'open_list_city--green':computeSelectCity==index}" @click="chooseCity(index)">
              {{city.name}}
            </span>
          </div>
      </div>
</div>

</template>

<script >
  import { getOpenCityAndMerAddress } from '@/config/req'
  import { mapMutations } from 'vuex'
  import BMap from 'BMap'
  export default {
    data () {
      return {
        msg: 'hello world',
        city: '定位中',
        address: '上海市杨浦区邯郸路220号',
        citys: ['上海市', '银川市', '苏州市', '北京市'],
        selectCity: 0,
        hide: true
      }
    },
    created () {
      this.fetchData()
    },
    mounted () {
      this.HIDE_MENU({ hidemenu: this.hide })
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
      let myCity = new BMap.LocalCity()
      myCity.get(myFun)
    },
    methods: {
      ...mapMutations([
        'HIDE_MENU'
      ]),
      chooseCity: function (index) {
        this.selectCity = index
      },
      fetchData () {
        getOpenCityAndMerAddress(this.$store.state, {'version': 44})
        .then(data => {
          let dat = data.data.response
          this.citys = dat.city.cityList
          this.address = dat.deliveryAddress
          console.log('dat', dat)
        })
      }
    },
    computed: {
      computeSelectCity: function () {
        return this.selectCity
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../_flex.scss';
.clearfix:after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}
h1 {
  font-weight: normal;
  color: #ccc;
}
.select {
  box-sizing: border-box;
  color: #434343;
  font-size: 14px;
  background: #efefef;
}
.select_area {
  @include flexbox();
  @include justify-content(flex-start);
  @include align-items(center);
  height: 40px;
  padding: 0 15px;
  border-bottom: solid 1px #efefef;
  background: #fff;
}
.select_title {
  @include flex-grow(2);
}
.select_address {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  text-align: left;
  background: #fff;
}
.grey-arrow {
  display: inline-block;
  transform:translate3d(0,0,0) rotate(180deg);
  width: 8px;
  height: 16px;
}
.select_address_detail {
  padding: 0 15px;
  border-top: solid 1px #efefef;
  background:#fff;
  text-align: left;
  font-size: 12px;
}
.location {
  margin-top: 10px;
  text-align: left;
  background: #fff;
  .location_title {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }
  .location_city {
    position: relative;
    height: 50px;
    border-top: solid 1px #efefef;
    padding: 0 15px;
  }
  .location_city::before {
    content: " ";
    display: inline-block;
    height: 100%;
    width: 1%;
    vertical-align: middle;
  }
  .city_text {
    display: inline-block;
    position: relative;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    border: solid 1px #efefef;
    border-radius: 5px;
    color: #FF9C00;
  }
}

.open_area {
  min-height: 200px;
  margin-top: 10px;
  background: #fff;
  text-align: left;
  .open_title {
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    border-bottom: solid 1px #efefef;
  }
  .open_list_city {
    float: left;
    height: 30px;
    width:30%;
    line-height: 30px;
    margin: 5px 0 5px 2.5%;
    border-radius: 5px;
    border: solid 1px #efefef;
    text-align: center;
  }
  .open_list_city--green {
    color: #3EB049;
    border-color: #3EB049;
  }
}
</style>
