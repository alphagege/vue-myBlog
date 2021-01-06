/*
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2019-12-24 10:53:25
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-28 10:57:17
 */
import Vue from "vue/dist/vue.esm";
import App from "./App.vue";
import router from "./router";
// Vue.config.errorHandler = function (err) {
//   console.error('Vue.error', err.stack)
//   // 逻辑处理
// };
// Vue.config.warnHandler = function (msg, vm, trace) {
//   // `trace` 是组件的继承关系追踪
//   console.warn('warn', msg, vm, trace)
//   // 逻辑处理
// }

// Vue.config.errorHandler = function (err, vm, info, a) {
//   // Don't ask me why I use Vue.nextTick, it just a hack.
//   // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
//   Vue.nextTick(() => {

//     console.error(err, info)
//   })
// }

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import Element from "element-ui";
import "./styles/element-variables.scss";

import "@/styles/index.scss"; // global css

Vue.use(Element);

import "./permission";

import "./icons";

import animated from "animate.css"; // npm install animate.css --save安装，在引入

Vue.use(animated);


//引入数字滚动组件
import VueCountUp from "vue-countupjs";
Vue.use(VueCountUp);

import vuePicturePreview from 'vue-picture-preview';
Vue.component('Previewer', vuePicturePreview);

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer)


import htmlToPdf from "../src/utils/htmlToPdf"
Vue.use(htmlToPdf)

import store from "./store/index.js";
import "./directive/errorImg.js";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
