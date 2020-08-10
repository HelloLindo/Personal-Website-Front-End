<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    props: {
      msg: String
    },

    data() {
      return {
        repoList: []
      }
    },

    mounted() {
      // this.$store
      //   .dispatch('repo/getList')
      //   .then((res) => {
      //     console.log(res)
      //     this.repoList = res
      //   })
      //   .catch((err) => {
      //     if (err.message.indexOf('timeout of') >= 0) {
      //       console.error('Timeout')
      //     } else {
      //       throw err
      //     }
      //   })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: #42b983;
      }
    }
  }
</style>
