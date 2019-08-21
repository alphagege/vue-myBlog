import Vue from "vue";
import Router from "vue-router";
import Layout from "../layout";

Vue.use(Router);

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   是否在侧边栏显示
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             用于 <keep-alive>必须设置
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               面包屑和菜单显示的文字 (recommend set)
    icon: 'svg-name'            菜单显示的图图标
    noCache: true                if set true, the page will no be cached(default is false) 不被缓存
    affix: true                  if set true, the tag will affix in the tags-view 配置为true，则tagsview的span标签固定到组建中并且没有删除功能的icon 右键菜单也没有删除自身功能
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
const constantRoutes = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/index")
  },
  {
    path: "/",
    component: Layout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/documentation",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/documentation/index"),
        name: "Documentation",
        meta: { title: "Documentation", icon: "documentation", affix: false }
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();
export default router;
