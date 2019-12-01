<template>
  <div class="app-layout">
    <header class="header">
      <div class="logo">
        <img src="../assets/logo.png" >
      </div>
      <div class="title">My shirt shop</div>
    </header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from './NavMenu.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    Nav
  }
}
</script>
<style lang="scss" scoped>
.app-layout{
  width: 100%;
  .header{
    .logo,.title{
      display: flex;
      justify-content: center;
    }
  }
}
</style>