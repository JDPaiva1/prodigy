<template>
  <div id="nav">
    <router-link class="waves-effect waves-light btn" to="/">
      <i class="material-icons left">home</i>Home
    </router-link> |
    <router-link class="waves-effect waves-light btn" to="/game">
      <i class="material-icons left">videogame_asset</i>Game
    </router-link> |
    <router-link class="waves-effect waves-light btn" to="/about">
      <i class="material-icons left">people</i>About Us
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}
</style>
