<template>
  <div class="content-page-turning" id="page">
    <a @click="fanye(page.page)" :class="{active: page.isCurrency}" :key="page" v-for="page in pages">{{page.page}}</a>
  </div>
</template>

<script>
export default {
  name: "page",
  data(){
    return {
      showCount: 5,
      totalPage: 0,
      pages: []
    }
  },
  watch: {
    currentPage: function(val) {
      this.currentPage = val;
      this.refresh();
    },
    totalSize: function(val) {
      this.totalSize = val;
      this.refresh();
    }
  },
  props: {
    currentPage: Number,
    pageSize: Number,
    totalSize: Number
  },
  computed: {
    activeClass: function(page) {
      console.log(page.page + ":" + page.isCurrency);
      return {
        active: page.isCurrency
      }
    }
  },
  methods: {
    fanye: function(page) {
      console.log('翻页了')
      this.$parent.pageTurning(page);
    },
    refresh: function() {
      console.log("刷新数据")
      this.refreshTotalpage();
      this.refreshPages();
    },
    // 刷新显示的页数
    refreshPages: function() {
      /**
     * 显示的页数: 5
     * 总页数: 9
     *
     * 分为 头部区域 躯体区域 尾部区域
     * 其中 头部区域又分为 满页状态 和 缺失状态 (总页数少于 显示的页数)
     *
     * 头部区域的定义: 1 2 3 4 5 当前页小于等于  向上取整(显示的数量 / 2) 不需要前移
     * 尾部区域的定义: 5 6 7 8 9 当前页大于等于  向下取整(显示的数量 / 2)
     * 躯体区域的定义: 4 5 6 7 8
     */
    this.pages = [];
    if (this.currentPage <= Math.ceil(this.showCount / 2) || this.totalPage <= this.showCount) {
      console.log('头');
      for (let i = 1; i <= this.showCount && i <= this.totalPage; i++) {
        let isCurrency = this.currentPage == i;
        this.pages.push({"page": i, "isCurrency": isCurrency});
      }
    } else if (this.currentPage >= this.totalPage - Math.floor(this.showCount / 2)) {
      console.log('尾');
      for (let i = this.totalPage - (this.showCount - 1); i <= this.totalPage; i++) {
        let isCurrency = this.currentPage == i;
        this.pages.push({"page": i, "isCurrency": isCurrency});
      }
    } else {
      console.log('躯');
      for (let i = this.currentPage - (Math.floor(this.showCount / 2)); i <= this.currentPage + (Math.floor(this.showCount / 2)); i++) {
        let isCurrency = this.currentPage == i;
        this.pages.push({"page": i, "isCurrency": isCurrency});
      }
    }

    this.pages.forEach((element) => {
      // console.log(element.page + ":" + element.isCurrency);
    })
    },
    refreshTotalpage: function() {
      this.totalPage = Math.ceil(this.totalSize / this.pageSize);
    }
  }
};
</script>