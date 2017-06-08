<style lang="less" scoped>
.wrap{
    width:100%;
    background-color:#fff;
}
	.head{
        background:url(../../../assets/images/return.png) no-repeat 1rem center #fff;
	    background-size:0.6rem;
		color:#000;
		font-size:1.3rem;
		line-height:3rem;
		font-weight:normal;
		border-bottom:1px solid #dcdcdc;
	}
	.login-msg {
		width:85%;
		margin:2rem auto;
		text-align: center;
		position:relative;
	}
	.msg {
		width:85%;
		margin:2rem auto;
		text-align: center;
		position:relative;
	}
	input{
		outline:none;
		border:none;
		display:block;
		height:3rem;
		width:100%;
		margin:0.8rem auto;
		font-size:1rem;
		color:#959595;
		line-height:3rem;
		border-bottom:1px solid #dcdcdc;
	}
	.time{
		position:absolute;
		right:0;
		top:3.7rem;
		width:6.5rem;
		height:2.6rem;
		font-size:1rem;
		color:#959595;
		line-height:2.8rem;
		border-left:1px solid #dcdcdc;
	}
.timeOver{
    display:none;
		position:absolute;
		right:0;
		top:3.7rem;
		width:6.5rem;
		height:2.6rem;
		font-size:1rem;
		color:#000;
    opacity:0;
    z-index:3;
    line-height:2.8rem;
		border-left:1px solid #dcdcdc;
	}
	.seecode{
		position:absolute;
		right:1rem;
		top:8.7rem;
		width:1.4rem;
		height:1.4rem;
		background:url(../../../assets/images/open.png) no-repeat;
		background-size:1.4rem;
	}
  .close {
			background:url(../../../assets/images/close.png) no-repeat;
			background-size:1.4rem;	
		}
	.complete,.finish{
		display:block;
		width:100%;
		height:3rem;
		margin-top:3rem;
		background-color:#3eb049;
		color:#fff;
		line-height:3rem;
		text-decoration:none;	
	}
	p{
		width:100%;
		height:2rem;
		margin:1rem auto;
		background:url(../../../assets/images/admin.png) no-repeat 0 0.5rem;
		background-size:1rem;
		text-indent:0.6rem;
		color:#959595;
		line-height:2rem;
	}
	p a{
		color:#3eb049;
		text-decoration:none;
		margin-left:0.4rem;
	}
  .dispn {
			display:none;
		}
		.dispb {
			display:block;
		}
    .warn{
			position:absolute;
			top:20%;
			left:25%;
			width:50%;
			height:7rem;
			background:url(../../../assets/images/warn.png) no-repeat center 1rem #000;
			background-size:2.5rem;
			opacity:0.7;
			border-radius:0.5rem;
      color:#fff;
      line-height:10rem;
      text-align:center;
      font-size:15px;
      z-index:6;
		}

</style>
<template>
	<div class="wrap">
		<router-link style="text-decoration:none;color:#000;" to="/login"><div class="head">
			用户注册
		</div></router-link>
		<div class="login-msg">
      <div :class="{dispn:show}" class="warn" id="warn">请输入手机号</div>
			<input type="text" placeholder="输入您的手机号" v-model="id">
			<input type="text" placeholder="输入校验码" v-model="code"><span v-on:click="getcode" class="time" id="timebtn">获取验证码</span><span class="timeOver" :class="{dispb:showO}"></span>
			<input type="text" id="password" placeholder="输入密码（6-20位 字母/数字）" v-model="name"><span class="seecode" :class="{close:closed}" v-on:click="toggle"></span>
			<router-link to=""><div class="finish" v-on:click="done">完成</div></router-link>
		<p>我已阅读并同意<a href="">菜市365用户服务协议</a></p>
		</div>
	</div>
</template>
<script>
import { getFastSign } from '@/config/req'
import axios from 'axios'

export default {
  name: 'wrap',
  data () {
    return {
      showO: false,
      closed: false,
      show: true,
      id: '',
      code: '',
      name: ''
    }
  },
  created () {
    this.fetchData()
    getFastSign()
    .then(data => {
      console.log('data', data.data.response)
    })
  },
  methods: {
    fetchData () {
      getFastSign()
      .then(data => {
        let dat = data.data.response
        console.log('getFastSign:', dat)
      })
    },
    getcode () {
      var Cthis = this
      function getCodes ({phone}) {
        return axios({
          method: 'post',
          url: 'http://apifort.epfresh.com/cgi',
          dataType: 'json',
          data: {
            'appDomain': 'supplier',
            'appVersion': '3.1.47',
            'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
            'token': 'aa9009a0ed2a4fd2b83689e240ac1d5e',
            'cmd': 'account/getVerification',
            'deviceInfo': {'osVersion': '5.1.1', 'os': 'android', 'model': 'OPPO A33'},
            'cityId': '36',
            'parameters': {
              'phone': phone,
              'type': 1
            }
          }
        })
      }
      getCodes({phone: this.id})
.then(function (data) {
  console.log(data)
  if (data.data.error.errorInfo !== '') {
    Cthis.show = false
    document.getElementById('warn').innerHTML = data.data.error.errorInfo
    document.getElementById('timebtn').innerHTML = '获取验证码'
    setTimeout(function () {
      Cthis.show = true
    }, 2000)
  }
})
      this.showO = true
      var t = 60
      var c
      var _this = this
      function timeminus () {
        document.getElementById('timebtn').innerHTML = t
        t--
        c = setTimeout(function () {
          timeminus()
        }, 1000)
        if (t < 0) {
          clearTimeout(c)
          document.getElementById('timebtn').innerHTML = '重获取验证码'
          t = 60
          _this.showO = false
        }
      }
      timeminus()
    },
    toggle () {
      this.closed = !this.closed
      if (this.closed) {
        document.getElementById('password').setAttribute('type', 'text')
      } else {
        document.getElementById('password').setAttribute('type', 'password')
      }
    },
    done () {
      getFastSign({a: this.id, b: this.name, c: this.code})
      .then(data => {
        console.log(data)
        if (data.data.error === null) {
          this.$router.push({ path: '/login' })
          this.show = false
          document.getElementById('warn').innerHTML = '注册成功'
          var __this = this
          setTimeout(function () {
            __this.show = true
          }, 2000)
        } else if (data.data.error.errorInfo !== '') {
          this.show = false
          document.getElementById('warn').innerHTML = data.data.error.errorInfo
          var _this = this
          setTimeout(function () {
            _this.show = true
          }, 2000)
        }
      })
    }
  },
  mounted () {
    setTimeout(function () {
      document.getElementsByTagName('html')[0].style.fontSize = '16px'
    }, 0)
    document.getElementsByTagName('html')[0].style.background = '#fff'
  }
}
</script>
