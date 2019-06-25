<template>
  <div id="app">
    <div class="header-navigate-wrapper">
      <div class="plane">
        <!-- <img src="../time.png" alt> -->
        <router-link to="/">计划模板</router-link>
      </div>
      <div class="home">
        <router-link to="/">首页</router-link>
      </div>
      <div class="pane-list">
        <router-link to="/List">计划列表</router-link>
      </div>
    </div>
    <div class="content">
      <!-- 显示左边的内容 -->
      <div class="time-box">
        <div class="complete-time">已有时长</div>
        <div class="time">{{time}}小时</div>
      </div>
      <!-- 显示右边的内容 -->
      <div class="right">
       <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      time:0
    };
  },
  
};
</script>

<style lang="css" scoped>
.header-navigate-wrapper {
  width: 100%;
  height: 50px;
  display: flex;
  border: 1px solid #d0d0d0;
  background-color: #f5f5f5;
  /* text-align: center; */
}
.plane {
  /* width: 100px; */
  height: 30px;
  font-size: 20px;
}
/* .plane img {
  width: 25px;
  height: 25px;
  margin-top: 10%;
} */
.home,
.plane,
.pane-list {
  margin-left: 10px;
  font-size: 15px;
text-align: center;
line-height: 50px;
  text-decoration: none;
}
.content {
  width: 100%;
  height: 200px;
  display: flex;
 
}
.time-box {
  flex:0.3;
  margin-top: 20px;
  font-weight: bold;
  height: 200px;
  border: 1px solid #d0d0d0;
   border-radius: 10px;
}
.complete-time {
  border-bottom: 1px solid #d0d0d0;
  height:100px;
  background-color: #f5f5f5;
  text-align: center;
  line-height: 100px;
}
.time {
  text-align: center;
  line-height: 100px;
}
.right{
  flex:0.6
}
</style>
