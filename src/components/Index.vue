<template>
  <div id="index" @scroll="scrollFunc">
    <v-header/>
    <!-- <v-content/> -->
    <!-- <v-image/> -->
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
import Header from '../components/index/Header.vue'
// import Content from '../components/index/Content.vue'
// import Image from '../components/index/Image.vue'
import Footer from '../components/index/Footer.vue'

export default {
  name: 'index',
  components: {
    'v-header': Header,
    // Content,
    // Image,
    'v-footer': Footer
  },
  created(){
    console.log("滚动监听")
    window.addEventListener('scroll',this.scrollFunc, true);
  },
  methods:{
    scrollFunc:function (e) {
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      // 设备/屏幕高度
      let scrollObj = document.getElementById("image"); // 滚动区域
      let scrollTop = document.documentElement.scrollTop;              // div 到头部的距离
      let scrollHeight = scrollObj.scrollHeight;        // 滚动条的总高度
      //滚动条到底部的条件
      console.log(document.documentElement.scrollTop)
      console.log(clientHeight)
      console.log(scrollHeight)
      if(scrollTop+clientHeight == scrollHeight){
        // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
      }
    }
  }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../assets/css/index.css';

  #index {
    width: 100%;
  }

  .vue-waterfall-easy-scroll::-webkit-scrollbar {
    display: none;
  }

  .vue-waterfall-easy-scroll {
    overflow: auto !important;
    /*overflow-y: hidden !important;*/
  }
</style>