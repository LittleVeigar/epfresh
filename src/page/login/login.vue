<style lang="scss" scoped>
  html{
     font-size: 16px ;
  }
  body{
    background-color:#f5f5f5;
  }
  .wrap{
    display:block;
    width:100%;
    height:150%;
    background:url(../../assets/images/bk.png) no-repeat #f5f5f5;
    background-size:100%;
  }
  .return span{
    display:inline-block;
    width:85%;
    height:32px;
    background:url(../../assets/images/return.png) no-repeat 0 8px;
    margin-top:24px;
  }
  .logo{
    margin:24px auto;
    width:100%;
  }
  .logo img{
    display:block;
    margin:0 auto;
    width:192px;
    height:104px;
  }
  .login {
    width:100%;
    text-align: center;
  }
  .line {
    width:80%;
    margin:16px auto;
    border-bottom:1px solid #ccc;
  }
  input{
    display:inline-block;
    width:75%;
    margin-left:-32px;
    border:0;
    font-size:16px;
    color:#959595;
    line-height:42px;
    outline:none;
    text-indent:32px;
  }
  .line input{
    margin-top:34px;
    background:url(../../assets/images/id.png) no-repeat 0 8px;
    background-size:16px;
  }
  .line2 input{
    margin-top:10px;
    background:url(../../assets/images/key.png) no-repeat 0 8px;
    background-size:16px;
  }
  .line2{
    position:relative;
  }
  .line2 span{
    position:absolute;
    top:30px;
    right:16px;
    width:24px;
    height:24px;
    background:url(../../assets/images/open.png) no-repeat;
    background-size:24px;
  }
  .line2 span.close {
    background:url(../../assets/images/close.png) no-repeat;
    background-size:24px;
  }
  .loginbtn{
    width:80%;
    height:42px;
    line-height:42px;
    text-align:center;
    margin:40px auto;
    background-color:#3eb049;
    font-size:16px;
    color:#fff;
    border:none;
    outline:none;
  }
  a{
    text-decoration:none;
  }
  .sign{
    display:block;
    width:80%;
    height:42px;
    color:#959595;
    line-height:42px;
    text-align:center;
    margin:-16px auto;
    background-color:white;
    border:1px solid #dcdcdc;
  }
  .findcode{
    display:block;
    margin-top:32px;
    margin-bottom:102px;
  }
  .warn{
    position:absolute;
    top:30%;
    left:25%;
    width:50%;
    height:112px;
    background:url(../../assets/images/warn.png) no-repeat center 16px #000;
    background-size:40px;
    opacity:0.7;
    border-radius:8px;
    color:#fff;
    line-height:160px;
    text-align:center;
    font-size:15px;
  }
  .dispn {
    display:none;
  }
  .dispb {
    display:block;
  }
//   input:-webkit-autofill {
//     -webkit-box-shadow: 0 0 0px 1000px rgba(244,240,239,1) inset !important;
// }
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
  background-color:rgba(0,0,0,1)!important;
}
</style>
<template>
  <div class="wrap" id="bk">
    <router-link slot="left" class="return" to="/home"><span></span></router-link>
    <div class="logo">
      <img src="../../assets/images/logo.png" alt="e批生鲜logo" />
    </div>
    <div class="login"  autocomplete="off" v-on:submit.prevent="submit">
      <div class="line">
        <div :class="{dispn:show}" class="warn" id="warn">{{errorInfo}}</div>
        <input id="phone" type="number" autocomplete="off"  placeholder="请输入手机号" v-model="form.id">
      </div>
      <div class="line line2">
        <input v-if="closed" type="text" id="password" autocomplete="off"  placeholder="请输入密码" v-model="form.name">
        <input  v-else type="password" id="password"  autocomplete="off" placeholder="请输入密码" v-model="form.name">
        <span v-on:click="hiddecode" id="seeicon" :class="{close:closed}"></span>
      </div>
      <button class="loginbtn" v-on:click="loginClick">登&nbsp;录</button>
      <router-link class="sign" style="text-decoration:none;color:#959595;" to="/fastSign">快速注册</router-link>
      <router-link class="findcode"  style="text-decoration:none;color:#1fadee;" to="/forgetCode">忘记密码？</router-link>
    </div>
  </div>
</template>
<script>
    // const Cookie = require('js-cookie')
    import { loginAccount } from '@/config/req'
    import { mapMutations, mapActions, mapState } from 'vuex'
    export default {
  name: 'wrap',
  data () {
        return {
          btn: false,
          closed: false,
          show: true,
          errorInfo: '请输入手机号',
          form: {
            id: '',
            name: ''
          },
          hide: true
        }
      },
  computed: {
        ...mapState([
          'login',
          'accountId',
          'token',
          'phone'
        ])
  },
  methods: {
        ...mapMutations([
          'HOME_ACTIVE',
          'HIDE_MENU',
          'ACCOUNT_LOGIN'
        ]),
        ...mapActions([
          'setAccountLogin',
          'setAccountLogout',
          'rememberLastPhone'
        ]),
        submit () {
          return false
        },
        loginClick () {
          this.rememberLastPhone(this.form.id)
          loginAccount({phone: this.form.id, password: this.form.name})
          .then(data => {
            let { accountId, token } = data.data.response
            let account = data.data.response
            console.log(accountId, token)

            this.setAccountLogin(account)
            if (data.data.error === null) {
              // this.$router.push({ path: '/home' })
              this.$router.go(-1)
            } else if (data.data.error.errorInfo !== '') {
              this.show = false
              this.errorInfo = data.data.error.errorInfo
              var _this = this
              setTimeout(function () {
                _this.show = true
              }, 2000)
            }
          })
          if (this.form.id === '') {
            this.show = false
            this.errorInfo = '请输入手机号'
            var _this = this
            setTimeout(function () {
              _this.show = true
            }, 2000)
          } else if (this.form.name === '') {
            this.show = false
            this.errorInfo = '请输入密码'
            var __this = this
            setTimeout(function () {
              __this.show = true
            }, 2000)
          } else {
            this.show = true
          }
        },
        hiddecode () {
          this.closed = !this.closed
        }
      },
  mounted () {
        this.form.id = this.phone
        document.getElementsByTagName('html')[0].style.background = '#f5f5f5'
        document.querySelector('#app').style.marginBottom = '0'
        this.HOME_ACTIVE({ id: this.id })
        this.HIDE_MENU({ hidemenu: this.hide })
  }
    }
</script>
