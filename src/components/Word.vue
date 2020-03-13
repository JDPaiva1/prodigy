<template>
    <a
      class="collection-item waves-effect waves-teal"
      :class="{'active': isActive, 'btn': btnDisabledClass, 'disabled': btnDisabledClass}"
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
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
