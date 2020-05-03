<template>
  <div class="page-footer">
    <div class="container valign-wrapper center-align">
      <div class="row valign-wrapper">
        <div class="col s6 l4">
          <img class="responsive-img" :src="logoBarData.left" alt="" width="200"/>
        </div>
        <div class="col s6 l4">
          <img class="responsive-img" :src="logoBarData.middle" alt="" width="60"/>
        </div>
        <div class="col s6 l4">
          <img class="responsive-img" :src="logoBarData.right" alt="" width="200"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'LogoBar',
  data() {
    return {
      logoBarData: {},
    };
  },
  mounted() {
    firebase.database().ref('logoBar').once('value', (snapshot) => {
      this.logoBarData = snapshot.val();
    });
  },
};
</script>

<style lang='scss' scoped>
div.page-footer {
  background-color: $primary-color;
}
</style>
