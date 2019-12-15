<template>
  <div class="app-layout">
    <header class="header">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="title">My shirt shop</div>
    </header>
    <Nav></Nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Nav from "./NavMenu.vue";
export default {
  data() {
    return {};
  },
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import '../styles/main.scss';
</style>
