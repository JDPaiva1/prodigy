<template>
  <div class="col s12">
    <div class="col s12 m11">
      <button class="btn-floating btn-small waves-effect waves-light" @click="start">
        <i class="material-icons">play_arrow</i>
      </button>
      <button class="btn-floating btn-small waves-effect waves-light" @click="stop">
        <i class="material-icons">pause</i>
      </button>
      <button class="btn-floating btn-small waves-effect waves-light" @click="reset">
        <i class="material-icons">settings_backup_restore</i>
      </button>
      <p>{{ formattedElapsedTime }}</p>
    </div>
    <div class="col s12 m1">
      <span class="new badge" data-badge-caption="/ 6">{{ successes }}</span>
      <span v-if="mistakes != 0" class="new badge red" :data-badge-caption="errorBadgeCaption">
        {{ mistakes }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Keypad',
  props: {
    successes: Number,
    mistakes: Number,
  },
  data() {
    return {
      elapsedTime: 0,
      timer: undefined,
      errorBadgeCaption: 'error',
      errorPlural: 'errors',
      path: this.$route.path,
    };
  },
  created() {
    if (this.path === '/game') {
      this.errorPlural = 'errors';
    } else if (this.path === '/es/game') {
      this.errorPlural = 'errores';
    }
  },
  watch: {
    mistakes(newValue) {
      this.errorBadgeCaption = newValue === 1 ? 'error' : this.errorPlural;
    },
    successes(newValue) {
      if (newValue === 6) {
        this.stop();
        this.$emit('speak', this.formattedElapsedTime);
      }
    },
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
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
    &.btn-floating.btn-small {
      background-color: $primary-color;
    }
    margin: 0 .5em;
  }
  span.badge {
    margin: .5em auto;
    &.new {
      background-color: $primary-color;
    }
  }
}
</style>
