<template>
  <nav class="menu">
    <router-link :to="{name:'home'}" exact>Home</router-link>
    <router-link :to="{name:'faq'}" >FAQ</router-link>
  </nav>
</template>
<style lang="scss" scoped>
@import '../styles/imports.scss';
.router-link-active {
  border-bottom-color: $primary-color
}
a{
  text-decoration: none;
  color: #222;
  border-bottom:2px solid transparent;
  padding: 0 10px;
}
</style>