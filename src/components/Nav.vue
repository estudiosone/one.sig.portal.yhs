<template lang="pug">
  div.nav.nav-hover
    div.container
      .logo
        img(src="../assets/logo.png")
      .menu
        a Home
        a Peluquerías
        a Promociones
        a Noticias
        a Tienda
      .actions
        a.icon-shopping-bag
        a.icon-user
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');

.container-nav-base {
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      height: 64px;
}
.container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}
.nav {
  width: 100%;
  height: 64px;
  padding: 12px 0;
  position: absolute;
  transition: 0.25s linear;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10000;
  .container {
    display: flex;
    .logo{
      @extend .container-nav-base;
      justify-content: flex-start;
      img {
        margin: auto 0;
        margin-left: 12px;
        height: 64px;
      }
    }
    .menu {
      @extend .container-nav-base; 
      justify-content: center;
      a {      
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 18px;
        text-align: center;
        margin: auto 6px;
      }
    }
    .actions {
      @extend .container-nav-base;
      justify-content: flex-end;
      a {
        font-size: 24px;
      }
      a:last-child {
        margin-right: 12px;
      }
    }
  }
}
.nav:hover {
  background-color: rgba(255, 255, 255, 0.75)
}
@media only screen and (max-device-width : 1025px) {
  .nav {
    height: 128px;
    .container {
      .menu {
        justify-content: space-around;
        top: 76px;
        a {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
