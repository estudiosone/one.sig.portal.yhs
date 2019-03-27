<template lang="pug">
  div.home
    section.hero
      img(src="../assets/hero.jpg")
      .whatsapp
        .icon-whatsapp
        span Escribinos
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Ubuntu');

  .home {
    .hero {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: right;
        z-index: 0;
      }
      .whatsapp {
        z-index: 2;
        position: absolute;
        display: flex;
        height: 96px;
        width: 288px;
        border-radius: 48px;
        background-color: #25d366;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 48px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        span {
          margin-right: 20px;
          font-size: 24px;
          font-family: 'Ubuntu', sans-serif;
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'home',
  components: {
  },
};
</script>
