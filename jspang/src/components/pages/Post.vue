<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="post-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template scope="scope">
                    <el-button type="text" size="small"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col>我是产品栏</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "pos",
  mounted: function() {
    var orderHeight = document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById("order-list").style.height = orderHeight + "px";
  }
};
</script>

<style>
.post-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
}
</style>
