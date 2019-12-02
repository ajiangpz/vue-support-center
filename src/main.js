import Vue from 'vue'
import App from '../src/components/AppLayout.vue'
import router from './router'
import store from './store'
import './mock'
import './global-components'
import 'element-ui/lib/theme-chalk/index.css'
import axios from  './plugins/'
import {$axios} from './plugins'
import elementUI from 'element-ui'
Vue.use(elementUI)
Vue.use( axios,{
  baseUrl:''
})
//路由拦截
router.beforeEach((to,from,next)=>{
  if(to.matched.some(r=>r.meta.private)&&!store.state.user){
    next({name:'login',params:{
      wantedRoute:to.fullPath
    }});
    return; 
  }
  
  if(to.matched.some(r=>r.meta.guest)&&store.state.user){
    
    next({name:'home'});
    return;
  }
  next();
})
//获取用户信息，默认用户已经登录

Vue.config.productionTip = false
async function main(){
  try{
    const result=await $axios ('/user');
    store.state.user=result.username;
  }catch(e){
    console.log(e)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
}
main()