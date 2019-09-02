import { generate } from "../utils/api-generator";
import login from "./login";
import dashboard from "./dashboard";
import github from "./github";
import vue from "./vue";
const api = {
  login,
  dashboard,
  github,
  vue
};

export default generate(api);
