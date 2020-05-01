<template>
  <div class="modal" :class="{'open': showModal}">
    <div class="modal-content">
      <header class="modal-header">
        <h3>{{ winMessage }}</h3>
        <p>{{`${errorMessage} ${mistakes}`}}</p>
        <p>{{`${timeMessage} ${timer}`}}</p>
      </header>
      <article class="modal-body">
        <a
          class="btn btn-floating waves-effect waves-light"
          @click="$emit('speak', close)">
          <i class="material-icons left">close</i>
        </a>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    showModal: Boolean,
    mistakes: Number,
    timer: String,
  },
  data() {
    return {
      close: false,
      winMessage: '',
      errorMessage: '',
      timeMessage: '',
    };
  },
  mounted() {
    this.changeMessages(window.location.pathname);
  },
  methods: {
    changeMessages(path) {
      if (path === '/game') {
        this.winMessage = 'Good job!!';
        this.errorMessage = 'errors:';
        this.timeMessage = 'time:';
      } else if (path === '/es/game') {
        this.winMessage = '¡Buen trabajo!';
        this.errorMessage = 'errores:';
        this.timeMessage = 'tiempo:';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  align-items: flex-start;
  background-color: $transparent-75;
  display: flex;
  height: 100vh;
  justify-content: center;
  opacity: 0;
  position: fixed;
  transition: visibility 250ms, opacity 250ms;
  width: 100%;
  z-index: -1;
  &.open {
    opacity: 1;
    visibility: visible;
    z-index: 2;
    .modal-content {
      transform: translateY(100px);
      background-color: $gray-100;
      border-radius: 2px;
      box-shadow: 0 8px 16px 0 $transparent-25;
      display: inline-block;
      min-width: 320px;
      max-width: 480px;
      transition: transform 450ms ease;
      width: 100%;
      .modal-body {
        .btn.waves-effect {
          background-color: $primary-color;
        }
      }
      .modal-header {
        padding: 20px;
        position: relative;
        text-align: center;
        h3 {
          color: $text-color;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>>
