<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2020-12-31 11:16:17
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-06 11:27:56
-->
<template>
  <div>
    <user-selection v-model="showUserSelection" @confirm="confirm" />
    <el-button type="primary" @click="showUserSelection = true"
      >打开弹窗</el-button
    >
    <input :value="value" @input="change" />
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
  },
};
</script>