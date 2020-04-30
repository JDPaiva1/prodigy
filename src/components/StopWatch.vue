<template>
  <div>
    <button class="btn-floating btn-small" @click="start">
      <i class="material-icons">play_arrow</i>
    </button>
    <button class="btn-floating btn-small" @click="stop">
      <i class="material-icons">pause</i>
    </button>
    <button class="btn-floating btn-small" @click="reset">
      <i class="material-icons">settings_backup_restore</i>
    </button>
    <p>{{formattedElapsedTime}}</p>
  </div>
</template>

<script>
export default {
  name: 'StopWatch',
  props: {
    successes: Number,
  },
  data() {
    return {
      elapsedTime: 0,
      timer: undefined,
    };
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      if (this.successes === 6) {
        this.stop();
      }
      return utc.substr(utc.indexOf(':') - 2, 8);
    },
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.$router.go();
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  button {
    margin: 0 .5em;
  }
}
</style>
