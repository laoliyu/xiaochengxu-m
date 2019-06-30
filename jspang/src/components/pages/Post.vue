<template>
  <div class="pos">
      <el-row>
          <el-col :span="7" class="post-order" id="order-list">我是点单栏</el-col>
          <el-col>我是产品栏</el-col>

      </el-row>
  </div>

</template>

<script>
export default {
  name: "pos",
  mounted:function(){
      var orderHeight = document.body.clientHeight;
      console.log(orderHeight)
      document.getElementById('order-list').style.height=orderHeight+'px'

  }
};
</script>

<style>
.post-order{
    background-color: #F9FAFC;
    border-right: 1px solid #C0ccda;

}
</style>
