<template>
  <div id="mainPage">
    <div class="data-info">
      <div v-waves>
        <div>进行中项目</div>
        <b>
          <span>
            <v-countup start-value="0" :end-value="2242"></v-countup>
          </span>
          <span>本年度</span>
        </b>
      </div>
      <div v-waves>
        <div>已完成项目</div>
        <b>
          <span>
            <v-countup start-value="0" :end-value="34393"></v-countup>
          </span>
          <span>本年度</span>
        </b>
      </div>
      <div v-waves>
        <div>发现问题</div>
        <b>
          <span>
            <v-countup start-value="0" :end-value="48929"></v-countup>
          </span>
          <span>本年度</span>
        </b>
      </div>
      <div v-waves>
        <div>已完成计划</div>
        <b>
          <span>
            <v-countup start-value="0" :end-value="321324"></v-countup>
          </span>
          <span>本年度</span>
        </b>
      </div>
    </div>
  </div>
</template>

<script>
import waves from "@/directive/waves/index.js"; // 水波纹指令

export default {
  name: "countTo",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  computed: {},
  directives: {
    waves,
  },
};
</script>

<style scoped lang="scss">
#mainPage {
  > .data-info {
    background: #fff;
    width: 100%;
    display: flex;
    padding: 20px;
    > div {
      user-select: none;
      box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
      border-radius: 5px;
      height: 140px;
      flex: 1;
      margin-right: 20px;
      color: #fff;
      > div {
        font-family: "微软雅黑", "Courier New", Courier, monospace;
        font-weight: bold;
        letter-spacing: 1px;
        padding: 20px 20px 25px 32px;
        font-size: 16px;
      }
      > b {
        position: relative;
        font-size: 32px;
        padding-left: 30px;
        display: inline-block;
        width: 100%;
        color: rgb(255, 255, 255);
        font-weight: lighter;
        height: 58px;
        > span {
          font-weight: lighter;
        }
        > span:last-of-type {
          position: absolute;
          bottom: 0;
          right: 25px;
          font-size: 15px;
        }
      }
    }
    > div:nth-of-type(1) {
      background: rgb(255, 108, 92);
    }
    > div:nth-of-type(1):hover {
      background: rgba(255, 108, 92, 0.8);
    }
    > div:nth-of-type(2) {
      background: rgb(248, 212, 54);
    }
    > div:nth-of-type(2):hover {
      background: rgba(248, 212, 54, 0.8);
    }
    > div:nth-of-type(3) {
      background: rgb(167, 219, 101);
    }
    > div:nth-of-type(3):hover {
      background: rgba(167, 219, 101, 0.8);
    }
    > div:nth-of-type(4) {
      margin-right: 0px;
      background: rgb(122, 140, 153);
    }
    > div:nth-of-type(4):hover {
      background: rgba(122, 140, 153, 0.8);
    }
  }
}
</style>
