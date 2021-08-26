import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Settings from "../views/Settings.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "x",
    component: Home,
  },
    {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  }, 
 // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
