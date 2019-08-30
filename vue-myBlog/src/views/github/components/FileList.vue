<template>
  <div id="fileList">
    <el-table
      @row-click="getGithubSublist"
      v-loading="loading"
      height="500"
      center
      ref="gitHubListTable"
      :data="rootDir"
      size="mini"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column property="name" label="文件名">
        <template slot-scope="scope">
          <svg-icon :icon-class="scope.row.type === 'dir' ? 'dir' : 'file'" />
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column property="clone_url" label="提交日期"> </el-table-column>
      <el-table-column property="description" label="提交信息">
      </el-table-column>
      <el-table-column property="description" label="提交者"> </el-table-column>
    </el-table>
    <el-dialog
      :fullscreen="isFullScreen"
      top="10vh"
      :visible.sync="editorVisible"
      width="40%"
      :modal="false"
      :modal-append-to-body="false"
      center
      ><MyEditor
        v-if="editorVisible"
        :language="language"
        :codes="codes"
        :is-full-screen="isFullScreen"
        @onMounted="javascriptOnMounted"
        @onCodeChange="javascriptOnCodeChange"
        @toggleFullScreen="isFullScreen = !isFullScreen"
      />
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api";
import MyEditor from "./MyEditor.vue";
export default {
  props: {
    user: {
      type: String,
      required: true
    },
    respName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // 列表github信息
      rootDir: [],
      // 动效加载
      loading: false,
      path: "",
      editorVisible: false,
      codes: "",
      isFullScreen: false,
      language: "html",
      breadcrumbData: []
    };
  },

  components: {
    MyEditor
  },

  computed: {},
  created() {
    this.getGithubList();
  },
  mounted() {},

  methods: {
    // 获取Github仓库根目录
    async getGithubList() {
      this.loading = true;
      let { data } = await api.github.getReposRootInfo({
        pathParams: {
          user: this.user,
          respName: this.respName,
          path: this.path
        }
      });
      if (data instanceof Array) {
        this.rootDir = data;
      } else {
        // 转换语言
        this.language = this.changeMyEditotLanguage(data.name.split(".").pop());

        // base64解码 解决中文乱码
        this.codes = decodeURIComponent(escape(window.atob(data.content)));
        console.log(data.name.split(".").pop());
        this.editorVisible = true;
      }
      this.loading = false;
    },

    // 获取仓库子目录
    getGithubSublist(row, event, column) {
      (this.path = row.path), this.getGithubList();
    },
    javascriptOnCodeChange(value, event) {},
    javascriptOnMounted(edit) {},
    changeMyEditotLanguage(label) {
      if (label === "json") {
        return "json";
      }
      if (label === "css") {
        return "css";
      }
      if (label === "html") {
        return "html";
      }
      if (label === "ts" || label === "js") {
        return "javascript";
      }
      if (label === "sql") {
        return "sql";
      }
      return "editor";
    }
  }
};
</script>
<style scoped></style>
