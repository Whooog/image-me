import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/index/Content.vue'
import Image from '../components/index/Image.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Content},
    { path: '/image', component: Image}
  ]
})