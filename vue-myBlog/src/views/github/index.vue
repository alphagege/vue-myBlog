<template>
  <div>
      github
  </div>
</template>

<script>
import api from '@/api';
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},
  async created(){
    let {data} = await api.github.getGithubInfo()
    console.log(data)
  },
  mounted() {},

  methods: {}
};
</script>
<style scoped></style>
