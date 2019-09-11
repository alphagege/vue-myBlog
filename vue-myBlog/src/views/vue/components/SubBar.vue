<template>
  <div class="nav-siderbar" :style="sidebarStyle">
    <ul>
      <li
        v-for="(item, index) in childrenList"
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
    childrenList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      current: null, //当前点击主菜单的索引
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
      this.$emit("listChildrenActive", this.currentItem);
    }
  }
};
</script>
<style scoped lang="scss">
.nav-siderbar {
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
      padding-left: 10px;
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
      padding-left: 10px;
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
