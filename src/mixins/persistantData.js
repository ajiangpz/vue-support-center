export default function(id,fields ){
  return {
    watch:fields.reduce((obj,field)=>{
      obj[field]=function(val){
        localStorage.setItem(`${id}.${field}`,JSON.stringify(val))
      }
      return obj;
    },{})
  }
}