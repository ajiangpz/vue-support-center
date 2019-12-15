<template>
  <div class="tickets" id="tickets">
    <Loading v-if="remoteDataBusy"></Loading>
    <div class="empty" v-else-if="tickets.length===0">
      You don't have any ticket
    </div>
    <section v-else class="tickets-list">
      <div v-for="(ticket,key) in tickets" class="ticket-item" :key="key">
        <router-link :to="{name:'ticket',params:{id:ticket.id+''}}" >{{ticket.title}}</router-link>
        
        <span class="badge">{{ticket.status}}</span>
        <span class="date">{{ticket.date}}</span>
      </div>
    </section>
  </div>
</template>
<script>
import remoteData from '../mixins/remoteData'
export default {
  mixins:[
    remoteData({tickets:'/tickets'})
  ]
}
</script>