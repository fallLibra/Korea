<template>
  <div id="app">
    <!-- <header-top></header-top> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
  // import headerTop from '@/pages/common/header.vue';
  import footerBottom from '@/pages/common/footer.vue';

  export default {
    name: 'App',
    components: {
      // headerTop,
      footerBottom
    },
  }
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
