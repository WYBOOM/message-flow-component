import Vue from 'vue'
import App from './App.vue'

import messageFlowComponent from './lib/index'
Vue.use(messageFlowComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
