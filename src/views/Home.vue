<template>
  <div class="home">
    <router-link to="/about">about</router-link> |
    <router-link to="/aflex">Aflex</router-link> |
    <router-link to="/acenter">Acenter</router-link> |
    <router-link to="/wheelZoom">WheelZoom</router-link>
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <el-button>按钮</el-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="less">
.home{
  margin:50px; 
  border: 1px solid #000000; 
  background-color: lightblue;
}
</style>
