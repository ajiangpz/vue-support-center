<template>
  <div class="tickets">
    <Loading v-if="remoteDataBusy"></Loading>
    <div class="empty" v-else-if="tickets.length===0">
      You don't have any ticket
    </div>
    <section v-else>
      <div v-for="(ticket,key) in tickets" class="ticket-item" :key="key">
        <span>{{ticket.title}}</span>
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