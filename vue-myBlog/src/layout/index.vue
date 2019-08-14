<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
export default {
  name: "Layout",
  data() {
    return {};
  },

  components: {
    Sidebar
  },

  computed: {
    classObj() {
      return {
        // hideSidebar: !this.sidebar.opened, // 隐藏侧边栏所用的样式
        // openSidebar: this.sidebar.opened, // 打开侧边栏所用的样式
        // withoutAnimation: this.sidebar.withoutAnimation, // 暂时不知
        // mobile: this.device === "mobile" // 设备分辨率标识
      };
    }
  },

  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
