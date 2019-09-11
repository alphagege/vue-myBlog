<template>
  <div class="vue-study">
    <sider-bar :list="list" @listActive="listActive"></sider-bar>
    <div class="right-container">
      <div class="title">
        <svg-icon icon-class="study" />
        <div class="name">{{ currentItem.name }}</div>
      </div>
      <div class="body">
        <transition
          name="flip"
          enter-active-class="animated flipInX"
          leave-active-class="animated flipInX"
          :duration="500"
        >
          <sub-bar
            ref="mySubBar"
            v-show="childrenList.length"
            :children-list="currentItem.children"
            @listChildrenActive="listChildrenActive"
          ></sub-bar>
        </transition>
        <el-scrollbar
          wrap-class="scrollbar-wrapper"
          v-loading="loading"
          ref="myScrollbar"
        >
          <div v-html="content" v-show="content"></div>
          <div v-show="!content">
            <model-obj
              :src="objFilePath"
              :mtl="mtlFilePath"
              :rotation="rotation"
              :position="position"
              @on-click="mouseclick"
            ></model-obj>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import SiderBar from "./components/SiderBar";
import SubBar from "./components/SubBar";
import { ModelObj } from "vue-3d-model";
export default {
  name: "Vue",
  data() {
    return {
      list: [],
      currentItem: {},
      childrenList: [],
      content: "",
      loading: false,
      publicPath: process.env.BASE_URL,
      // rotation: { x: 5, y: 0, z: 0 },
      // position: { x: 0, y: -60, z: 0 }
      rotation: { x: 0, y: -0.5, z: 0 },
      position: { x: 0, y: 0, z: 0 }
    };
  },

  components: {
    SiderBar,
    SubBar,
    ModelObj
  },

  created() {
    this.getVueLits();
  },
  mounted() {},

  methods: {
    async getVueLits() {
      let { data } = await api.vue.getVuelists();
      this.list = data.data;
      this.currentItem = this.list[0];
      this.getVueContent(); //默认请求第一个主菜单的content
    },
    // 子组件点击菜单触发父组件的逻辑，并传入当前点击项
    listActive(item) {
      this.currentItem = item;
      this.childrenList = item.children;
      this.$refs["mySubBar"].current = null; // 置空子目录点击样式
      if (this.currentItem.isLeaf) {
        this.getVueContent();
        this.scrollUp();
      }
    },
    async getVueContent() {
      this.loading = true;
      let { data } = await api.vue.getVueContent({
        queryParams: {
          pid: this.currentItem.pid
        }
      });
      this.content = data.data.content;
      this.loading = false;
    },
    scrollUp() {
      this.$refs["myScrollbar"].wrap.scrollTop = "0px";
    },
    async listChildrenActive(item) {
      if (item.isLeaf) {
        this.loading = true;
        let { data } = await api.vue.getVueContent({
          queryParams: {
            pid: item.pid
          }
        });
        this.content = data.data.content;
        this.loading = false;
        this.scrollUp();
      }
    },
    mouseclick() {
      this.$message({
        type: "warning",
        message: "I'm a 3D tree",
        duration: 3000
      });
    }
  },
  computed: {
    objFilePath() {
      return `${this.publicPath}static/tree.obj`;
    },
    mtlFilePath() {
      return `${this.publicPath}static/tree.mtl`;
    }
  }
};
</script>
<style scoped lang="scss">
@import "~@/styles/code.scss";
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
        padding: 5px 10px;
        flex: 1;
        /deep/ blockquote.danger {
          color: #d9534f;
          background-color: #fdf7f7;
          border-color: #d9534f;
        }
        /deep/ blockquote.info {
          border-left-color: #5bc0de;
          color: #5bc0de;
          background-color: #f4f8fa;
        }
        /deep/ p,
        /deep/ pre {
          line-height: 2;
          padding: 8px;
        }
        /deep/ li {
          line-height: 2;
        }
        /deep/ pre {
          padding: 16px;
          overflow: auto;
          line-height: 1.45;
          background-color: #f7f7f7;
          border: 0;
          border-radius: 3px;
          font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
        }
        /deep/ img {
          max-width: 100%;
        }
      }
      canvas {
        cursor: pointer;
      }
      /deep/ .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
  }
}
</style>
