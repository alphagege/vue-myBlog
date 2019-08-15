import variables from "@/styles/element-variables.scss";
import defaultSettings from "@/settings";
import * as types from "../mutations-type";

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings;

const state = {
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
};

const mutations = {
  [types.CHANGE_SETTING](state, { key, value }) {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  }
};

const actions = {
  changeSetting({ commit }, data) {
    commit(types.CHANGE_SETTING, data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
