import axios from "axios";
import router from "@/router";
import { Message } from "element-ui";

axios.defaults.baseURL = "/mock";

axios.interceptors.request.use(
  config => {
    // can add common header for all request
    if (!config.headers) {
      config.headers = {
        "Content-Type": "application/json"
      };
    }
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    // can add common handle response
    return response;
  },
  error => {
    if (error.response.status === 401) {
      console.log(error);
      router.push({ path: "/login" });
    } else {
      Message.error({
        message: error.response.data.message
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
