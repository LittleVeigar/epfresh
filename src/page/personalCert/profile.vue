<template>
  <div class="profile">
    <div class="profile-info">
      <div class="profile-head">
        <img :src="headerImg">
        <div class="profile-text">
          <div class="profile-name">维嘉</div>
          <div class="profile-phone">137****2056</div>
        </div>
      </div>
      <div class="account-manage">
        <span>
          账户管理
          </span>
          <img src="../../assets/images/arrow.svg">
      </div>
    </div>
    <section class="account-title">
      <span>我的订单</span>
      <span>
      <router-link to="/order" class="all-order">
        <span>
          全部订单
        </span>
        <img class="account-grey-arrow" src="../../assets/images/grey-arrow.png">
      </router-link>
      </span>
    </section>
    <section class="order-menu clearfix">
      <div class="obligation">
        <div><img class="obligation-icon" src="../../assets/images/obligation.png"></div>
        <div>待付款</div>
      </div>
      <div class="obligation">
        <div><img src="../../assets/images/delivery.png"></div>
        <div>待发货</div>
      </div>
      <div class="obligation">
        <div><img src="../../assets/images/receiving.png"></div>
        <div>待收货</div>
      </div>
      <div class="obligation">
        <div><img src="../../assets/images/assess.png"></div>
        <div>待评价</div>
      </div>
      <div class="remission ">
        <div><img src="../../assets/images/remission.png"></div>
        <div>减免退</div>
      </div>
    </section>
    <section class="profile-list">
      <div class="profile-item">
        <div class="item-main">
          <img src="../../assets/images/coupon.png">
          <span class="item-text">优惠券</span>
          <span class="item-message">NEW</span>
        </div>
        <img class="item-arrow" src="../../assets/images/grey-arrow.png">
      </div>
            <div class="profile-item">
        <div class="item-main">
          <img src="../../assets/images/wallet.png">
          <span class="item-text">钱包</span>
          <span class="item-message">NEW</span>
        </div>
        <img class="item-arrow" src="../../assets/images/grey-arrow.png">
      </div>
      <div class="profile-item">
        <div class="item-main">
          <img src="../../assets/images/classroom.png">
          <span class="item-text">常见问题</span>
        </div>
        <img class="item-arrow" src="../../assets/images/grey-arrow.png">
      </div>
            <div class="profile-item">
        <div class="item-main">
          <img src="../../assets/images/certification.png">
          <span class="item-text">实名认证</span>
        </div>
        <img class="item-arrow" src="../../assets/images/grey-arrow.png">
      </div>
            <div class="profile-item">
        <div class="item-main">
          <img src="../../assets/images/focuse.png">
          <span class="item-text">我的关注</span>
        </div>
        <img class="item-arrow" src="../../assets/images/grey-arrow.png">
      </div>
            <div class="profile-item">
        <div class="item-main">
          <img src="../../assets/images/recommend.png">
          <span class="item-text">推荐给好友</span>
        </div>
        <img class="item-arrow" src="../../assets/images/grey-arrow.png">
      </div>
      <div class="profile-item">
        <div class="item-main">
          <img src="../../assets/images/dial.png">
          <span class="item-text">拨打客服</span>
        </div>
        <div>
          400-0588198
        </div>
      </div>
    </section>
    <section class="profile-list">
      <div class="profile-item">
        <div class="item-main">
          <img src="../../assets/images/setting.png">
          <span class="item-text">设置</span>
        </div>
        <img class="item-arrow" src="../../assets/images/grey-arrow.png">
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getProfile } from '@/config/req'
export default {
  name: 'Order',
  data () {
    return {
      msg: 'Welcome to profile !',
      headerImg: '',
      id: 4,
      hide: false
    }
  },
  created () {
    if (!this.login) {
      this.$router.push({ path: 'login' })
    } else {
      getProfile(this.$store.state, {'accountId': this.$store.state.accountId})
      .then(data => {
        let dat = data.data.response
        this.headerImg = dat.avatar
      })
    }
  },
  computed: {
    ...mapState([
      'login'
    ])
  },
  methods: {
    ...mapMutations([
      'HOME_ACTIVE',
      'HIDE_MENU'
    ])
  },
  mounted () {
    this.HOME_ACTIVE({ id: this.id })
    this.HIDE_MENU({ hidemenu: this.hide })
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
@mixin flexSpaceBetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.clearfix:after {
  clear:both;
  content:'.';
  display:block;
  width: 0;
  height: 0;
  visibility:hidden;
}
.profile-info {
  @include flexSpaceBetween;
  height: 96px;
  padding: 0 15px;
  background-color: #0F9B80;
  color: #fff;
}
.profile-head  {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.profile-text {
  margin-left: 10px;
  text-align: left;
  .profile-name {
    font-size: 18px;
  }
  .profile-phone {
    font-size: 14px;
    line-height: 1.5;
  }
}
.profile-head img {
  width: 60px;
  border-radius: 50%;
}
.account-manage {
@include flexSpaceBetween;
  width: 85px;
  font-size: 16px;
}

.account-title {
  height: 40px;
  @include flexSpaceBetween;
  padding: 0 10px;
  font-size: 14px;
  background: #fff;
  border-bottom: solid 1px #ddd;
  .all-order {
    @include flexSpaceBetween;
    text-decoration: none;
    color: #000;
    img {
      margin-left: 5px;
    }
  }
}
.account-grey-arrow {
  width: 8px;
}
.order-menu {
  @include flexSpaceBetween;
  width: 100%;
  justify-content: space-around;
  font-size: 14px;
  box-sizing: border-box;
  background: #fff;
  .obligation {
    float: left;
    width: 20%;
    box-sizing: border-box;
    padding: 5px 0;
    border-right: solid 1px #eee;
  }
  .remission {
    @extend .obligation;
    border-right:none;
  }
  img {
    height: 20px;
    width: auto;
  }
}

.profile-list {
  background-color: #eee;
  padding-top: 15px;
  min-height: 120px;
  .profile-item {
    height: 50px;
    padding: 0 10px;
    background-color: #fff;
    border-bottom: solid 1px #eee;
    font-size: 16px;
    @include flexSpaceBetween
    .item-main {
      @include flexSpaceBetween
      .item-text {
        padding: 0 5px;
        font-size: 14px;
      }
      .item-message {
        padding: 0px 3px;
        color: red;
        font-size: 12px;
        border: solid 1px red;
        border-radius:10px;
      }
      img {
        width: 18px;
      }
    }
    .item-arrow {
      width: 8px;
    }
  }
}
</style>
