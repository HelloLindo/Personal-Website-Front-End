<template>
  <div class="app">
    <div class="main-content">
      <nav-top></nav-top>
      <div class="pages">
        <router-view></router-view>
      </div>
      <nav-bottom></nav-bottom>
    </div>
  </div>
</template>

<script>
  import NavTop from '@/components/layout/nav-top'
  import NavBottom from '@/components/layout/nav-bottom'

  export default {
    components: {
      NavTop,
      NavBottom
    }
  }
</script>

<style>
  @import './assets/fonts/font.css';
  @import url('./assets/css/vars.css');

  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #474747;
  }

  html,
  body,
  .app {
    background-color: #fafafa;
  }

  @media only screen and (max-width: $small-screen-device) {
    .main-content {
      width: 90%;
      margin: 0 auto;
    }
    .pages {
      margin-top: 100px;
    }
  }

  @media only screen and (min-width: $small-screen-device) and (max-width: $large-screen-device) {
    .main-content {
      width: 70%;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: $large-screen-device) {
    .main-content {
      width: 1000px;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: $small-screen-device) {
    .pages {
      margin-top: 300px;
    }
  }
</style>
