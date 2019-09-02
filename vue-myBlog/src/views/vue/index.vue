<template>
  <div class="vue-study">
    <sider-bar
      @change-content="changeContent"
      @change-title="changeTitle"
    ></sider-bar>
    <div class="right-container">
      <div class="title">
        <svg-icon icon-class="study" />
        <div class="name">{{ title }}</div>
      </div>
      <div class="body">
        <sub-bar></sub-bar>

        <el-scrollbar wrap-class="scrollbar-wrapper">
          <div v-html="content"></div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import SiderBar from "./components/SiderBar";
import SubBar from "./components/SubBar";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },

  components: {
    SiderBar,
    SubBar
  },

  computed: {},

  mounted() {},

  methods: {
    changeContent(content) {
      console.log(content);
      this.content = content;
    },
    changeTitle(title) {
      console.log(title);
      this.title = title;
    }
  }
};
</script>
<style scoped lang="scss">
.vue-study {
  width: 100%;
  display: flex;
  height: calc(100vh - 84px);
  > .right-container {
    flex: 1;
    > .title {
      height: 70px;
      line-height: 70px;
      background: #eaedf1;
      padding-left: 20px;
      position: relative;
      > .name {
        position: absolute;
        top: -10px;
        left: 50px;
        font-weight: bold;
        font-size: 20px;
        height: 10px;
      }
    }
    > .body {
      display: flex;
      height: calc(100% - 70px);
      padding-left: 10px;
      padding-top: 10px;
      .el-scrollbar {
        flex: 1;
        /deep/ p,
        /deep/ pre {
          padding: 8px 10px;
        }
        /deep/ img {
          text-align: center;
          width: 600px;
        }
      }
      /deep/ .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
  }
}
</style>
