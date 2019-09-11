<template>
  <div class="vr">
    <h1>vue-pano全景漫游展示组件</h1>
    <pano
      title="VR"
      width="720"
      height="480"
      bundle="/static/img/"
      format="jpg"
    ></pano>
  </div>
</template>

<script>
import Pano from "vue-pano";
export default {
  name: "VR",
  data() {
    return {};
  },

  components: { Pano },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style scoped lang="scss">
.vr {
  h1 {
    font-weight: 100;
    color: #666;
    text-align: center;
  }
  .vue-pano {
    margin: 0 auto;
  }
}
</style>
