/*
 * @Descriptions: 
 * @Version: 
 * @Author: 
 * @Date: 2019-12-24 10:53:24
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-11-29 17:08:59
 */
import { generate } from "../utils/api-generator";
import login from "./login";
import dashboard from "./dashboard";
import vue from "./vue";
import news from './news'
const api = {
  login,
  dashboard,
  vue,
  news
};

export default generate(api);
