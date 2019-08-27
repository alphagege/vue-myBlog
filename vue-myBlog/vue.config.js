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
  configureWebpack: () => {},
  // css相关配置
  css: {
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "^/mock": {
        target: "https://www.easy-mock.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/mock": "/mock"
        }
      },
      "^/users": {
        target: "https://api.github.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/users": "/users"
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
