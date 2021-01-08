<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2021-01-07 17:41:56
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-07 18:10:01
-->
<template>
  <div id="output">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>s

<style>
#output {
  font: 12px/1.5 Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
}
</style>
