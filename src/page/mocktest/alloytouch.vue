<template>
  <div class="search">
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
  let movetarget = document.getElementById('movetarget')
  export default {
    name: 'Order',
    data () {
      return {
        msg: 'Welcome to Order !',
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
      }
    },
    mounted () {
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
  }
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
