//点击盒子水波纹自定义指令
import waves from "./waves";

const install = function(Vue) {
  Vue.directive("waves", waves);
};

if (window.Vue) {
  window.waves = waves;
  Vue.use(install); // eslint-disable-line
}

waves.install = install;
export default waves;
