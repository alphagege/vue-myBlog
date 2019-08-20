import axios from "axios";
import router from "@/router";
import { Message } from "element-ui";
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "/mock";
} else {
  axios.defaults.baseURL = "https://www.easy-mock.com/mock";
}

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
        message: error
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
