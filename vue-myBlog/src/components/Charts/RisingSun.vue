<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";
import api from "@/api";
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
      default: "400px"
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      chartData: []
    };
  },
  async created() {
    let { data } = await api.dashboard.getRisingSun();
    this.chartData = data;
    this.initChart();
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
      this.chart = echarts.init(document.getElementById(this.id));
      this.chart.setOption({
        title: {
          // text: "WORLD COFFEE RESEARCH SENSORY LEXICON",
          // subtext:
          //   "Source: https://worldcoffeeresearch.org/work/sensory-lexicon/",
          textStyle: {
            fontSize: 14,
            align: "center"
          },
          subtextStyle: {
            align: "center"
          },
          sublink: "https://worldcoffeeresearch.org/work/sensory-lexicon/"
        },
        series: {
          type: "sunburst",
          highlightPolicy: "ancestor",
          data: this.chartData,
          radius: [0, "95%"],
          sort: null,
          levels: [
            {},
            {
              r0: "15%",
              r: "35%",
              itemStyle: {
                borderWidth: 2
              },
              label: {
                rotate: "tangential"
              }
            },
            {
              r0: "35%",
              r: "70%",
              label: {
                align: "right"
              }
            },
            {
              r0: "70%",
              r: "72%",
              label: {
                position: "outside",
                padding: 3,
                silent: false
              },
              itemStyle: {
                borderWidth: 3
              }
            }
          ]
        }
      });
    }
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
