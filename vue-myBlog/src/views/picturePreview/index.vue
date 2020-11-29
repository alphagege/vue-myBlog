<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2020-11-29 17:40:26
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-11-29 17:45:21
-->
<template>
  <div class="picture-preview">
    <img
      class="previewer-demo-img"
      v-for="(item, index) in list"
      :src="item.src"
      width="100"
      @click="show(index)"
      :key="index"
    />
    <previewer ref="previewer" :list="list" :options="options"></previewer>
  </div>
</template>

<script>
export default {
  name: "picture-preveiw",
  data() {
    return {
      list: [
        {
          msrc:
            "https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rjyub5bj30go0b40wc.jpg",
          src:
            "https://tva1.sinaimg.cn/large/006y8mN6ly1g95rjyub5bj30go0b40wc.jpg",
          w: 600,
          h: 400,
        },
        {
          msrc:
            "https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rmt8pq4j30go0b4n28.jpg",
          src:
            "https://tva1.sinaimg.cn/large/006y8mN6ly1g95rmt8pq4j30go0b4n28.jpg",
          w: 600,
          h: 400,
        },
        {
          msrc:
            "https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rn3grt6j30go0b4n0w.jpg",
          src:
            "https://tva1.sinaimg.cn/large/006y8mN6ly1g95rn3grt6j30go0b4n0w.jpg",
          w: 600,
          h: 400,
        },
      ],
      options: {
        getThumbBoundsFn(index) {
          let thumbnail = document.querySelectorAll(".previewer-demo-img")[
            index
          ];
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;

          let rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        },
      },
    };
  },
  methods: {
    show(index) {
      // 显示特定index的图片，使用ref
      this.$refs.previewer.show(index);
    },
  },
};
</script>
<style lang="scss" scoped>
.picture-preview {
  padding: 20px;
}
</style>