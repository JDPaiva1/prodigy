<template>
  <div class="row">
    <div class="col s12 m4">
      <div class="collection">
        <a v-for="item in items" :key="item" class="collection-item">
          {{ObjName + item}}
        </a>
      </div>
    </div>
    <div class="col s12 m8">
      <div class="row">
        <div
          v-for="imagesArray in imagesArrays" :key="imagesArray"
          class="col s6 l4 image-container">
          <img src="../assets/logo.png" class="responsive-img hoverable">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Match',
  data() {
    return {
      ObjName: 'Name',
      items: [1, 2, 3, 4, 5, 6],
      imagesArrays: ['1', '2', '3', '4', '5', '6'],
    };
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  padding: 0;
}
@media (max-width: 600px){
  .collection {
    .collection-item {
      display: inline-block;
    }
  }
}
</style>
