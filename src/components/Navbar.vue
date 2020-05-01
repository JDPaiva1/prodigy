<template>
  <div id="nav">
    <router-link class="waves-effect waves-light btn" :to="language">
      <i class="material-icons left">home</i>
      {{ homeName }}
    </router-link> |
    <router-link class="waves-effect waves-light btn" :to="language + 'game'">
      <i class="material-icons left">videogame_asset</i>
      {{ gameName }}
    </router-link> |
    <router-link class="waves-effect waves-light btn" :to="languageHref">
      {{ languageName }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      language: '',
      languageHref: '',
      languageName: '',
      homeName: '',
      gameName: '',
      aboutName: '',
    };
  },
  created() {
    this.changeLanguage(window.location.pathname);
  },
  watch: {
    $route(newValue) {
      this.changeLanguage(newValue.path);
    },
  },
  methods: {
    changeLanguage(path) {
      const regExp = new RegExp(/^\/es/);
      if (regExp.test(path) === false) {
        this.language = '/';
        this.languageHref = '/es';
        this.languageName = 'ES';
        this.homeName = 'Home';
        this.gameName = 'Game';
        this.aboutName = 'About Us';
      } else if (regExp.test(path)) {
        this.language = '/es/';
        this.languageHref = '/';
        this.languageName = 'EN';
        this.homeName = 'Inicio';
        this.gameName = 'Juego';
        this.aboutName = 'Sobre nosotros';
      }
    },
  },
};
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $text-color;
    background-color: $primary-color;
  }
}
</style>
