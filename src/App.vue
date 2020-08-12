<template>
  <div class="app">
    <div class="main-content">
      <nav-top></nav-top>
      <router-view></router-view>
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

  .app {
    font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #474747;
  }

  html,
  body,
  .app {
    height: 100%;
    background-color: #fafafa;
  }

  @media only screen and (max-width: 1440px) {
    .main-content {
      width: 70%;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 1441px) {
    .main-content {
      width: 1000px;
      margin: 0 auto;
    }
  }
</style>
