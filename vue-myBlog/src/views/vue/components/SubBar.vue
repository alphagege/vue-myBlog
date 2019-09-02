<template>
  <div class="sub-siderbar" :style="sidebarStyle">
    <ul>
      <li
        v-for="(item, index) in list"
        :class="[current == index ? 'item-select' : 'item']"
        @click="selectMenu(index, $event)"
        :key="index"
      >
        <div class="text-ellipsis">
          {{ item.repoName }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sidebarStyle: {
      type: Object,
      default: function() {
        return {
          width: "180px",
          height: "100%"
        };
      }
    }
  },
  data() {
    return {
      current: 0,
      list: [
        {
          repoId: "10",
          projectId: "1",
          repoName: "nais-archive",
          repoFullName: "nais\/nais-service\/nais-archive",
          repoType: "Gitlab",
          repoUrl: "http:\/\/9.1.9.190\/nais\/nais-service\/nais-archive.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "12",
          description: null,
          extend: "{}",
          createUser: "hancx",
          createTime: "2019-08-28 17:17:06.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "11",
          projectId: "1",
          repoName: "nais-ui",
          repoFullName: "nais\/nais-ui\/nais-ui",
          repoType: "Gitlab",
          repoUrl: "http:\/\/dongwj@9.1.9.190\/nais\/nais-ui\/nais-ui.git",
          userName: "yangym",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "23",
          description: null,
          extend: "{}",
          createUser: "yangym",
          createTime: "2019-08-29 11:24:30.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "12",
          projectId: "1",
          repoName: "nais-plan-management",
          repoFullName: "nais\/nais-service\/nais-plan-management",
          repoType: "Gitlab",
          repoUrl:
            "http:\/\/9.1.9.190\/nais\/nais-service\/nais-plan-management.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "16",
          description: null,
          extend: "{}",
          createUser: "yaoyy",
          createTime: "2019-08-29 11:59:45.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "13",
          projectId: "1",
          repoName: "storage",
          repoFullName: "nais\/nais-service\/storage",
          repoType: "Gitlab",
          repoUrl: "http:\/\/9.1.9.190\/nais\/nais-service\/storage.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "18",
          description: null,
          extend: "{}",
          createUser: "yaoyy",
          createTime: "2019-08-29 15:44:58.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "14",
          projectId: "1",
          repoName: "nais-gateway",
          repoFullName: "nais\/nais-service\/nais-gateway",
          repoType: "Gitlab",
          repoUrl: "http:\/\/9.1.9.190\/nais\/nais-service\/nais-gateway.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "10",
          description: null,
          extend: "{}",
          createUser: "yaoyy",
          createTime: "2019-08-29 15:50:44.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "4",
          projectId: "1",
          repoName: "nais-coframe",
          repoFullName: "nais\/nais-service\/nais-coframe",
          repoType: "Gitlab",
          repoUrl: "http:\/\/9.1.9.190\/nais\/nais-service\/nais-coframe.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "13",
          description: null,
          extend: "{}",
          createUser: "yangym",
          createTime: "2019-08-26 15:59:25.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default"
        },
        {
          repoId: "5",
          projectId: "1",
          repoName: "nais-project",
          repoFullName: "nais\/nais-service\/nais-project",
          repoType: "Gitlab",
          repoUrl: "http:\/\/9.1.9.190\/nais\/nais-service\/nais-project.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "17",
          description: null,
          extend: "{}",
          createUser: "yangym",
          createTime: "2019-08-26 18:08:10.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "6",
          projectId: "1",
          repoName: "nais-bpm",
          repoFullName: "nais\/nais-service\/nais-bpm",
          repoType: "Gitlab",
          repoUrl: "http:\/\/9.1.9.190\/nais\/nais-service\/nais-bpm.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "19",
          description: null,
          extend: "{}",
          createUser: "yangym",
          createTime: "2019-08-27 10:26:25.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "7",
          projectId: "1",
          repoName: "nais-users-sync",
          repoFullName: "nais\/nais-service\/nais-users-sync",
          repoType: "Gitlab",
          repoUrl:
            "http:\/\/9.1.9.190\/nais\/nais-service\/nais-users-sync.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "21",
          description: null,
          extend: "{}",
          createUser: "yangym",
          createTime: "2019-08-27 17:07:53.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "8",
          projectId: "1",
          repoName: "nais-plan-management",
          repoFullName: "nais\/nais-service\/nais-plan-management",
          repoType: "Gitlab",
          repoUrl:
            "http:\/\/hancx@9.1.9.190\/nais\/nais-service\/nais-plan-management.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "16",
          description: null,
          extend: "{}",
          createUser: "hancx",
          createTime: "2019-08-28 15:43:51.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        },
        {
          repoId: "9",
          projectId: "1",
          repoName: "nais-workbench",
          repoFullName: "nais\/nais-service\/nais-workbench",
          repoType: "Gitlab",
          repoUrl: "http:\/\/9.1.9.190\/nais\/nais-service\/nais-workbench.git",
          userName: "devops",
          password: null,
          publicKey: null,
          apiPrivateToken: "QV-C4W44K7RZRAs_JWCQ",
          branchPolicy: "TBD",
          targetSystem: null,
          targetRepoId: "11",
          description: null,
          extend: "{}",
          createUser: "hancx",
          createTime: "2019-08-28 17:12:19.0",
          updateUser: null,
          updateTime: null,
          tenantId: "default",
          componentIds: "3"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    selectMenu(index, event) {
      this.current = index;
    }
  }
};
</script>
<style scoped lang="scss">
.sub-siderbar {
  display: inline-block;
  min-width: 140px;
  background: #eaedf1;
  > ul {
    > .item {
      min-width: 140px;
      height: 32px;
      line-height: 32px;
      display: block;
      color: #333;
      padding-left: 30px;
      cursor: pointer;
      font-size: 12px;
      &:hover {
        background: #f4f4f4;
      }
    }
    > .item-select {
      min-width: 140px;
      height: 32px;
      line-height: 32px;
      display: block;
      color: #333;
      padding-left: 30px;
      cursor: pointer;
      font-size: 12px;
      background: #fff;
    }
  }
}
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
