<template>
  <div class="row">
    <div class="col s12 m4">
      <div class="collection">
        <Word
          v-for="veil in veils"
          :wordName="veil.name"
          :wordId="veil.id"
          :key="veil.id"
          :btnDisabledClass="veil.disabledClassIsActive"
          @speak="wordEvent = $event; validateMatch()"/>
      </div>
    </div>
    <div class="col s12 m8">
      <ImageButton
        v-for="veil in veils"
        :key="veil.id"
        class="col s6 l4 image-container"
        :imageURL="veil.imageURL"
        :imageId="veil.id"
        :btnDisabledClass="veil.disabledClassIsActive"
        @speak="imageEvent = $event; validateMatch()"/>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import Word from './Word.vue';
import ImageButton from './ImageButton.vue';

export default {
  name: 'Match',
  data() {
    return {
      veils: {},
      wordEvent: undefined,
      imageEvent: undefined,
      btnDisabledClass: {
        id: '',
        isActive: false,
      },
    };
  },
  components: {
    Word,
    ImageButton,
  },
  mounted() {
    firebase.database().ref('veils').once('value', (snapshot) => {
      this.veils = snapshot.val();
    });
  },
  methods: {
    validateMatch() {
      if (this.wordEvent !== undefined && this.imageEvent !== undefined) {
        if (this.wordEvent === this.imageEvent) {
          console.log('is correct');
          this.defineClass(this.wordEvent);
          this.restoreEvents();
        } else {
          console.log('is wrong');
          this.restoreEvents();
        }
      } else {
        console.log('choose the couple');
      }
    },
    restoreEvents() {
      this.wordEvent = undefined;
      this.imageEvent = undefined;
    },
    defineClass(id) {
      this.veils[id].disabledClassIsActive = true;
    },
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
