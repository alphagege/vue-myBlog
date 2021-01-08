<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2021-01-06 17:05:21
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-06 17:27:34
-->
<template>
  <div class="">
    <el-tabs v-model="activeName">
      <el-tab-pane
        v-for="(item, index) in Object.keys(baseComponents)"
        :key="index"
        :label="item"
        :name="item"
      >
        <component :is="item" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// 局部批量引入示例组件：(其组件目录的相对路径, 是否查询其子目录, 匹配基础组件文件名的正则表达式)
const requireComponent = require.context("./components", true, /\w+\.vue$/);
// 获取所有组件对象
const baseComponents = requireComponent
  .keys()
  .reduce((preModule, curModule) => {
    // 模块对象
    let value = requireComponent(curModule);
    // 组件名
    let moduleName = curModule.replace(/^\.\/(.*)\.\w+$/, "$1").split("/")[0];
    preModule[moduleName] = value.default;
    return preModule;
  }, {});

export default {
  name: "",
  components: {
    ...baseComponents,
  },
  mixins: [],
  props: {},
  data() {
    return {
      baseComponents,
      activeName: 0,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>