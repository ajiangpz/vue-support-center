import Vue from 'vue'
import App from '../src/components/AppLayout.vue'
import router from './router'
import store from './store'
import './mock'
import './global-components'
import 'element-ui/lib/theme-chalk/index.css'
import vueGet from  './plugins/'
import elementUI from 'element-ui'
Vue.use(elementUI)
Vue.use(vueGet,{
  baseUrl:''
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
