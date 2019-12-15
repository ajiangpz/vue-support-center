<template>
  <main class="tickets-layout">
    <h1>Your Surpport Tickets</h1>
    <div class="actions">
      <router-link
        :to="{ name: 'tickets' }"
        v-if="$route.name !== 'tickets'"
        class="secondary"
        tag="button"
        >See all tickets</router-link
      >
      <router-link
        :to="{ name: 'newTicket' }"
        v-if="$route.name !== 'newTicket'"
        tag="button"
        >New tickets</router-link
      >
    </div>

    <router-view></router-view>
  </main>
</template>
<style lang="scss" scoped>
@import '../styles/mixins';
  .actions{
    margin-bottom: 30px;
    @include h-box();
    button{
      @include space-between-x(16px)
    }
  }
</style>
