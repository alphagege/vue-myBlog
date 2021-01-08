<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2021-01-06 17:17:12
 * @LastEditors: dongwenjie
 * @LastEditTime: 2021-01-06 17:28:24
-->
<template>
  <div style="padding: 10px">
    <!--使用draggable组件-->
    <div>点击第一列数字进行拖动，其他列拖拽无效</div>
    <table class="itxst">
      <draggable
        v-model="list"
        animation="500"
        force-fallback="true"
        handle=".move"
        @start="onStart"
        @end="onEnd"
        :move="checkMove"
      >
        <tr v-for="item in list" :key="item.id">
          <td style="width: 50px" class="move">{{ item.id }}</td>
          <td style="width: 250px">{{ item.name }}</td>
        </tr>
      </draggable>
    </table>
  </div>
</template>
<style scoped>
/*定义要拖拽元素的样式*/
table.itxst {
  color: #333333;
  border: #ddd solid 1px;
  border-collapse: collapse;
}
table.itxst th {
  border: #ddd solid 1px;
  padding: 8px;
  background-color: #dedede;
}
table.itxst td {
  border: #ddd solid 1px;
  padding: 8px;
  background-color: #ffffff;
}
table.itxst tr {
  cursor: pointer;
}
table.itxst td.move:hover {
  cursor: move;
}
</style>
<script>
//导入draggable组件
import draggable from "vuedraggable";
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      //定义要被拖拽对象的数组
      list: [
        { id: 1, name: "www.itxst.com" },
        { id: 2, name: "www.jd.com" },
        { id: 3, name: "www.ebay.com" },
      ],
    };
  },
  methods: {
    checkMove(evt) {
      console.log(evt);
      return true;
    },
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
  },
};
</script>