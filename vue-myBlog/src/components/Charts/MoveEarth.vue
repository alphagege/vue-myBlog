<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import "echarts-gl";
import resize from "./mixins/resize";
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
      this.chart = echarts.init(document.getElementById(this.id));
      this.chart.setOption({
        backgroundColor: "#fff",
        globe: {
          baseTexture: require("@/assets//img/earth.jpg"),
          heightTexture: require("@/assets/img/bathymetry_bw_composite_4k.jpg"),

          displacementScale: 0.1,

          shading: "lambert",

          environment: require("@/assets/img/starfield.jpg"),

          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },

          layers: [
            {
              type: "blend",
              blendTo: "emission",
              texture: require("@/assets/img/night.jpg")
            },
            {
              type: "overlay",
              texture: require("@/assets/img/clouds.png"),
              shading: "lambert",
              distance: 5
            }
          ]
        },
        series: []
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
