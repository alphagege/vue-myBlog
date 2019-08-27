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
      chart: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
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
      var data = [];

      for (var i = 0; i <= 100; i++) {
        var theta = (i / 100) * 360;
        var r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
        data.push([r, theta]);
      }

      this.chart.setOption({
        // title: {
        //   text: "极坐标双数值轴"
        // },
        legend: {
          data: ["line"]
        },
        polar: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {},
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            data: data
          }
        ]
      });
    }
  },
  computed: {
    ...mapGetters(["echartsTheme"])
  },
  watch: {
    echartsTheme(val) {
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
