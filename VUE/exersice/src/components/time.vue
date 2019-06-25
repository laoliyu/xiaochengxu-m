<template>
    <div class="con">
        <div class="title">
            <h1>创建</h1>
        </div>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
        </div>
        
    </div>
</template>

<script>
export default {
data(){
    return{
        value1:'',
    }
}
}
</script>

<style>

</style>
