<template>
  <div class="col s12">
    <StopWatch class="col s12 m11" :successes="successes"/>
    <div class="col s12 m1">
      <span class="new badge" data-badge-caption="/ 6">{{ successes }}</span>
      <span v-if="mistakes != 0" class="new badge red" :data-badge-caption="errorBadgeCaption">
        {{ mistakes }}
      </span>
    </div>
  </div>
</template>

<script>
import StopWatch from './StopWatch.vue';

export default {
  name: 'Keypad',
  components: { StopWatch },
  props: {
    successes: Number,
    mistakes: Number,
  },
  data() {
    return {
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
    mistakes(val) {
      this.errorBadgeCaption = val === 1 ? 'error' : this.errorPlural;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  span.badge {
    margin: .5em auto;
  }
}
</style>
