<!--
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2020-11-29 17:27:03
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-11-29 17:46:05
-->
<template>
  <div class="components-container">
    <aside>
      <a target="_blank" class="link-type" href="http://tinymce.ax-z.cn/demos/demo-classic.php">文档</a>
    </aside>
    <div>
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";

export default {
  name: "TinymceDemo",
  components: { Tinymce },
  data() {
    return {
      content: `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`,
    };
  },
};
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>

