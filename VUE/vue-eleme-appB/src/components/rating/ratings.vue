<template>
  <!-- 评分的星星部分 -->
  <div class="rating">
    <div class="contenter">
      <div class="content-left">
        <div class="ratings content-score">{{seller.score}}</div>
        <div class="ratings decsr">综合评分</div>
        <div class="ratings score-precent">高于周边商家{{seller.rankRate}}%</div>
      </div>
      <div class="ratings content-right">
        <div class="ratings service-attitude">
          服务态度
          <stars :size="48" :score="seller.serviceScore"></stars>

          <span class="score-1">{{seller.serviceScore}}</span>
        </div>
        <div class="ratings goods-score">
          商品评分
          <stars :size="48" :score="seller.serviceScore"></stars>

          <span class="score-1">{{seller.foodScore}}</span>
        </div>
        <div class="ratings arrive-time">
          送达时间
          <span class="second">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
    <div class="rating-button">
      <div class="button-top">
        <button class="all">全部24</button>
        <button class="like">满意18</button>
        <button class="dislike">不满意</button>
      </div>
      <div class="see-rating">
        <div class="rating-sure">只看有内容的评价</div>
      </div>
    </div>
  </div>
</template>

<script>
import stars from "@/components/star/star";

export default {
  name: "rating",
  props: {
    rating: {
      type: Object
    }
  },
  data() {
    return {
      seller: []
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
      });
  },
  components: {
    stars
  }
};
</script>

<style lang="stylus" >
@import '../../common/stylus/mixin.styl';

.contenter {
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 10px solid #f5f5f5;
}

.ratings {
  margin-top: 10px;
  // float: right;
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
  // margin-left: 5px;
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

.content-right div {
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

.star {
  display: flex;
  float: right;
  margin-left: -10px;
  vertical-align: top;
}

.button-top {
  display: flex;
  width: 95%;
  height: 50px;
  align-items: center;
  margin-left: 10px;
  border-bottom: 1px solid #d0d0d0;
}

.button-top button {
  width: 80px;
  height: 30px;
}

.button-top .like, .dislike {
  margin-left: 10px;
}

.all {
  background-color: #0396d7;
  color: #fff;
}

.like {
  background-color: #ccebf8;
}

.dislike {
  background: #d9dcdc;
}

.see-rating {
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid #d0d0d0;
}

.rating-sure {
  color: #cbc1d0;
  font-size: 15px;
  margin-left: 10px;
}

.rating-sure:active {
  color: #0000FF;
}

.rating-sure:before {
  content: '';
  display: inline-block;
  height: 30px;
  width: 30px;
  background: url('sure1.png') no-repeat;
  background-size: 100%;
}
</style>
