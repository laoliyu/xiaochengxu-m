<template>
  <div id="app">
    <!-- 头部header -->
    <!-- 调用header -->
    <v-header>
      <i slot="left-icon" class="icon">&#xe692;</i>
      <span slot="content">Magic Music</span>
      <router-link  to="/user" slot="right-icon">
      <i class="icon">&#xe63c;</i>
      </router-link>
    </v-header>
    <!-- tab -->
    <tab></tab>

    <!-- 缓存 -->
    <keep-alive>
      <!-- 路由路口 -->
    <router-view></router-view>
    </keep-alive>
    <!-- play -->
    <play></play>
<!-- sidebar -->
<sidebar></sidebar>
    
  </div>
</template>

<script>
import header from "@/components/header/header";
import tab from "@/components/tab"
import sidebar from "@/components/sidebar"
import play from "@/components/play"

export default {
  name: "App",
  components: {
    "v-header": header,
    tab,
    sidebar,
    play,
    
  }
}
</script>

<style lang="stylus">


@font-face
  font-family "icon"
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")

.icon
  font-family "icon" !important
  font-size 18px
  font-style normal
  color #ffffff
html,body
 line-height 1
 font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
 user-select none
 --webkit-tap-highlight-color transparent 
 background rgba(8,5,58,.9)
 color #fff







</style>
