<template>
  <div class="navigate-wrapper">
    <div class="plane">
      <span>任务追踪</span>
      <div class="create">
        <router-link to="/time">创建一个任务</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import create from "./create";
export default {
  data() {
    return {};
  },
  components: {
    "v-create": create
  }
};
</script>

<style lang="css" scoped>
.navigate-wrapper {
  width: 100%;
  height: 110px;
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #d0d0d0;
  background-color: #f5f5f5;
  border-radius: 10px;
}
.plane span {
  font-weight: bold;
  margin-left: 20px;
  font-size: 30px;
}
.create {
  margin-top: 10px;
}

</style>
