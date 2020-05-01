<template>
  <div class="home container">
    <div class="row">
      <h3 class="margin">{{ homeData.name }}</h3>
      <h4>{{ homeData.programName }}</h4>
    </div>
    <hr width="30%"/>
    <div class="section">
      <h4>{{ homeData.instructionTitle }}</h4>
      <h5 class="margin">{{ homeData.instruction }}</h5>
    </div>
      <img  class="responsive-img" :src="homeData.logo" alt="logo" width="400">
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'Home',
  data() {
    return {
      homeData: {},
    };
  },
  mounted() {
    const refChild = this.$route.path === '/' ? 'en' : 'es';
    this.getData(refChild);
  },
  watch: {
    $route(newValue) {
      const refChild = newValue.path === '/' ? 'en' : 'es';
      this.getData(refChild);
    },
  },
  methods: {
    getData(refChild) {
      firebase.database().ref('home').child(refChild).once('value', (snapshot) => {
        this.homeData = snapshot.val();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
div.home {
  h2.margin {
    margin: 1.5em 0 1.5em;
  }
}
</style>
