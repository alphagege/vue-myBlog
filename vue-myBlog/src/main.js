/*
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2019-12-24 10:53:25
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-09-13 17:37:17
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import Element from "element-ui";
import "./styles/element-variables.scss";

import "@/styles/index.scss"; // global css

Vue.use(Element);

import "./permission";

import "./icons";

import animated from "animate.css"; // npm install animate.css --save安装，在引入

Vue.use(animated);

import store from "./store/index.js";
import "./directive/errorImg.js";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
