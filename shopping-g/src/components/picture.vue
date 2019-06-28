<template>
  <div class="cate-main">
    <div class="carousel-contain">
      <ul class="carousel-wrap transition">
        <li class="carousel-slide">
          <img src="../images/pic2.png" alt="图1">
        </li>
        <li class="carousel-slide">
          <img src="../images/pic1.jpg" alt="图2">
        </li>
        <li class="carousel-slide">
          <img src="../images/pic3.jpg" alt="图3">
        </li>
        <li class="carousel-slide">
          <img src="../images/pic4.jpg" alt="图1">
        </li>
      </ul>
      <p class="carousel-button-wrap">
        <span
          class="carousel-button-slide"
          :class="{active: activeIndex == 0 || activeIndex == 3}"
          @click="switchPic (0)"
        ></span>
        <span
          class="carousel-button-slide"
          :class="{active: activeIndex == 1}"
          @click="switchPic (2)"
        ></span>
        <span
          class="carousel-button-slide"
          :class="{active: activeIndex == 2}"
          @click="switchPic (3)"
        ></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeId: 0,
      timeOutId: 0,
      activeIndex: 0
    };
  },

  activated() {
    this.carousel();
  },
  methods: {
    carousel() {
      clearTimeout(this.timeOutId);
      let ul = document.getElementsByClassName("carousel-wrap")[0];
      let li = document
        .getElementsByClassName("carousel-wrap")[1]
        .getElementsByTagName("li");
      let span = document
        .getElementsByClassName("carousel-button-wrap")[2]
        .getElementsByTagName("span");
      let num = 0;
      let len = li.length;
      let self = this;
      this.timeId = setInterval(function() {
        num = ++num == len ? 0 : num;
        self.activeIndex = num;
        if (num == 0) {
          ul.classList.remove("transition");
          ul.style.transform =
            "translateX" + "(" + "-" + 900 * num + "rem" + ")";
        } else {
          ul.classList.add("transition");
          ul.style.transform =
            "translateX" + "(" + "-" + 900 * num + "rem" + ")";
        }
      }, 2500);
    },
    switchPic(index) {
      clearInterval(this.timeId);
      this.activeIndex = index;

      let ul = document.getElementsByClassName("carousel-wrap")[0];
      if (index == 0) {
        ul.style.transform =
          "translateX" + "(" + "-" + 900 * index + "rem" + ")";
      } else {
        ul.style.transform =
          "translateX" + "(" + "-" + 900 * index + "rem" + ")";
      }

      let self = this;
      this.timeOutId = setTimeout(function() {
        self.carousel();
      }, 3000);
    }
  },

  destoryed() {
    clearInterval(this.timeId);
  }
};
</script>

<style lang="css" scoped>
.cate-main {
  width: 900px;
  height: 200px;
  position: relative;
}
  .carousel-contain {
    width: 900px;
    height: 200px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
    .carousel-wrap {
      list-style: none;
      width: 314.29rem;
      padding: 0;
    }
      .carousel-slide {
        float: left;
      }
    
    .transition {
      transition: all 1s ease;
    }
    .carousel-button-wrap {
      position: absolute;
      bottom: 0;
      left: 28.285rem;
    }
      .carousel-button-slide {
        display: inline-block;
        width: 6rem;
        height: 0.5rem;
        margin-right: 2rem;
        opacity: 0.5;
        background: #ffffff;
        border-radius: 0;
      }
      .active {
        opacity: 1;
      }
</style>
