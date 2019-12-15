<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }" exact>Home</router-link>
    <router-link :to="{ name: 'faq' }">FAQ</router-link>
    <router-link :to="{ name: 'tickets' }">Tickets</router-link>
    <div class="spacer"></div>
    <template v-if="$store.state.user">
      <a>{{this.$store.state.user}}</a>
      <a @click="logout">Logout</a>
    </template>
    <router-link :to="{ name: 'login' }" v-else>Login</router-link>
  </nav>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    async logout(){
      //退出登录接口
      const result=await this.$axios('/logout',{
        method:'POST'
      });
      if(result.status==='ok'){
        this.$store.commit('DELETE_USER')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';
.router-link-active {
  border-bottom-color: $primary-color;
}
</style>
