<template>
    <a
      class="collection-item waves-effect waves-teal"
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
