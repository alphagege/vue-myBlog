<template>
  <div class="github">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div>
          <img
            src="../../assets/img/avatar.jpg"
            class="avatar"
            v-real-img="userInfo.avatar_url"
            @click="linkGithunUrl"
          />
          <span class="username">{{ userInfo.login }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-table
        ref="gitHubTable"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
        size="mini"
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column property="name" label="仓库名"> </el-table-column>
        <el-table-column property="clone_url" label="clone地址">
        </el-table-column>
        <el-table-column property="description" label="描述"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-view"
              @click="checkResp(scope.$index, scope.row)"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-dialog :visible.sync="dialogVisible" width="80%" center>
      <fileList></fileList>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api";
import FileList from "./components/FileList";
export default {
  data() {
    return {
      author: "LiQinFei",
      userInfo: {
        login: "",
        id: "",
        node_id: "",
        avatar_url: require("@/assets//img/avatar.jpg"),
        gravatar_id: "",
        url: "",
        html_url: "",
        followers_url: "",
        following_url: "",
        gists_url: "",
        starred_url: "",
        subscriptions_url: "",
        organizations_url: "",
        repos_url: "",
        events_url: "",
        received_events_url: "",
        type: "",
        site_admin: "",
        name: "",
        company: "",
        blog: "",
        location: "",
        email: "",
        hireable: "",
        bio: "",
        public_repos: "",
        public_gists: "",
        followers: "",
        following: "",
        created_at: "",
        updated_at: ""
      },
      tableData: [],
      loading: false,
      dialogVisible: false
    };
  },

  components: {
    FileList
  },

  computed: {},
  async created() {
    this.getUserInfo();
    this.getRespoInfo();
  },
  mounted() {},

  methods: {
    async getUserInfo() {
      let { data } = await api.github.getGithubInfo({
        pathParams: {
          user: this.author
        }
      });
      this.userInfo = data;
    },
    async getRespoInfo() {
      this.loading = true;
      let { data } = await api.github.getReposInfo({
        pathParams: {
          user: this.author
        }
      });
      this.tableData = data;
      this.loading = false;
    },
    linkGithunUrl() {
      var a = document.createElement("a");
      a.setAttribute("href", this.userInfo.html_url);
      a.setAttribute("target", "_blank");
      a.setAttribute("id", "camnpr");
      document.body.appendChild(a);
      a.click();
    },
    checkResp(index, row) {
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped lang="scss">
.github {
  padding: 10px 32px;
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    vertical-align: middle;
    cursor: pointer;
  }
  .username {
    margin-left: 10px;
  }
  .el-row {
    padding: 16px;
    margin-bottom: 16px;
  }
}
</style>
