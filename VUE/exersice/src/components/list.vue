<template>
  <div class="app">
    <el-row>
     <router-link to="/time"> <el-button type="primary">创建</el-button></router-link>
    </el-row>
    <el-divider content-position="right"></el-divider>
    <router-link to="/time">创建一个任务</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.app {
  margin-top: 20px;
  margin-left: 20px;
  color: #ffffff;
}

</style>
