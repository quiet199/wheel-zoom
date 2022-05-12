<template>

    <div class="myDiv1">
         <span v-for="(item, index) in list" :key="index">{{item}}</span>
    </div>

    <div class="myDiv2">
        <span v-for="(item, index) in list" :key="index">{{item}}</span>
    </div>

    <div class="myDiv3">
        <span v-for="(item, index) in manyList" :key="index">{{item}}</span>
    </div>
</template>
<script lang="ts" setup>
    import { reactive } from 'vue';
    const list = reactive([1,2,3,4]);
    const manyList = reactive([1,2,3,4,5,6,7,8,9,10,11]);
</script>
<style lang="less" scoped>

.myDiv1{
    width: 1200px;
    height: 200px;
    background-color:pink;
    margin-top:10px;
    display:flex;
    /* 主轴为x轴，从右往左 */
    flex-direction: row-reverse;
    span{
        width:150px;
        height:150px;
        background-color:lightgreen;
    }
}

.myDiv2{
    width:1200px;
    height: 200px;
    background-color:pink;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    span{
        width:150px;
        height: 150px;
        background-color:lightgreen;
    }
}

.myDiv3{
    width:1200px;
    height: 300px;
    background-color:pink;
    display: flex;
    /* 换行，默认是不换行的 */
    flex-wrap: wrap;
    span{
        width:120px;
        height: 120px;
        background-color:lightgreen;
    }
}
</style>