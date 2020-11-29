/*
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2019-12-24 10:53:25
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-11-29 17:07:46
 */
"use strict";
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基本路径
  publicPath: "/",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 生产环境不生成sourcemap文件
  productionSourceMap: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    config.resolve.extensions
      .add(".vue")
      .add(".js")
      .add(".json");

    // 一个规则里的 基础Loader
    // svg是个基础loader
    const svgRule = config.module.rule("svg");
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();
    // 添加要替换的 loader
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });

    // 修改images loader 添加svg处理
    // https://juejin.im/post/5c3c544c6fb9a049d37f5903
    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("src/icons"));
    config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
    return {
    };
  },
  // css相关配置
  css: {
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: "localhost",
    port: 9527,
    proxy: {
      "^/mock": {
        target: "https://www.easy-mock.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/mock": "/"
        }
      },
      "^/api": {
        target: "https://api.github.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      },
      "^/code": {
        target: "https://raw.githubusercontent.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/code": "/"
        }
      },
      "^/news": {
        target: "http://jskou.com:3003/",
        changeOrigin: true,
        pathRewrite: {
          "^/news": "/"
        }
      }

      //https://raw.githubusercontent.com/LiQinFei/baiyaoshi/master/itemsome/.editorconfig
    }
  }
};
