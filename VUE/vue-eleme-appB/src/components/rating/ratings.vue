<template>
  <!-- 评分的星星部分 -->
  <div class="contenter">
    <div class="content-left">
      <div class="ratings content-score">{{seller.score}}</div>
      <div class="ratings decsr">综合评分</div>
      <div class="ratings score-precent">高于周边商家{{seller.rankRate}}%</div>
    </div>
    <div class="ratings content-right">
      <div class="ratings service-attitude">
        服务态度
        <div class="star-item"></div>
        <span class="score-1">{{seller.serviceScore}}</span>
      </div>
      <div class="ratings goods-score">
        商品评分
        <div class="star-item"></div>
        <span class="score-1">{{seller.foodScore}}</span>
      </div>
      <div class="ratings arrive-time">
        送达时间
        <span class="second">{{seller.deliveryTime}}分钟</span>
      </div>
    </div>
  </div>
</template>

<script>
import start from '@/components/start/start'
export default {
  name: "rating",
  props: {
    rating: {
      type: Object
    }
  },
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller"
      )
      .then(res => {
        console.log(res);
        this.seller = res.data.data;
      })
  },
   components: {
    start
  }

  
};
</script>

<style lang="css">
.contenter {
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 10px solid #f5f5f5;
}
.ratings {
  margin-top: 10px;
}
.content-left {
  margin-top: 10px;
  text-align: center;
  width: 40%;
  height: 80px;
  border-right: 1px solid #d0d0d0;
}
.content-score {
  font-size: 25px;
  color: orange;
}
.content-right {
  margin-top: 10px;
  height: 80px;
  margin-left: 40px;
}
.decsr {
  font-weight: bold;
  margin-top: 5rpx;
  font-size: 10px;
}
.score-precent {
  font-size: 10px;
  color: #d0d0d0;
}
.content-right span {
  margin-left: 20px;
}
.score-1 {
  font-size: 10 px;
  color: orange;
}
.second {
  color: #d0d0d0;
  font-size: 10px;
}
.star-item{
    display: inline;
}
</style>
