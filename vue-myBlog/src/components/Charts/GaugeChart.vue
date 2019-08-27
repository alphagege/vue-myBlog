<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";
import "echarts/theme/macarons.js";
import "echarts/theme/roma.js";
import "echarts/theme/shine.js";

import { mapGetters } from "vuex";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "250px"
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      timer: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(
        document.getElementById(this.id),
        this.echartsTheme
      );
      var option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }]
          }
        ]
      };
      this.chart.setOption(option);
      this.timer = setInterval(() => {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        this.chart.setOption(option, true);
      }, 2000);
    }
  },
  computed: {
    ...mapGetters(["echartsTheme"])
  },
  watch: {
    echartsTheme(val) {
      // 先清除一次定时器，否则会叠加
      clearInterval(this.timer);
      // 此处必须加，否则切换主题无效
      this.chart.dispose();
      this.chart = null;
      this.initChart();
    }
  }
};
</script>
<style>
.chart {
  margin: 0 auto;
}
</style>
