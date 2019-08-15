import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import getters from "./getters";
import app from "./modules/app"; // 应用本身的store
import user from "./modules/user"; // 用户的store
export default new Vuex.Store({
  getters,
  modules: {
    app,
    user
  }
});
