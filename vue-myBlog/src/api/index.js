import { generate } from "../utils/api-generator";
import login from "./login";
import dashboard from "./dashboard";
import github from "./github"
console.log(login);
const api = {
  login,
  dashboard,
  github
};
console.log(api);

export default generate(api);
