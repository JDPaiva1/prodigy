<template>
  <div id="app">
    <LogoBar/>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import LogoBar from '@/components/LogoBar.vue';

export default {
  components: {
    Navbar,
    LogoBar,
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: $text-color;
}
</style>
