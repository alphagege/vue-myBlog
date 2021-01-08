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
const constantRoutes = [{
    name: "login",
    path: "/login",
    component: () =>
        import("@/views/login/index")
},
{
    path: "/",
    component: Layout,
    redirect: "/login",
    children: [{
        path: "dashboard",
        component: () =>
            import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: {
            title: "工作台",
            icon: "dashboard",
            affix: true
        }
    }]
},

{
    path: "/guide",
    component: Layout,
    children: [{
        path: "index",
        component: () =>
            import("@/views/guide/index"),
        name: "guide",
        meta: {
            title: "引导组件",
            icon: "guide",
            affix: false
        }
    }]
},
{
    path: "/vue",
    component: Layout,
    children: [{
        path: "index",
        component: () =>
            import("@/views/vue/index"),
        name: "vue",
        meta: {
            title: "面板组件",
            icon: "vuejs",
            affix: false
        }
    }]
},
{
    path: "/vr",
    component: Layout,
    children: [{
        path: "index",
        component: () =>
            import("@/views/vr/index"),
        name: "vr",
        meta: {
            title: "VR组件",
            icon: "vr",
            affix: false
        }
    }]
},
{
    path: "/slideyz",
    component: Layout,
    children: [{
        path: "index",
        component: () =>
            import("@/views/slideyz/index"),
        name: "slideyz",
        meta: {
            title: "滑块组件",
            icon: "vr",
            affix: false
        }
    }]
},

{
    path: "/themeChange",
    component: Layout,
    children: [{
        path: "index",
        component: () =>
            import("@/views/themeChange/index"),
        name: "ThemeChange",
        meta: {
            title: "主题切换效果",
            icon: "theme",
            affix: false
        }
    }]
},

{
    path: '/pdf',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/pdf/index"),
            name: 'pdf',
            meta: { title: 'PDF', icon: 'pdf' }
        }
    ]
},
{
    path: '/pdf/download',
    component: () =>
        import("@/views/pdf/download"),
    hidden: true
},

{
    path: '/countTo',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/countTo/index"),
            name: 'countTo',
            meta: { title: '数字滚动组件', icon: 'star' }
        }
    ]
},

{
    path: '/news',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/news/index"),
            name: 'news',
            meta: { title: '新闻', icon: 'theme' }
        }
    ]
},

{
    path: '/tinymce',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/tinymce/index"),
            name: 'news',
            meta: { title: '富文本编辑器', icon: 'size' }
        }
    ]
},

{
    path: '/picture-preview',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/picturePreview/index"),
            name: 'picture-preview',
            meta: { title: '图片预览', icon: 'shopping' }
        }
    ]
},

{
    path: '/video-player',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/videoPlayer/index"),
            name: 'video-player-demo',
            meta: { title: '视频播放', icon: 'eye-open' }
        }
    ]
},

{
    path: '/lodash',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/lodash/index"),
            name: 'lodash-demo',
            meta: { title: 'lodash', icon: 'list' }
        }
    ]
},

{
    path: '/drag-dialog',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/dragDialog/index"),
            name: 'drag-dialog-demo',
            meta: { title: '可拖拽弹窗', icon: 'message' }
        }
    ]
},


{
    path: '/small-component',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/smallComponent/index"),
            name: 'small-component-demo',
            meta: { title: '小组件', icon: 'eye' }
        }
    ]
},

{
    path: '/codeMirror',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/codeMirror/index"),
            name: 'coder-demo',
            meta: { title: '代码编辑器', icon: 'link' }
        }
    ]
},

{
    path: '/htmltopdf',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/htmltopdf/index"),
            name: 'htmltopdf-demo',
            meta: { title: 'html生成pdf', icon: 'link' }
        }
    ]
},

{
    path: '/dialog',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/dialog/index"),
            name: 'dialog-demo',
            meta: { title: '弹窗组件', icon: 'link' }
        }
    ]
},


{
    path: '/vuedraggable',
    component: Layout,
    children: [
        {
            path: 'index',
            component: () =>
                import("@/views/vuedraggable/index"),
            name: 'vuedraggable-demo',
            meta: { title: '拖拽组件', icon: 'link' }
        }
    ]
},

];

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