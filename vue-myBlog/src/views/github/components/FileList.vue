<template>
  <div id="fileList">
    <ul>
      <el-table
        height="500"
        center
        ref="gitHubListTable"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="rootDir"
        size="mini"
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column property="name" label="文件名">
          <template slot-scope="scope">
            <svg-icon :icon-class="rootDir.type === 'dir' ? 'dir' : 'file'" />
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column property="clone_url" label="提交日期">
        </el-table-column>
        <el-table-column property="description" label="提交信息">
        </el-table-column>
        <el-table-column property="description" label="提交者">
        </el-table-column>
      </el-table>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootDir: [
        {
          name: "itemsome",
          path: "itemsome",
          sha: "1c77879972b99c72bb093b1b1473245fad156ff0",
          size: 0,
          url:
            "https://api.github.com/repos/LiQinFei/baiyaoshi/contents/itemsome?ref=master",
          html_url:
            "https://github.com/LiQinFei/baiyaoshi/tree/master/itemsome",
          git_url:
            "https://api.github.com/repos/LiQinFei/baiyaoshi/git/trees/1c77879972b99c72bb093b1b1473245fad156ff0",
          download_url: null,
          type: "dir",
          _links: {
            self:
              "https://api.github.com/repos/LiQinFei/baiyaoshi/contents/itemsome?ref=master",
            git:
              "https://api.github.com/repos/LiQinFei/baiyaoshi/git/trees/1c77879972b99c72bb093b1b1473245fad156ff0",
            html: "https://github.com/LiQinFei/baiyaoshi/tree/master/itemsome"
          }
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style scoped></style>
