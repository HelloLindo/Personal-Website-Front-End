<template>
  <header class="nav-top">
    <div class="collapsed-title-wrapper">
      <div class="title-hamburger">
        <svg @click="clickHamburger" aria-hidden="true" class="icon">
          <use xlink:href="#icon-hamburger" />
        </svg>
      </div>
      <div class="title-name">
        <h1 @click="clickTitle">{{ websiteName }}</h1>
      </div>
      <div @click="clickSearch" class="title-icon">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-search" />
        </svg>
      </div>
    </div>
    <div class="title-wrapper">
      <div class="title-name">
        <h1 @click="clickTitle">{{ websiteName }}</h1>
      </div>
      <div @click="clickSearch" class="title-icon">
        <i class="el-icon-search"></i>
      </div>
    </div>
    <div class="nav-bar-wrapper">
      <nav-bar ref="navBarRef"></nav-bar>
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

    data: () => ({
      websiteName: 'Yuling Wu'
    }),

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
      },
      clickHamburger() {
        this.$refs.navBarRef.collapseDrawer()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../assets/css/vars.css');

  .nav-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    margin: 0 auto;
    background-color: #fafafa;
  }

  .collapsed-title-wrapper,
  .title-wrapper {
    .title-name {
      h1 {
        font-weight: 300;
        letter-spacing: 3px;
        color: #8b9c9f;
        margin: 0 auto;
        cursor: pointer;
      }
      display: inline-block;
    }

    .title-icon {
      display: inline-block;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: $small-screen-device) {
    .nav-top {
      width: 100%;
    }
    .title-wrapper {
      display: none;
    }
    .collapsed-title-wrapper {
      .title-hamburger {
        display: inline-block;
        .icon {
          width: 20px;
          height: 20px;
        }
      }
      .title-name {
        h1 {
          font-family: 'Rift-Regular', 'Avenir', Helvetica, Arial, sans-serif;
          font-weight: normal;
          font-size: 20px;
          color: $color-text-primary;
          width: fit-content;
          letter-spacing: 5px;
        }
        width: calc(100% - 60px);
      }

      .title-icon {
        .icon {
          width: 20px;
          height: 20px;
        }
      }
      padding: 20px;
    }
  }

  @media only screen and (min-width: $small-screen-device) and (max-width: $large-screen-device) {
    .nav-top {
      width: 70%;
    }
  }

  @media only screen and (min-width: $large-screen-device) {
    .nav-top {
      width: 1000px;
    }
  }

  /* Larger than small screen device */
  @media only screen and (min-width: $small-screen-device) {
    .collapsed-title-wrapper {
      display: none;
    }
    .title-wrapper {
      display: block;
      .title-name {
        h1 {
          font-family: 'Market-Deco', 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
          font-size: 50px;
          position: relative;
          left: 3%;
          width: fit-content;
        }
        width: 93%;
        margin: 50px 0;
      }

      .title-icon {
        .el-icon-search {
          font-size: 18px;
          font-weight: 800;
        }
        width: 5%;
        position: relative;
        bottom: 5px;
      }
    }
  }
</style>