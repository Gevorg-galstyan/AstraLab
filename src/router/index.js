import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "sign-in" */ "../views/SignIn.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "sign-un" */ "../views/SignUp.vue"),
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: () =>
      import(/* webpackChunkName: "sign-un" */ "../views/Welcome.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
