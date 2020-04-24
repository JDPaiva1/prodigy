<template>
  <div class="row">
    <span v-if="mistakes != 0" class="new badge red" :data-badge-caption="errorBadgeCaption">
      {{ mistakes }}
    </span>
    <div class="col s12 m4">
      <div class="collection">
        <Word
          v-for="veil in veils"
          :wordName="veil.name"
          :wordId="veil.id"
          :key="veil.id"
          :btnDisabledClass="veil.disabledClassIsActive"
          :btnActiveClass="btnActiveClassWord"
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
        :btnActiveClass="btnActiveClassImage"
        @speak="imageEvent = $event; validateMatch()"/>
    </div>
    <Modal :showModal="showModal" @speak="showModal = $event"/>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import Word from './Word.vue';
import ImageButton from './ImageButton.vue';
import Modal from './Modal.vue';

export default {
  name: 'Match',
  components: {
    Word,
    ImageButton,
    Modal,
  },
  data() {
    return {
      veils: {},
      wordEvent: undefined,
      imageEvent: undefined,
      btnActiveClassWord: '',
      btnActiveClassImage: '',
      mistakes: 0,
      errorBadgeCaption: 'error',
      successes: 0,
      showModal: false,
    };
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
          this.defineClass(this.wordEvent);
          this.restoreEvents();
          this.successes += 1;
          this.showModal = this.successes === Object.keys(this.veils).length;
        } else {
          this.restoreEvents();
          this.mistakes += 1;
          this.errorBadgeCaption = this.mistakes === 1 ? 'error' : 'errors';
        }
      } else {
        // eslint-disable-next-line
        console.log('choose the couple');
      }
      this.btnActiveClassWord = this.wordEvent;
      this.btnActiveClassImage = this.imageEvent;
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
