/*
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2019-12-24 10:53:24
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-09-13 17:38:00
 */
import { generate } from "../utils/api-generator";
import login from "./login";
import dashboard from "./dashboard";
import vue from "./vue";
const api = {
  login,
  dashboard,
  vue
};

export default generate(api);
