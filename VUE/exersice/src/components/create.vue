<template>
    <div class="create-wrapper">
        <div class="button-wrapper">
            
            <router-link to="/time"> <el-button type="primary">创建</el-button></router-link>
              <el-divider content-position="right"></el-divider>
        </div>
        <div class="cteate-excise">
            你还没有任何记录
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.create-wrapper{
    width: 100%;
    height: 100px;
       margin-top: 20px;
       margin-left: 20px;
}
.button-wrapper{
    width: 100%;
    height: 50px;
 
 
}
.cteate-excise{
    margin-top: 40px;
    font-weight: bold;
}
</style>
