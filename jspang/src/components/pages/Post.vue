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
                <template scope>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>

          <div class="div-btn">
            <el-button type="warning">挂单</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="success">结账</el-button>
          </div>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="goods">
          <div class="goods-title">常用商品</div>
          <div class="goodList">
            <ul>
              <li v-for="good in ofengoods" :key="good">
                <span>{{good.goodsName}}</span>
                <span class="price">￥{{good.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
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
      ],
      ofengoods: [
        {
          goodsId: 1,
          goodsName: "香辣鱼",
          price: 16
        },
        {
          goodsId: 2,
          goodsName: "香辣鸡翅",
          price: 20
        },
        {
          goodsId: 1,
          goodsName: "香辣鱼",
          price: 16
        },
        {
          goodsId: 3,
          goodsName: "香辣虾",
          price: 66
        },
        {
          goodsId: 4,
          goodsName: "西红柿汤",
          price: 16
        },
        {
          goodsId: 5,
          goodsName: "香辣鱼刺",
          price: 16
        },
         {
          goodsId: 1,
          goodsName: "香辣鱼",
          price: 16
        },
        {
          goodsId: 2,
          goodsName: "香辣鸡翅",
          price: 20
        },
        {
          goodsId: 1,
          goodsName: "香辣鱼",
          price: 16
        },
        {
          goodsId: 3,
          goodsName: "香辣虾",
          price: 66
        },
        {
          goodsId: 4,
          goodsName: "西红柿汤",
          price: 16
        },
        {
          goodsId: 5,
          goodsName: "香辣鱼刺",
          price: 16
        }
      ]
    }
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
.div-btn {
  margin-top: 10px;
}
.goods-title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fcfa;
  padding: 10px;
  text-align: left;
}
.goodList ul li {
  list-style: none;
  float: left;
  border: 1px solid #d3dce6;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
}
.price {
  color: #58b7ff;
}
</style>
