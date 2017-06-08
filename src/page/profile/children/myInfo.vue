<template>
  <div class="my-info">
      <div class="head">
        <span>头像</span>
        <img src="./head.jpg">
      </div>
      <section class="my-message">
        <div class="my-name">
          <span>姓名/名称</span>
          <span>维嘉</span>
        </div>
        <div class="my-address">
          <span>地址管理</span>
          <img src="../../../assets/images/grey-arrow.png">
        </div>
      </section>
  </div>
</template>
<script>

export default {
  name: 'infor',
  data () {
    return {
      msg: 'Welcome to myinfo !'
    }
  },
  methods: {

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
.my-info {
  background-color: #efefef;
  .head {
    height: 90px;
    padding: 0 15px;
    box-sizing: border-box;
    border-top: solid 15px #efefef;
    background-color: #fff;
    font-size: 16px;
    @include flexSpaceBetween
  }
  img {
    height: 50px;
    width: auto;
    border-radius: 50%;
  }
}
.my-message {
  margin-top: 15px;
  line-height: 50px;
  font-size: 14px;
  background-color: #fff;
}
.my-name {
  @include flexSpaceBetween
  padding: 0 15px;
}
.my-address {
  @include flexSpaceBetween
  padding: 0 15px;
  border-top: solid 1px #efefef;
  img {
    height: 16px;
  }
}

</style>
