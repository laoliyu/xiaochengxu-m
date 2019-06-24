<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <searchBox></searchBox>
    </div>
    <div class="shortcut-wrapp" ref="shortcutWrapper" v-show="!query">
      <!-- 热门搜索 -->
      <scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div>
          <h1 class="title">热门搜索</h1>
          <ul>
            <li
              class="item"
              v-for="(item,index) in hotKey"
              :key="index"
              @click="addQuery(item.first)"
            >
            <span>{{item.first}}</span></li>
          </ul>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import searchBox from "../searchBox";
import scroll from "../scroll";
export default {
  data() {
    return {
      query: false,
      shortcut:[],
      refreshDelay:0,
      hotKey: [
        { first: "shenghaohaonan" },
        { first: "shenghaohaonan!" },
        { first: "shenghaohaonan!!!" },
        { first: "shenghaohaonan!!" }
      ]
    };
  },
 
  components: {
    searchBox,
    scroll
  }
};
</script>

<style>
</style>
