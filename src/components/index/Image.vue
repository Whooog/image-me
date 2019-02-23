<template>
  <div id="image">
     <vue-waterfall-easy 
      :imgsArr="images"
      @scrollReachBottom="init"
      />
  </div>
</template>

<style>
  #image{
    height: 100%;
  }
</style>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  name: "image",
  components: {
    'vue-waterfall-easy': vueWaterfallEasy
  },
  data() {
    return {
      images:[],
      page:1
    };
  },
  methods:{
    openPullDown:function() {
    },
    init:function(){
      var api = "http://api.talei.me:8080/api/image/getAllByCategory";
      this.$http.get(api,{
        params:{
            categoryId: 2,
            page: this.page,
            size: 10
        }
      })
      .then((res) => {
        console.log('page++之前'+this.page);
        this.page+=1;
        console.log('page++之后'+this.page);
        // console.log(res.data);
        res.data.forEach(element => {
              // console.log(element);
              this.images.push({
                src:element.url,
                info:element.description
              })
        });
        
        // let img = {
          // "src": src,
          // "info": description
        // }
      }).catch((err) => {
        console.log(err);
      });
    }

  },
  created(){
    this.init();
  }
};
</script>
