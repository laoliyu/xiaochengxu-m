
<template>
  <div class="tab-head">
    <ul class="tab-list">
      <li
        v-for="(item,index)  in tabList" :key="index"
        v-on:click="addClass(index)"
        v-bind:class="{ active:index==current}"
      >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        { id: 0, title: "首页1" },
        { id: 1, title: "首页2" },
        { id: 2, title: "首页3" }
      ],
      current:0
    };
  },
  methods: {
    addClass: function(index) {
      this.current = index;
    }
  }
};


</script>
<style lang="css" scoped>
.tab-list{
  width: 100%;
  height: 45px;
  background: rgb(84, 92, 100);
  position: absolute;
  top: 0;
  left: 0;
}
.tab-list li{
  float: left;
  cursor: pointer;
  height: 41px;
  line-height: 45px;
  padding: 0 30px;
  color: #fff;
}
.tab-list li:hover{
  color: rgb(255, 208, 75);
  background: rgb(64, 74, 80);
  border-bottom: 4px solid rgb(64, 74, 80);
}
.tab-list li.active{
  border-bottom: 4px solid rgb(255, 208, 75);
}
.active{
  color: rgb(255, 208, 75);
  background: rgb(64, 74, 80)
}
</style>