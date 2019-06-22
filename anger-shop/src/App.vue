<template>
  <div id="app">
    <!-- 头部展示的搜索框 -->
   <v-header>
     
     <router-link >
 <i class="icon" >&#xe613;</i>
     </router-link>
   </v-header>
  </div>
</template>

<script>
import header from "../src/components/header"
export default {
  name: 'App',
  components:{
    "v-header": header,
  }

}
</script>

<style lang="stylus" >
  
</style>
