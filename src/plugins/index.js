import axios from 'axios'
let baseUrl=''
export async function $get(url) {
  console.log(baseUrl)
  const response = await axios.get(`${baseUrl}${url}`);
  if(response.data){
   return response.data
  }else{
    const error=new Error('error')
    throw error
  }
}
export default {
  install(Vue,options){
    baseUrl=options.baseUrl;
    Vue.prototype.$get=$get;
  }
}

