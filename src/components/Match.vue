<template>
  <div class="row">
    <Keypad :successes="successes" :mistakes="mistakes"/>
    <div class="col s12 m4">
      <div class="collection">
        <Word
          v-for="veil in veilsOrderedList"
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
        :imageName="veil.name"
        :btnDisabledClass="veil.disabledClassIsActive"
        :btnActiveClass="btnActiveClassImage"
        @speak="imageEvent = $event; validateMatch()"/>
    </div>
    <Modal :showModal="showModal" @speak="showModal = $event"/>
  </div>
</template>

<script>
import Word from './Word.vue';
import ImageButton from './ImageButton.vue';
import Keypad from './Keypad.vue';
import Modal from './Modal.vue';

export default {
  name: 'Match',
  components: {
    Word,
    ImageButton,
    Keypad,
    Modal,
  },
  props: ['veils', 'veilsOrderedList'],
  data() {
    return {
      wordEvent: undefined,
      imageEvent: undefined,
      btnActiveClassWord: '',
      btnActiveClassImage: '',
      successes: 0,
      mistakes: 0,
      showModal: false,
    };
  },
  methods: {
    validateMatch() {
      if (this.wordEvent !== undefined && this.imageEvent !== undefined) {
        if (this.wordEvent === this.imageEvent) {
          this.defineClass(this.wordEvent);
          this.restoreEvents();
          this.successes += 1;
          this.showModal = this.successes === this.veils.length;
        } else {
          this.restoreEvents();
          this.mistakes += 1;
        }
      }
      this.btnActiveClassWord = this.wordEvent;
      this.btnActiveClassImage = this.imageEvent;
    },
    restoreEvents() {
      this.wordEvent = undefined;
      this.imageEvent = undefined;
    },
    defineClass(id) {
      for (let i = 0; i < this.veils.length; i += 1) {
        if (this.veils[i].id === id) {
          this.veils[i].disabledClassIsActive = true;
        }
      }
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
