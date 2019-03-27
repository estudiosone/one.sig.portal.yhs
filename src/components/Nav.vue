<template lang="pug">
  div.nav.nav-hover
    div.sig-container
      .logo
        img(src="../assets/logo.png")
      .menu
        router-link.btn.bg-transparent(to="/") Home
        router-link.btn.bg-transparent(to="/peluquerias") Peluquerías
        router-link.btn.bg-transparent(to="/agenda") Agenda
        router-link.btn.bg-transparent(to="/noticias") Noticias
        router-link.btn.bg-transparent(to="/tienda") Tienda
      .actions
        a.icon-shopping-bag
        a.icon-user
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');

.sig-container-nav-base {
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      height: 64px;
}
.sig-container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}
.nav {
  width: 100%;
  height: 88px;
  padding: 12px 0;
  position: absolute;
  transition: 0.25s linear;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10000;
  display: flex;
  justify-content: center;
  .sig-container {
    display: flex;
    position: absolute;
    .logo{
      @extend .sig-container-nav-base;
      justify-content: flex-start;
      img {
        margin: auto 0;
        margin-left: 12px;
        height: 64px;
      }
    }
    .menu {
      @extend .sig-container-nav-base;
      justify-content: center;
      a {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 18px;
        text-align: center;
        margin: auto 6px;
        z-index: 10001;
        text-decoration: none;
        outline-style:none;
        box-shadow: none;
      }
    }
    .actions {
      @extend .sig-container-nav-base;
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
    .sig-container {
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
