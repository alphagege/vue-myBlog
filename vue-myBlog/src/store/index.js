import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import getters from "./getters";
import app from "./modules/app"; // 应用本身的store
import user from "./modules/user"; // 用户的store
import settings from "./modules/settings"; // 应用本身主题，是否显示设置，tagsview,是否固定头部，侧边栏的logo
import tagsView from "./modules/tagsView"; // 快速导航
export default new Vuex.Store({
  getters,
  modules: {
    app,
    user,
    settings,
    tagsView
  }
});
