<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2020-12-31 11:16:17
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-08 09:22:44
-->
<template>
  <div>
    <user-selection v-model="showUserSelection" @confirm="confirm" />
    <el-button type="primary" @click="showUserSelection = true"
      >打开弹窗</el-button
    >
    <el-button type="primary" @click="jump"> 打开子页面 </el-button>

    <el-button type="primary" @click="changeVuex"> 修改vuex </el-button>
    <input :value="value" @input="change" />
    {{ $store.state.app.device }}
  </div>
</template>

<script>
import UserSelection from "./dialog";
export default {
  components: {
    UserSelection,
  },
  data() {
    return {
      value: "",
      showUserSelection: false,
    };
  },
  methods: {
    confirm(value) {
      console.log(value);
    },
    change($event) {
      this.value = $event.target.value;
    },
    jump() {
      let a = document.createElement("a");
      a.href = "/output.html#/subpage1?id=11111";
      a.target = "_blank";
      a.click();
      console.log(this.$store);
    },
    changeVuex() {
      this.$store.dispatch("app/toggleDevice", "修改后的设备名称");
    },
  },
};
</script>