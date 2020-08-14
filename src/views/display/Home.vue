<template>
  <section class="home">
    <div class="intro">
      <div class="profile">
        <el-image :src="profileUrl" fit="cover">
          <div class="image-slot" slot="error">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="text">
        <p :key="index" v-for="(text, index) of introText" v-html="text"></p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'home',

    // Composition
    mixins: [],

    // Data
    data: () => ({
      profileUrl: require('../../assets/img/profile_circle.png'),
      introText: [
        "Hi, I'm Yuling. Welcome to my website.🎈",

        `I'm a software engineer based in China specializing in building (and occasionally designing) 
                exceptional services, websites, applications, and everything in between.`,

        `I achieved a Bachelor\'s Degree in Computer Science and Technology at 
                <a href="http://csse.szu.edu.cn/cn/index.html" style="text-decoration: none;color: #d15b57;">Shenzhen University</a>, 
                Shenzhen, China in July, 2020. I used to plan to pursue a Master\'s Degree in Software Engineering at 
                <a href="https://www.isri.cmu.edu/" style="text-decoration: none;color: #d15b57;">Carnegie Mellon University</a>, 
                Pittsburgh, US. However, I have to abort it because of the pandemic COVID-19 and the international political situation.`,

        `Currently, I'm seeking an inspiring, rewarding and challenging job with outstanding, passionate and vigorous people. 
                If you have a job opportunity, please don't hesitate to contact me.`,

        `Besides, I\'m also interested in Reinforcement Learning and always eagering to learn more about Machine Learning. 
                Please click "More About Me" to know more about me.`
      ]
    }),
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
  @import url('../../assets/css/vars.css');

  .intro {
    overflow: hidden;
  }
  .profile {
    overflow: hidden;
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
  }

  @media only screen and (max-width: $small-screen-device) {
    .profile {
      margin-top: 20px;
      >>> .el-image {
        img {
          /* Use vw to keep it square */
          width: 68vw;
          height: 68vw;
        }
      }
    }
    .text {
      margin-top: 30px;
      width: 100%;
    }
  }

  @media only screen and (min-width: $small-screen-device) and (max-width: $large-screen-device) {
    .profile {
      >>> .el-image {
        img {
          /* Use vw to keep it square */
          width: 17vw;
          height: 17vw;
        }
      }
      float: left;
      margin-right: 30px;
      margin-top: 20px;
    }
    .text {
      float: right;
      width: calc(100% - 30%);
    }
  }

  @media only screen and (min-width: $large-screen-device) {
    .profile {
      >>> .el-image {
        img {
          width: 220px;
          height: 220px;
        }
        width: 220px;
        height: 220px;
      }
      float: left;
      margin-right: 30px;
      margin-top: 20px;
    }
    .text {
      float: right;
      width: 720px;
    }
  }
</style>