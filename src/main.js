import Vue from 'vue'
import App from './App.vue'

import './css/reset.less'
import './css/ui.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
