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
        title: {
          text: "2019最喜爱的动漫排行榜",
          // subtext:
          //   "Source: https://worldcoffeeresearch.org/work/sensory-lexicon/",
          textStyle: {
            fontSize: 14,
            align: "center"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "樱花动漫", selected: true },
              { value: 679, name: "哔哩哔哩" },
              { value: 1548, name: "嘀哩嘀哩" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            // label: {
            //   normal: {
            //     formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
            //     backgroundColor: "#eee",
            //     borderColor: "#aaa",
            //     borderWidth: 1,
            //     borderRadius: 4,
            //     // shadowBlur:3,
            //     // shadowOffsetX: 2,
            //     // shadowOffsetY: 2,
            //     // shadowColor: '#999',
            //     // padding: [0, 7],
            //     rich: {
            //       a: {
            //         color: "#999",
            //         lineHeight: 22,
            //         align: "center"
            //       },
            //       // abg: {
            //       //     backgroundColor: '#333',
            //       //     width: '100%',
            //       //     align: 'right',
            //       //     height: 22,
            //       //     borderRadius: [4, 4, 0, 0]
            //       // },
            //       hr: {
            //         borderColor: "#aaa",
            //         width: "100%",
            //         borderWidth: 0.5,
            //         height: 0
            //       },
            //       b: {
            //         fontSize: 16,
            //         lineHeight: 33
            //       },
            //       per: {
            //         color: "#eee",
            //         backgroundColor: "#334455",
            //         padding: [2, 4],
            //         borderRadius: 2
            //       }
            //     }
            //   }
            // },
            data: [
              { value: 335, name: "火影忍者" },
              { value: 310, name: "海贼王" },
              { value: 234, name: "妖精的尾巴" },
              { value: 135, name: "四驱兄弟" },
              { value: 1048, name: "中华小当家" },
              { value: 251, name: "龙珠超" }
            ]
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
