<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2021-01-07 17:46:59
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-08 14:34:00
-->
<template>
  <div class="">
    {{ $store.state.app.device }}
    {{ $route.query.id }}
    <el-button type="primary">呵呵哒</el-button>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
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