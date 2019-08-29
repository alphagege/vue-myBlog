<template>
  <div class="myEditor">
    <p>
      <el-button
        type="success"
        icon="el-icon-check"
        circle
        @click="RunResult"
      ></el-button>

      <!-- <el-button type="primary" @click="fullScreen">全屏</el-button> -->
      <svg-icon
        :icon-class="fullScreen ? 'exit-fullscreen' : 'fullscreen'"
        style="margin-left:5px;cursor:pointer"
        @click.native="toggleScreen"
      />

      <span class="theme" style="float:right">
        <el-select
          v-model="theme"
          size="mini"
          @change="themeChange"
          placeholder="请选择主题"
        >
          <el-option
            v-for="item in themeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </span>
    </p>
    <div id="container" ref="container" style="height:400px"></div>
  </div>
</template>
<script>
import * as monaco from "monaco-editor";
export default {
  props: {
    codes: {
      type: String,
      default: function() {
        return '<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1.0">\n  <title>审计系统<\/title>\n<\/head>\n<script type="text\/javascript" src=".\/static\/tinymce4.7.5\/tinymce.min.js"><\/script>\n<style>\n  #Loading {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    -webkit-transform: translateY(-50%) translateX(-50%);\n    transform: translateY(-50%) translateX(-50%);\n    z-index: 100;\n  }\n\n  @-webkit-keyframes ball-beat {\n    50% {\n      opacity: 0.2;\n      -webkit-transform: scale(0.75);\n      transform: scale(0.75);\n    }\n\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      transform: scale(1);\n    }\n  }\n\n  @keyframes ball-beat {\n    50% {\n      opacity: 0.2;\n      -webkit-transform: scale(0.75);\n      transform: scale(0.75);\n    }\n\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      transform: scale(1);\n    }\n  }\n\n  .ball-beat>div {\n    background-color: #279fcf;\n    width: 15px;\n    height: 15px;\n    border-radius: 100% !important;\n    margin: 2px;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    display: inline-block;\n    -webkit-animation: ball-beat 0.7s 0s infinite linear;\n    animation: ball-beat 0.7s 0s infinite linear;\n  }\n\n  .ball-beat>div:nth-child(2n-1) {\n    -webkit-animation-delay: 0.35s !important;\n    animation-delay: 0.35s !important;\n  }\n<\/style>\n\n<body>\n  <div id="app">\n      <div id="Loading">\n        <div class="loader-inner ball-beat">\n          <div><\/div>\n          <div><\/div>\n          <div><\/div>\n        <\/div>\n      <\/div>\n  <\/div>\n  <script type="text\/javascript">\n    window.config = {\n      sso: false\n    }\n\n  <\/script>\n  <!-- built files will be auto injected -->\n<\/body>\n\n<\/html>\n';
      }
    },
    language: {
      type: String,
      default: function() {
        return "html";
      }
    },
    editorOptions: {
      type: Object,
      default: function() {
        return {
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: true, // 只读
          cursorStyle: "line", //光标样式
          automaticLayout: true, //自动布局
          glyphMargin: true, //字形边缘
          useTabStops: false,
          fontSize: 28, //字体大小
          autoIndent: true, //自动布局
          wrappingColumn: 0,
          wrappingIndent: "indent",
          minimap: {
            enabled: true
          }
          //quickSuggestionsDelay: 500,   //代码提示延时
        };
      }
    }
  },
  data() {
    return {
      themeOption: [
        {
          value: "vs",
          label: "默认"
        },
        {
          value: "hc-black",
          label: "高亮"
        },
        {
          value: "vs-dark",
          label: "深色"
        }
      ],
      theme: "vs-dark",
      codesCopy: null, //内容备份
      fullScreen: false
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      let self = this;
      self.$refs.container.innerHTML = "";
      self.monacoEditor = monaco.editor.create(self.$refs.container, {
        value: self.codesCopy || self.codes,
        language: self.language,
        theme: self.theme, //vs, hc-black, or vs-dark
        editorOptions: self.editorOptions
      });
      self.$emit("onMounted", self.monacoEditor); //编辑器创建完成回调
      self.monacoEditor.onDidChangeModelContent(function(event) {
        //编辑器内容changge事件
        self.codesCopy = self.monacoEditor.getValue();
        self.$emit("onCodeChange", self.monacoEditor.getValue(), event);
      });
      // //编辑器随窗口自适应
      // window.addEventListener("resize", () => {
      //   this.initEditor();
      // });
    },
    RunResult() {
      console.log(this.monacoEditor.getValue());
    },
    themeChange(val) {
      this.initEditor();
    },
    toggleScreen() {
      this.$emit("toggleFullScreen");
      this.fullScreen = !this.fullScreen;
      this.$nextTick(() => {
        //此处认为是$necttick的最佳实践！！！！
        this.initEditor();
      });
    }
  }
};
</script>
<style scoped lang="scss">
#container {
  height: 100%;
  text-align: left;
}
</style>
