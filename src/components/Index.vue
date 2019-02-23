<template>
  <div id="index">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/index/Header.vue'
import Content from '../components/index/Content.vue'
import Footer from '../components/index/Footer.vue'

export default {
  name: 'index',
  props: {
    // text: String
  },
  components: {
    Header,
    Content,
    Footer
  },
  created: function() {
    console.log('初始化')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/index.css'
</style>