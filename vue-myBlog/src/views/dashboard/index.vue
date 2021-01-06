<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <el-row :gutter="16">
        <mallki text="点击切换主题：" />
        <el-radio-group v-model="echartsTheme">
          <el-radio label="roma">roma</el-radio>
          <el-radio label="macarons">macarons</el-radio>
          <el-radio label="shine">shine</el-radio>
        </el-radio-group>
      </el-row>
      <el-row :gutter="16">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-warpper">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="chart-type-head">折线图</span>
              </div>
              <line-chart id="linechart" />
            </el-card>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-warpper">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="chart-type-head">饼图</span>
              </div>
              <pie-chart id="piechart" />
            </el-card>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-warpper">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="chart-type-head">仪表盘</span>
              </div>
              <gauge-chart id="gaugechart" />
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="16">
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="chart-warpper">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="chart-type-head">旭日图</span>
              </div>
              <rising-sun id="risingsun" />
            </el-card>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="chart-warpper">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="chart-type-head">3D 地球</span>
              </div>
              <move-earth id="moveearth" />
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import RisingSun from "@/components/Charts/RisingSun";
import MoveEarth from "@/components/Charts/MoveEarth";
import LineChart from "@/components/Charts/LineChart";
import PieChart from "@/components/Charts/PieChart";
import GaugeChart from "@/components/Charts/GaugeChart";
import Mallki from "@/components/TextHoverEffect/Mallki";
export default {
  data() {
    return {};
  },

  components: {
    RisingSun,
    MoveEarth,
    LineChart,
    PieChart,
    GaugeChart,
    Mallki,
  },

  computed: {
    echartsTheme: {
      get() {
        return this.$store.getters.echartsTheme;
      },
      set(val) {
        this.$store.dispatch("app/changeEchartsTheme", val);
      },
    },
  },

  mounted() {
    // alert(bbbb);
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.dashboard {
  background: #f0f2f5;
  padding: 32px;
  .dashboard-container {
    .el-row {
      background: #fff;
      padding: 16px;
      margin-bottom: 16px;
    }
    .chart-type-head {
      font-size: 20px;
      padding-left: 10px;
      color: #999;
      font-weight: normal;
    }
  }
}
</style>
