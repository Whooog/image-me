<template>
  <div id="content">
    <div class="content-container">
      <Item
        :id="item.id"
        :image="item.image"
        :name="item.name"
        :description="item.description"
        :icon="item.icon"
        :key="item"
        v-for="item in items"
      />
    </div>
    <Page
      :currentPage="currentPage"
      :pageSize="pageSize"
      :totalSize="totalSize"
      />
  </div>
</template>

<script>
import Item from "../../components/index/content/Item.vue";
import Page from "../../components/index/content/Page.vue";

export default {
  name: "content",
  components: {
    Item,
    Page
  },
  methods: {
    init: function() {
      const api = "http://api.talei.me:8080/api/category/list";
      this.$http.get(api, {
          params: {
            page: this.currentPage,
            size: this.pageSize
          }
        })
        .then(response => {
          this.items = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.init()
  },
  data() {
    return {
      items: [],
      currentPage:1,
      pageSize:1,
      totalSize:9
    };
  }
};
</script>
