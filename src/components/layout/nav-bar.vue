<template>
  <div class="nav-bar">
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
        activeIndex: '0',
        menuContent: ['Home', 'News', 'Monment', 'More About Me', 'Resume'],
        routerName: ['Home', 'News', 'Monment', 'More']
      }
    },

    mounted() {
      this.activeIndex = this.routerName.indexOf(this.$route.name).toString()
    },

    methods: {
      handleSelect(key, keyPath) {
        if (key != '4' && key != this.activeIndex) {
          this.activeIndex = key
          this.$router.replace({ name: this.routerName[key] })
        } else if (key === '4') {
          window.location.href = 'https://www.wuyuling.net/Yuling_Wu_Resume.pdf'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>