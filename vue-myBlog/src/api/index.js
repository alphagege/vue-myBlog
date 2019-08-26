import { generate } from "../utils/api-generator";
import login from "./login";
import dashboard from "./dashboard";
console.log(login);
const api = {
  login,
  dashboard
};
console.log(api);

export default generate(api);
