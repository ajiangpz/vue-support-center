<template>
  <main class="tickets-layout">
    <h1>Your Surpport Tickets</h1>
    <router-link :to="{name:'tickets'}" v-if="$route.name!=='tickets'" tag="button">See all tickets</router-link>
    <router-link :to="{name:'newTicket'}"  v-if="$route.name!=='newTicket'" tag="button">New tickets</router-link>
    <router-view></router-view>
  </main>
</template>
<script>
export default {

}
</script>