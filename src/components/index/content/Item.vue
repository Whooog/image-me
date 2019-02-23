<template>
  <a href="#" id="item">
    <div class="content-item">
      <div class="content-item-img">
        <img v-bind:src="image">
      </div>
      <div class="content-item-info">
        <div class="content-item-info-text">{{ name }}</div>
        <div class="content-item-info-type">{{ description }}</div>
        <div class="content-item-info-flag">
          <img v-bind:src="icon">
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "item",
  props: {
    id: Number,
    image: String,
    name: String,
    description: String,
    icon: String
  }
};
</script>