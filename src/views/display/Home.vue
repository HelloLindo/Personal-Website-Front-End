<template>
  <div class="home">
    <div class="intro">
      <div class="profile">
        <el-image :src="profileUrl" fit="cover">
          <div class="image-slot" slot="error">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="text">
        <p :key="index" v-for="(text, index) in introText" v-html="text"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',

    // Composition
    mixins: [],

    // Data
    data() {
      return {
        profileUrl: require('../../assets/img/profile.jpg'),
        introText: [
          "Hi, I'm Yuling. Welcome to my website.",
          "I'm a software engineer based in China specializing in building (and occasionally designing) exceptional services, websites, applications, and everything in between.",
          'I achieved a Bachelor\'s Degree in Computer Science and Technology at <a href="http://csse.szu.edu.cn/cn/index.html" style="text-decoration: none;color: #d15b57;">Shenzhen University</a>, Shenzhen, China. Further, I\'m going to pursue a Master\'s Degree in Software Engineering at <a href="https://www.isri.cmu.edu/" style="text-decoration: none;color: #d15b57;">Carnegie Mellon University</a>, Pittsburgh, US.',
          "Currently, I'm seeking an inspiring, rewarding and challenging job with outstanding, passionate and vigorous people. If you have a job opportunity, please don't hesitate to contact me.",
          'Besides, I\'m also interested in Reinforcement Learning and always eagering to learn more about Machine Learning. Please click "More About Me" to know more about me.'
        ]
      }
    },
    model: {},
    props: {},
    computed: {},
    methods: {},
    watch: {},

    // Lifecycle Hooks
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    activated() {},
    deactivated() {},
    beforeDestroy() {},
    destroyed() {},
    errorCaptured() {}
  }
</script>

<style scoped>
  .intro {
    overflow: hidden;
  }
  .profile {
    >>> .el-image {
      img {
        width: 240px;
        height: 260px;
      }
      width: 220px;
      height: 220px;
    }
    overflow: hidden;
    border-radius: 800px;
    float: left;
    margin-right: 30px;
    margin-top: 20px;
  }
  >>> .el-icon-picture-outline {
    font-size: 25px;
  }
  .text {
    p {
      font-size: 15px;
      text-align: left;
      line-height: 20px;
    }
    float: right;
    width: calc(100vh - 255px);
  }
</style>