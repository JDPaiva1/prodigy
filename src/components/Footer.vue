<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l4 s12">
          <h5 class="white-text">{{ researchTeam }}</h5>
          <p class="grey-text text-lighten-4">
            Yasmina Romero Morales
          </p>
          <p class="grey-text text-lighten-4">
            Esther Torrado Martín-Palomino
          </p>
          <p class="grey-text text-lighten-4">
            Rodrigo Fidel Rodríguez Borges
          </p>
        </div>
        <div class="col l4 s12">
          <h5 class="white-text">{{ documentation }}</h5>
          <p class="grey-text text-lighten-4">
            Servicios Estadísticos de Canarias S.L.
          </p>
        </div>
        <div class="col l4 s12">
          <h5 class="white-text">{{ costumeDesigner }}</h5>
          <p class="grey-text text-lighten-4">
            Eulalia (Lala) Pérez Batista
          </p>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        {{ developer }}
        <a class="grey-text text-lighten-4" href="https://jdpaiva.me" target="_blank">
          <strong>Jose Daniel Paiva</strong>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      researchTeam: '',
      documentation: '',
      costumeDesigner: '',
      developer: '',
    };
  },
  mounted() {
    this.creditsTitles(window.location.pathname);
  },
  watch: {
    $route(newValue) {
      this.creditsTitles(newValue.path);
    },
  },
  methods: {
    creditsTitles(path) {
      const regExp = new RegExp(/^\/es/);
      if (regExp.test(path) === false) {
        this.researchTeam = 'Research team:';
        this.documentation = 'Documentation:';
        this.costumeDesigner = 'Costume designer:';
        this.developer = 'Developed by';
      } else if (regExp.test(path)) {
        this.researchTeam = 'Equipo de investigación:';
        this.documentation = 'Documentación:';
        this.costumeDesigner = 'Vestuario:';
        this.developer = 'Desarrollado por';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
footer.page-footer {
  background-color: $primary-color;
}
</style>
