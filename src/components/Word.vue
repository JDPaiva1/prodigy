<template>
    <a
      class="collection-item waves-effect waves-purple"
      :class="{'active': activeClass(), 'btn': btnDisabledClass, 'disabled': btnDisabledClass}"
      @click="isActive = true; $emit('speak', wordId)">
      {{wordName}}
    </a>
</template>

<script>
export default {
  name: 'Word',
  props: {
    wordName: String,
    wordId: String,
    btnDisabledClass: Boolean,
    btnActiveClass: String,
  },
  methods: {
    activeClass() {
      let isActive;
      if (this.btnActiveClass === this.wordId) {
        isActive = true;
      } else {
        isActive = false;
      }
      return isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.collection-item.waves-effect {
  color: $primary-color;
  &.active {
    background-color: $primary-color;
    color: #eafaf9;
  }
}
</style>
