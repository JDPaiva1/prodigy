<template>
  <a
    class="waves-effect waves-teal hoverable"
    :class="{'disabled': btnDisabledClass, 'active': activeClass()}"
    @click="$emit('speak', imageId)">
    <img :src="imageURL" class="responsive-img">
  </a>
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    imageURL: String,
    imageId: String,
    btnDisabledClass: Boolean,
    btnActiveClass: String,
  },
  methods: {
    activeClass() {
      let isActive;
      if (this.btnActiveClass === this.imageId) {
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
a.disabled {
  pointer-events: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  cursor: default;
  img.responsive-img {
    filter: grayscale(100%);
  }
}
a.active {
  background-color: #26a69a;
  color: #eafaf9;
}
</style>
