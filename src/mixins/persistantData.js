export default function(id,fields ){
  return {
    watch:fields.reduce((obj,field)=>{
      obj[field]=function(val){
        console.log(val)
        localStorage.setItem(`${id}.${field}`,JSON.stringify(val))
      }
      console.log(obj)
      return obj;
    },{})
  }
}