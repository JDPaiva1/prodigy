<template>
  <a
    class="waves-effect waves-teal hoverable"
    :class="{'disabled': btnDisabledClass, 'active': activeClass()}"
    @click="$emit('speak', imageId)">
    <img :src="imageURL" class="responsive-img">
    <div v-if="btnDisabledClass" class="text-center">
      <!-- <i class="material-icons medium">done</i> -->
      <h3>{{ imageName }}</h3>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    imageURL: String,
    imageId: String,
    imageName: String,
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
a.waves-effect.waves-teal.hoverable {
  position: relative;
  display: inline-block;
  text-align: center;
  &.disabled {
    pointer-events: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    cursor: default;
    img.responsive-img {
    filter: grayscale(100%);
    }
  }
  &.active {
    background-color: $background-color;
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  .text-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $gray-100;
    font-size: 2em;
  }
}
</style>
