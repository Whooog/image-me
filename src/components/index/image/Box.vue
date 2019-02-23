<template>
  <div id="box">
    <div class="img">
      <a href="javascrip:;">
        <img
          :src="img"
          alt=""
        >
      </a>
    </div>
    <div class="info">
      <span>描述信息描述信息描述信息描述信息描述信息</span>
    </div>
  </div>
</template>

<style>
#box {
  width: 100%;
  max-width: 250px;
  min-height: 150px;
  box-shadow: 0px 0px 4px #ccc;
  display: inline-block;
  padding: 0px;
  margin: 20px 10px;
  border-radius: 10px;
  overflow: hidden;
  vertical-align:top;
}
.box:hover {
  opacity: 0.5;
}
.img {
 display: inline-block;
  width: 100%;
  min-width: 200px;
  min-height: 100px;

}
img {
  max-width: 100%;
}
.info {
  width: 90%;
  margin: auto;
  padding: 10px 0;
  /* background: red; */
  text-align: left;
}
</style>

<script>
export default {
    name:'box',
    props:{
        img:String
    }
}
</script>