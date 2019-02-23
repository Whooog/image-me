<template>
  <div id="index">
    <v-header/>
    <!-- <v-content/> -->
    <v-image/>
   
    <v-footer/>
  </div>
</template>

<script>
import Header from '../components/index/Header.vue'
// import Content from '../components/index/Content.vue'
import Footer from '../components/index/Footer.vue'
import Image from '../components/index/Image.vue'

export default {
  name: 'index',
  props: {
    // text: String
  },
  components: {
    'v-header': Header,
    'v-image': Image,
    // 'v-content': Content,
    'v-footer': Footer,
    
  },
  created: function() {
    // console.log('初始化')
  },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../assets/css/index.css';

  #index {
    width: 100%;
    height: 100%;
  }

  .vue-waterfall-easy-scroll::-webkit-scrollbar {
    display: none;
  }
</style>