<template>
  <div class="con">
    <div class="title">
      <h2>创建</h2>
    </div>
    <div class="time-con">
      <div class="block">
        <span class="demonstration">日期</span>
        <el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
      </div>
      <div class="title-time">
        <span class="demonstration">时间</span>
        <el-time-select
          v-model="value"
          :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
          placeholder="选择时间"
        ></el-time-select>
      </div>
    </div>
    <div class="content-input">
      <div class="input-c">备注</div>
      <el-input v-model="input" placeholder="comment"></el-input>
    </div>
    <div class="content-button">
      <el-row>
        
          <el-button type="primary">保存</el-button>
        <el-button type="danger">取消</el-button>
      </el-row>
        <el-divider content-position="right"></el-divider>
         <span>还没有任何记录</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      input: ""
    };
  }
};
</script>

<style lang="css" scoped>
.con {
  margin-left: 20px;
}
.title {
  border-bottom: 1px solid #d0d0d0;
}
.block {
  margin-top: 20px;
}
.time-con {
  display: flex;
}
.title-time {
  margin-top: 20px;
  margin-left: 20px;
}
.time-con span {
  height: 30px;
  display: block;
  font-weight: bold;
}
.content-input {
  margin-top: 20px;
}
.input-c {
  height: 30px;
  font-weight: bold;
}
.content-button{
    margin-top: 10px;
}
.content-button span{
    font-weight: bold;
}
</style>
