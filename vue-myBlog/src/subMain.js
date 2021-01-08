/*
 * @Descriptions:   
 * @Version: 
 * @Author: 
 * @Date: 2021-01-07 17:42:05
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-08 16:26:04
 */
import Vue from "vue/dist/vue.esm";
import subApp from "./subApp.vue";
import router from "./subrouter";
import Element from "element-ui";
import "./styles/element-variables.scss";
import "@/styles/index.scss"; // global css
Vue.use(Element);


import store from "./store/index.js";
new Vue({
  store,
  router,
  render: h => h(subApp)
}).$mount("#output");
