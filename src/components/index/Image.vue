<template>
  <div id="image">
    <!--<vue-waterfall-easy
      :imgsArr="images"
      @scrollReachBottom="init"
      :height="600"
      :reachBottomDistance="100"
    />-->
    <waterfall
      :line-gap="400"
      :align="center"
      :watch="images"
    >
      <waterfall-slot
        v-for="(item, index) in images"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id">
        <img :src="item.src" width="100%" height="100%"/>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<style>
  #image {
    margin-bottom: 220px;
  }
</style>

<script>
  // import vueWaterfallEasy from 'vue-waterfall-easy'
  import  Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
  export default {
    name: "image",
    components: {
      // 'vue-waterfall-easy': vueWaterfallEasy
      Waterfall,
      WaterfallSlot
    },
    data() {
      return {
        images: [],
        categoryId: 0,
        page: 1,
      };
    },
    methods: {
      handleScroll(e){
        console.log(e);
      },
      init: function () {
       const api = "http://api.talei.me:8080/api/image/getAllByCategory";
        this.$http.get(api, {
          params: {
            categoryId: this.categoryId,
            page: this.page,
            size: 20
          }
        })
        .then((res) => {
          this.page += 1;
          res.data.forEach(element => {
            let img = new Image();
            img.src = element.url;
            img.onload = () => {
              console.log(element.url);
              console.log(img.width);
              console.log(img.height)

              this.images.push({
                id: element.id,
                src: element.url,
                width: img.width / 5,
                height: img.height / 5,
                info: element.description
              })
            }
          });
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    watch:{

    },
    created() {
      this.categoryId = this.$route.query.categoryId
      this.init();
    }
  };
</script>
