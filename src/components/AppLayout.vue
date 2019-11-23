<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img src="../assets/logo.png" >
      </div>
      <div>My shirt shop</div>
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