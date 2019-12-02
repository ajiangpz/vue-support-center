import axios from "axios";
import store from '../store/index'
import router from '../router'
let baseUrl = "";
export async function $axios(url, options) {
  const finalOptions = Object.assign(
    {},
    {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "includes"
    },
    options
  );
  const response = await axios(`${baseUrl}${url}`,finalOptions);
  if (response.statusText==='OK') {
    return response.data;

  } 
  //会话过期了
  else if(response.statusText==='403'){
    store.commit('DELETE_USER')
    if(router.currentRoute.matched.some(r=>r.meta.private)){
      router.replace({name:'login',params:{
        wantedRoute:router.currentRoute.fullPath
      }})
    }
  }else {
    const error = new Error("error");
    throw error;
  }
}
export default {
  install(Vue, options) {
    baseUrl = options.baseUrl;
    Vue.prototype.$axios = $axios;
  }
};
