<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <router-view></router-view> 
      <!-- 引入路由 -->
      <searchBox></searchBox>
    </div>
  </div>
</template>

<script>
import searchBox from "../searchBox";
export default {
  data() {
    return {};
  },
  components: {
    searchBox
  }
};
</script>

<style>
</style>
