<template>
  <div class="swiper-container swiper1">
    <div class="swiper-wrapper">
     <!--图片的轮播  -->
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index" >
        <!-- <a :href="item.url"> -->
          <div class="swiper-img flex3">
            <img src="../images/pic1.jpg" width="100%" alt="banner" style="display:block;">
          </div>
        <!-- </a> -->
      </div>
       <div class="swiper-slide" v-for="(item,index) in banner" :key="index" >
        <!-- <a :href="item.url"> -->
          <div class="swiper-img flex3">
            <img src="../images/pic3.jpg" width="100%" alt="banner" style="display:block;">
          </div>
        <!-- </a> -->
      </div>
       <div class="swiper-slide" v-for="(item,index) in banner" :key="index" >
        <!-- <a :href="item.url"> -->
          <div class="swiper-img flex3">
            <img src="../images/pic4.jpg" width="100%" alt="banner" style="display:block;">
          </div>
        <!-- </a> -->
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  props: ["banner"], //首页传过来的数据
  mounted() {
    var mySwiper = new Swiper(".swiper1", {
      pagination: ".swiper-pagination",
      autoplay: 3000,
      paginationClickable: true,
      centeredSlides: true,
      autoplayDisableOnInteraction: false,
      preventClicks: false,
      speed: 600,
      observer: true,
      loop: true,
      observeParents: true
    });
  }
};
</script>

<style>
</style>
