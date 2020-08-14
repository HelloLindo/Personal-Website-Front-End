<template>
  <div class="nav-bar">
    <div class="collapsed-menu-wrapper" v-show="isDrawerOpen">
      <el-drawer
        :modal="false"
        :visible.sync="isDrawerOpen"
        :with-header="false"
        direction="ttb"
        size="auto"
      >
        <el-menu
          :collapse="!isDrawerOpen"
          :collapse-transition="false"
          :default-active="activeIndex"
          @select="handleSelect"
          class="el-menu-vertical"
        >
          <template v-for="(value, index) in menuContent">
            <el-menu-item :index="index.toString()" :key="index">
              <span slot="title">{{value}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-drawer>
    </div>
    <div class="nav-menu-wrapper">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="nav-menu"
        mode="horizontal"
      >
        <el-menu-item
          :index="index.toString()"
          :key="index"
          v-for="(value, index) in menuContent"
        >{{value}}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    data() {
      return {
        isDrawerOpen: false,
        activeIndex: '0',
        menuContent: ['Home', 'News', 'Monment', 'More About Me', 'Resume'],
        routerName: ['Home', 'News', 'Monment', 'More']
      }
    },

    mounted() {
      this.activeIndex = this.routerName.indexOf(this.$route.name).toString()
    },

    watch: {
      $route(to, from) {
        this.activeIndex = this.routerName.indexOf(to.name).toString()
      }
    },

    methods: {
      handleSelect(key, keyPath) {
        if (key != '4' && key != this.activeIndex) {
          this.activeIndex = key
          this.$router.replace({ name: this.routerName[key] })
        } else if (key === '4') {
          window.location.href = 'https://www.wuyuling.net/Yuling_Wu_Resume.pdf'
        }
        this.isDrawerOpen = false
      },
      collapseDrawer() {
        this.isDrawerOpen = this.isDrawerOpen ? false : true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../assets/css/vars.css');

  .nav-menu-wrapper {
    width: fit-content;
    margin: 0 auto;
  }
  >>> .el-menu.el-menu--horizontal {
    .el-menu-item {
      font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
      letter-spacing: 1px;
      border-bottom: none;
      border-radius: 10px;
    }
    border-bottom: none;
  }

  @media only screen and (max-width: $small-screen-device) {
    .nav-menu-wrapper {
      display: none;
    }
    .collapsed-menu-wrapper {
      >>> .el-menu {
        .el-menu-item {
          border-style: solid;
          border-width: 0 0 1px 0;
          border-color: #ededed;
          font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        border-style: solid;
        border-width: 1px 0 0 0;
        border-color: #ededed;
      }
      >>> .el-drawer__wrapper {
        top: 60px;
      }
      >>> .el-drawer {
        box-shadow: 0px 6px 30px -12px #000;
      }
      display: block;
    }
  }

  /* Larger than small screen device */
  @media only screen and (min-width: $small-screen-device) {
    .nav-menu-wrapper {
      display: block;
    }
    .collapsed-menu-wrapper {
      display: none;
    }
  }
</style>