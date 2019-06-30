<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="post-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border style="width:100%" :data="tableDate">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50px"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column label="操作" fixed="right" width="100px">
                <template scope = "">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
        <div class="div-btn">
            <el-button type="warning">挂单</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="success">结账</el-button>
        </div>
      </el-col>
      <el-col>我是产品栏</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "pos",
  data() {
    return {
      tableDate: [
        {
          goodsName: "鱼香肉丝",
          price: 15,
          count: 1
        },
        {
          goodsName: "干锅牛蛙",
          price: 35,
          count: 3
        },
        {
          goodsName: "酸菜鱼",
          price: 15,
          count: 1
        },
        {
          goodsName: "可乐鸡翅",
          price: 15,
          count: 2
        }
      ]
    };
  },
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
.div-btn{
    margin-top: 10px;
}
</style>
