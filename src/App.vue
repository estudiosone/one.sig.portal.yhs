<template>
  <div id="app">
    <component-nav/>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './assets/css/sig-material-outlined.css';
  body {
    margin: 0;
    position: absolute;
    width: 100%;
    height: fit-content;
    #app {
    margin: 0;
    position: absolute;
    width: 100%;
    height: fit-content;
    }
  }
</style>

<script>
import ComponentNav from '@/components/Nav.vue';

export default {
  name: 'Application',
  components: {
    ComponentNav,
  },
};
</script>
