<template>
  <el-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading"
    class="search"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
 
 
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "食物",
        "母婴",
        "女装",
        "生鲜",
        "家电",
        "美妆护理",
        "男装",
        "家纺",
        "手机电脑",
        "大家电",
        "车品",
        "苏宁极物",
        "鞋子",
        "包包",
        "内衣",
        "宠物",
        "绿植",
        "珠宝配饰",
        "运动户外",
        "图书",
        "女鞋",
        "男鞋",
        "短袖",
        "长袖",
        "棉袄",
        "零食",
        "海外代购",
        "老母鸡",
        "精选好货",
        "每日特价",
        "免费赠送"
      ]
    };
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
};
</script>
<style lang="css" scoped>
.search {
  width: 90%;
  margin-left: 5%;
  position: absolute;
  left: 0px;
  top: 10px;
  z-index: 1;
  opacity: 0.8;
}
</style>