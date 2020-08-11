<template>
  <div class="nav-bar">
    <div class="nav-menu-wrapper">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="nav-menu"
        mode="horizontal"
      >
        <el-menu-item index="0">Home</el-menu-item>
        <el-menu-item index="1">News</el-menu-item>
        <el-menu-item index="2">Monment</el-menu-item>
        <el-menu-item index="3">More About Me</el-menu-item>
        <el-menu-item index="4">Resume</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    data() {
      return {
        activeIndex: '0'
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
    }
    border-bottom: none;
  }
</style>