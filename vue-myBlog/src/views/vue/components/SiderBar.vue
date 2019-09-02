<template>
  <div class="nav-siderbar" :style="sidebarStyle">
    <div class="title">Vue面试题</div>
    <el-input
      placeholder="检索..."
      size="mini"
      prefix-icon="el-icon-search"
    ></el-input>
    <ul>
      <li
        v-for="(item, index) in list"
        :class="[current == index ? 'item-select' : 'item']"
        @click="selectMenu(index, $event, item)"
        :key="index"
      >
        <el-tooltip effect="dark" :content="item.name" placement="right">
          <div class="text-ellipsis">
            {{ item.name }}
          </div>
        </el-tooltip>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api";
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
      current: 0, //当前点击主菜单的索引
      pid: null,
      list: []
    };
  },

  components: {},

  computed: {},
  created() {
    this.getVueLits();
  },
  mounted() {},

  methods: {
    selectMenu(index, event, item) {
      this.current = index;
      this.pid = item.pid;

      this.$emit("change-title", item.name);
      if (item.isLeaf) {
        this.getVueSublists();
      }
    },
    async getVueLits() {
      let { data } = await api.vue.getVuelists();
      this.list = data.data;
    },
    async getVueSublists() {
      let { data } = await api.vue.getVueSublists({
        queryParams: {
          pid: this.pid
        }
      });
      this.$emit("change-content", data.data.content);
    }
  }
};
</script>
<style scoped lang="scss">
.nav-siderbar {
  display: inline-block;
  min-width: 140px;
  background: #eaedf1;
  .title {
    font-weight: 700;
    font-size: 14px;
    height: 70px;
    line-height: 70px;
    background: #d9dee4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 30px;
  }
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
