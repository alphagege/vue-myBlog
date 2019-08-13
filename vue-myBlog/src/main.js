import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

Vue.use(Element)

import './icons'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
