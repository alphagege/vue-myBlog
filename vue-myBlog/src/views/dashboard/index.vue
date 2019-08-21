<template>
  <div class="dashboard">
    <div class="dashboard-container">
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
              <!-- <move-earth id="moveearth" /> -->
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
export default {
  data() {
    return {};
  },

  components: {
    RisingSun,
    MoveEarth
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style scoped lang="scss">
.dashboard {
  background: #f0f2f5;
  padding: 32px;
  .dashboard-container {
    .chart-warpper {
      background: #fff;
      padding: 16px;
      margin-bottom: 32px;
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
