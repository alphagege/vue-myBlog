<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in router"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  data: function() {
    return {
      router: this.$router.options.routes
    };
  },
  created() {},
  computed: {
    ...mapGetters(["sidebar"]),
    // 高亮的路径
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },

    // 是否显示logo
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },

    // 主题颜色
    variables() {
      return variables;
    },

    // 侧边栏伸缩展示的标识
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
