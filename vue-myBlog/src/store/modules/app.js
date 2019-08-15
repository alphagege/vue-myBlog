import Cookies from "js-cookie";
console.log(Cookies.get("sidebarStatus")); //刚进来的时候是undefined
import * as types from "../mutations-type";

const state = {
  sidebar: {
    opened: Cookies.get("sidebarStatus") // undefined和0的情况 返回true 也就是展开，刚进来默认展开
      ? !!+Cookies.get("sidebarStatus") // !!+ 是转数字 再转boolean  0就是false 1就是true
      : true
  },
  device: "desktop" // 标识当前设备
};

const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    state.sidebar.opened = !state.sidebar.opened; // 取反
    if (state.sidebar.opened) {
      // 展开状态下 cookie存值位1
      Cookies.set("sidebarStatus", 1);
    } else {
      // 闭合状态下 cookie存值位0
      Cookies.set("sidebarStatus", 0);
    }
  },
  [types.TOGGLE_DEVICE]: (state, device) => {
    state.device = device;
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit(types.TOGGLE_SIDEBAR);
  },
  toggleDevice({ commit }, device) {
    commit(types.TOGGLE_DEVICE, device);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
