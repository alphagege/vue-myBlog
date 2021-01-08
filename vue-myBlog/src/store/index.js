/*
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2019-12-24 10:53:25
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-08 14:46:26
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import getters from "./getters";
import app from "./modules/app"; // 应用本身的store
import user from "./modules/user"; // 用户的store
import settings from "./modules/settings"; // 应用本身主题，是否显示设置，tagsview,是否固定头部，侧边栏的logo
import tagsView from "./modules/tagsView"; // 快速导航
import createPersistedState from "vuex-persistedstate"; // 解决vuex刷新数据丢失或者重置的问题

export default new Vuex.Store({
  plugins: [
    // createPersistedState(
    // {
    // storage: window.sessionStorage,
    // reducer(val) {
    //   return {
    //     // 只储存state中的assessmentData
    //     app: val.app,
    //     user: val.user,
    //     settings: val.settings,
    //     tagsView: val.tagsView
    //   };
    // }
    // }
    // )
  ],
  getters,
  modules: {
    app,
    user,
    settings,
    tagsView
  }
});
