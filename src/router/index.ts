import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // 路由级代码拆分
    // 这会为此路由生成一个单独的块（about.[hash].js）
    // 访问路由时延迟加载。
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/aflex",
    name: "Aflex",
    component: () => import( "../views/Aflex.vue"),
  },
  {
    path: "/acenter",
    name: "Acenter",
    component: () => import( "../views/Acenter.vue"),
  },
  {
    path: "/wheelZoom",
    name: "WheelZoom",
    component: () => import( "../views/WheelZoom.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
