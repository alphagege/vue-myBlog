import Cookies from "js-cookie";
console.log(Cookies.get("sidebarStatus")); //刚进来的时候是undefined

const state = {
  sidebar: {
    opened: Cookies.get("sidebarStatus") // undefined和0的情况 返回true 也就是展开，刚进来默认展开
      ? !!+Cookies.get("sidebarStatus") // !!+ 是转数字 再转boolean  0就是false 1就是true
      : true
  }
};

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened; // 取反
    if (state.sidebar.opened) {
      // 展开状态下 cookie存值位1
      Cookies.set("sidebarStatus", 1);
    } else {
      // 闭合状态下 cookie存值位0
      Cookies.set("sidebarStatus", 0);
    }
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
