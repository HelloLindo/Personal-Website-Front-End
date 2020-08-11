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
        menuContent: ['Home', 'News', 'Monment', 'More About Me', 'Resume']
      }
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
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
      letter-spacing: 1px;
      border-bottom: none;
      border-radius: 10px;
    }
    border-bottom: none;
  }
</style>