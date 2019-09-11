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
        @click="selectMenu(item, index)"
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
    },
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      current: 0, //当前点击主菜单的索引
      currentItem: {}
    };
  },

  components: {},

  computed: {},
  created() {},
  mounted() {},

  methods: {
    selectMenu(item, index) {
      this.current = index;
      this.currentItem = item;
      this.$emit("listActive", this.currentItem);
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
