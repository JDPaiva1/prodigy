<template>
  <div class="home">
    <h2>{{ instructions.title }}</h2>
    <h4>{{ instructions.description }}</h4>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'Home',
  data() {
    return {
      instructions: {},
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
        this.instructions = snapshot.val();
      });
    },
  },
};
</script>
