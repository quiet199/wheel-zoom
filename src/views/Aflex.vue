<template>
    <div v-for="(v, i) in list" :key="i" class="row">
        <div v-for="(text, k) in v" :key="k" class="item">
            <span>{{text}}</span>
        </div>
    </div>

    <ul class="flex-container">
        <li class="flex-item" v-for="(item ,index) in numList" :key="index">
           {{item}}
        </li>
    </ul>

    <div class="myDiv0">
        <span v-for="(item, index) in numList" :key="index">{{item}}</span>
    </div>
</template>
<script lang="ts" setup>
    import { reactive } from 'vue';
    
    const list = reactive([
                    ['A', 'B', 'C'],
                    ['D', 'E', 'F'],
                    ['G', 'H', 'I']
                 ]);

    const numList = reactive([1,2,3,4]);

</script>
<style lang='less' scoped>
.row {
    flex-direction: row;
    height: 80px;
    .item {
        flex: 1;
        justify-content: center;
        align-items: center;
        border-width: 1;
        border-style: solid;
        border-color: #FFFFFF;
        background-color: #00AAFF;
    }
}

.flex-container {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: flex-end;
    align-items: flex-end;
    .flex-item{
        width: 50px;
        height: 50px;
        background-color:#fff;
        color: #000;
        border: 1px solid blue;
    }
    .flex-item:nth-child(1) {
        order: 1;
        flex: 0 1 auto;
        align-self: auto;
    }

    .flex-item:nth-child(2) {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
    }

    .flex-item:nth-child(3) {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
    }
}

.myDiv0 {
    width: 1200px;
    height: 200px;
    background-color: pink;
    span {
        width: 150px;
        height: 150px;
        background-color: lightgreen;
    }
}
</style>