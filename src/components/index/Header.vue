<template>
  <div id="header">
    <div class="header-content">
      <div class="header-content-left">
        <div id="logo">
          <a href="#">
            <img src="../../assets/img/logo.png">
          </a>
        </div>
      </div>
      <div class="header-content-right">
        <ul>
          <li>
            <a href="#">归档</a>
          </li>
          <li>
            <a href="#">分类</a>
          </li>
          <li>
            <a href="#">友链</a>
          </li>
          <li>
            <a href="#">关于</a>
          </li>
          <li>
            <a href="#">
              <img src="../../assets/img/search.svg">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    // text: String
  },
  created: function() {
  }
};
</script>