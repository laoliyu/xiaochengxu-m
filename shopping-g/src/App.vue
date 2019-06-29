<template>
  <div id="app">
    <!-- 滑动的图片 -->
      <v-picture :banner="banner"></v-picture>
    <!-- 头部的搜索框 -->
    <v-header></v-header>
    <div class="tab">
      <v-tab></v-tab>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from "@/components/header";
import picture from "@/components/picture";
import tab from "@/components/tab"
export default {
  name: "App",
  data() {
    return {
   banner:[{url:'http://123.com',image:'1.png'},
,
   ]  //虚拟数据
    };
  },
  components: {
    "v-header": header,
    "v-picture": picture,
    "v-tab":tab
  }
};
</script>

<style>
</style>
