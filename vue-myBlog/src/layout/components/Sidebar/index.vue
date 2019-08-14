<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper"> </el-scrollbar>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import Logo from "./Logo";

export default {
  data() {
    return {
      showLogo: false
    };
  },
  components: { Logo }
  //   computed: {
  //     ...mapGetters(["sidebar"]),
  //     showLogo() {
  //       return this.$store.state.settings.sidebarLogo;
  //     },
  //     isCollapse() {
  //       return !this.sidebar.opened;
  //     }
  //   }
};
</script>
