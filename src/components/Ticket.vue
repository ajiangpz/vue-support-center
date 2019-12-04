<template>
  <div v-if="ticket"><span>{{ticket.id}}-{{ticket.title}}</span></div>
</template>
<script>
import remoteData from '../mixins/remoteData'
export default {
  mixins:[
    remoteData({
      ticket(){
        return `/ticket/${this.id}`
      }
    })
  ],
  props:{
    id:{
      type:String,
      required:true
    }
  }
}
</script>