/*
 * @Descriptions:
 * @Version:
 * @Author:
 * @Date: 2021-01-07 17:44:29
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-07 18:08:12
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


const constantRoutes = [
  {
    path: "/",
    redirect: "/subpage1",
  },
  {
    name: "subpage1",
    path: "/subpage1",
    component: () =>
      import("@/subviews/subviews1/index")
  },
  {
    name: "subpage2",
    path: "/subpage2",
    component: () =>
      import("@/subviews/subviews2/index")
  }];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  });

const router = createRouter();
export default router;