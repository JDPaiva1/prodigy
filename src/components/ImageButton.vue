<template>
  <a
    class="waves-effect waves-teal hoverable"
    :class="{'disabled': btnDisabledClass}"
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
  },
};
</script>
