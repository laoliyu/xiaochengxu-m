<template>
  <div id="app">
      <v-picture></v-picture>
    <!-- 头部的搜索框 -->
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from "@/components/header";
import picture from "../src/components/picture";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "v-header": header,
    "v-picture": picture
  }
};
</script>

<style>
</style>
