<template>
  <header class="nav-top">
    <div class="title-wrapper">
      <div class="title-name">
        <h1 @click="clickTitle">{{ websiteName }}</h1>
      </div>
      <div @click="clickSearch" class="title-icon">
        <i class="el-icon-search"></i>
      </div>
    </div>
    <div class="nav-bar-wrapper">
      <nav-bar></nav-bar>
    </div>
  </header>
</template>

<script>
  import NavBar from '@/components/layout/nav-bar'

  export default {
    name: 'NavTop',

    components: {
      NavBar
    },

    data() {
      return {
        websiteName: 'Yuling Wu'
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
    },
    methods: {
      clickSearch() {
        this.$message({ showClose: true, message: 'Sorry. The Search function is under developing.' })
      },
      clickTitle() {
        if (this.$route.name != 'Home') {
          this.$router.replace({ name: 'Home' })
        } else {
          this.$router.go(0)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-top {
    margin-bottom: 30px;
  }
  .title-wrapper > .title-name {
    h1 {
      font-family: 'Market-Deco', 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
      font-size: 50px;
      font-weight: 300;
      letter-spacing: 3px;
      color: #8b9c9f;
      position: relative;
      left: 3%;
      width: fit-content;
      margin: 0 auto;
      cursor: pointer;
    }
    display: inline-block;
    width: 93%;
    margin: 50px 0;
  }

  .title-wrapper > .title-icon {
    .el-icon-search {
      font-size: 18px;
      font-weight: 800;
    }
    display: inline-block;
    width: 5%;
    position: relative;
    bottom: 5px;
    cursor: pointer;
  }
</style>