<template>
  <div class="content-page-turning" id="page">
    <!-- <a href="#">←</a>
    <a href="#" id="active">3</a>
    <a href="#">4</a>
    <a href="#">5</a> -->
    <!-- 
      当前页码小于3并且所有页码也小于等于5

      当前页码大于等于总页码-2


     -->
    <a href="#" :key="page" v-for="page in totalPage">{{page}}</a>
  </div>
</template>

<style>
  .active {
      color: red
  }
</style>

<script>
export default {
  name: "page",
  data(){
    return {
      totalPage:0  
    }
  },
  props: {
    currentPage: Number,
    pageSize: Number,
    totalSize: Number
  },
  methods: {
    // 总数量/每页数量
    // getTotalPage: function(pageSize, totalSize) {
    //   return Math.ceil(totalSize / pageSize);
    // }
    

    
  },
  created() {
    this.totalPage = Math.ceil(this.totalSize / this.pageSize);
    console.log('totalPage:' + this.totalPage);
    console.log("currentPage: " + this.currentPage);
    console.log("pageSize: " + this.pageSize);
    console.log("totalSize: " + this.totalSize);
    
    // 创建时 computed 还没有初始化
    // console.log("总页数： " + this.getTotalPage(this.pageSize, this.totalSize));
  }
};
</script>