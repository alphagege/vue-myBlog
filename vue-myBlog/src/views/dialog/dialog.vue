<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2020-12-31 11:17:24
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-31 11:27:16
-->
<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible">
      <el-input v-model="text" placeholder=""></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  model: {
    prop: "show", // 设置对应v-model的属性字段
    event: "close", // 如果不指定默认为input，当$emit该事件，可以自动执行 修改父组件v-model参数的值
  },
  props: ["show"], // 接收v-model的传值
  computed: {
    dialogVisible: {
      get() {
        return this.show;
      },
      set(newVal) {
        console.log(newVal);
        this.$emit("close", newVal);
      },
    },
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>
