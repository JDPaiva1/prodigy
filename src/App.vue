<template>
  <div id="app">
    <LogoBar/>
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import LogoBar from '@/components/LogoBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    LogoBar,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: $text-color;
}
</style>
