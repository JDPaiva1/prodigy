<template>
  <div class="container">
    <Match :veils="veils" :veilsOrderedList="veilsOrderedList"/>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import Match from '@/components/Match.vue';

export default {
  name: 'Game',
  components: {
    Match,
  },
  data() {
    return {
      veilsOrderedList: {},
      veils: [],
    };
  },
  mounted() {
    firebase.database().ref('veils').once('value', (snapshot) => {
      this.veilsOrderedList = snapshot.val();
      this.veils = this.shuffle(Object.values(this.veilsOrderedList));
    });
  },
  methods: {
    shuffle(sourceArray) {
      for (let i = 0; i < sourceArray.length - 1; i += 1) {
        const j = i + Math.floor(Math.random() * (sourceArray.length - i));
        const temp = sourceArray[j];
        sourceArray[j] = sourceArray[i]; // eslint-disable-line no-param-reassign
        sourceArray[i] = temp; // eslint-disable-line no-param-reassign
      }
      return sourceArray;
    },
  },
};
</script>
