<template>
  <!-- 顶部的搜索框 -->
  <div class="header-search">
    <div class="header-search-wrap">
      <img src="../image/search.png" class="icon">
      <input type="text" @click="search" class="search">
      <button class="cancle">取消</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"hd",
  data() {
    return {};
  },
  methods: {
    search() {}
  }
};

</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.header-search
    width 100%
    height 100%
    background-color #efeff4
    .header-search-wrap
        width 100%
        height px2rem(150px)
        border 1px solid #e6e6ea
        display flex
        align-items center
        justify-content space-between
        .search
          display inline-block
          width 90%
          height px2rem(80px)
          margin px2rem(10px)
          border-radius px2rem(20px)
        .icon
          width px2rem(40px)
          height px2rem(40px)
          position absolute
          z-index 2
          left px2rem(50px)
        .cancle
          font-size 12px
        

         
      

        



</style>
