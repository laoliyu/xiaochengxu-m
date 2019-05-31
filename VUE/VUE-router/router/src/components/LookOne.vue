<template>
  <div class="Look-one">
    {{msg}}
    <div class="go-to" @click="goTwo">去look2</div>
  </div>
</template>
<script>
export default {
  name: "LookOne",
  data() {
    return {
      msg: "你瞅啥"
    }
  },
  method:{
      goTwo(){
          this.$router.push({
              name:'/LookTwo',params:{id:123456}
          })
      }
  },
//   钩子函数
beforeRouteEnter (to, from, next) {
    console.log(from, to)
    next()
},
beforeRouteLeave (to, from, next) {
    console.log(to,from)
    next()
}


}
</script>