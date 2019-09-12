import axios from "axios";
import { Message } from "element-ui";
const $axios = axios.create({
  // 设置超时时间
  timeout: 30000 //30s
});
let loading = null;
$axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  response => {
    // can add common handle response
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        // case 401:
        //   // 返回401 清除token信息并跳转到登陆页面
        //   store.commit("DEL_TOKEN");
        //   router.replace({
        //     path: "/login",
        //     query: {
        //       redirect: router.currentRoute.fullPath
        //     }
        //   });
        //   break;
        case 404:
          Message.error("网络请求不存在");
          break;
        case 500:
          Message.error(error.response.statusText);
          break;
        default:
          Message.error(error.response.data.message);
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes("timeout")) {
        Message.error("请求超时！请检查网络是否正常");
      } else {
        Message.error("请求失败，请检查网络是否已连接");
      }
    }
    return Promise.reject(error);
  }
);

export default $axios;
