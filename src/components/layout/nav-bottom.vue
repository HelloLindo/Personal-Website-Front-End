<template>
  <footer class="nav-bottom">
    <div class="icon-list">
      <svg
        :key="index"
        @click="svgClick(index)"
        aria-hidden="true"
        class="icon"
        v-for="(value, index) in icons"
      >
        <use :xlink:href="'#icon-' + value" />
      </svg>
    </div>
    <div class="copyright">
      <p>Copyright {{year}}</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'NavBottom',

    data() {
      return {
        icons: ['twitter', 'linkedin', 'instagram', 'wechat', 'email'],
        year: 2020
      }
    },
    mounted() {
      let date = new Date()
      this.year = date.getFullYear()
    },
    methods: {
      svgClick(index) {
        console.log(index)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-bottom {
    margin: 100px auto 50px auto;
    height: 70px;
    width: 100%;
    font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  }
  .icon-list {
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
      margin: 3px;
      vertical-align: middle;
    }
    width: 49%;
    display: inline-block;
    text-align: left;
  }
  .copyright {
    p {
      font-size: 13px;
    }
    display: inline-block;
    width: 49%;
    text-align: right;
  }
</style>