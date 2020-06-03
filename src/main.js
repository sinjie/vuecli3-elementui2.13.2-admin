import Vue from 'vue'
import App from './App.vue'

import './style/index.scss'
import router from './router'
import store from './store'
import './permission' // permission control
import './components'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.use(ElementUI, {size: 'small'})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
