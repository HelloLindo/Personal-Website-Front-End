<template>
  <footer class="nav-bottom">
    <div class="icon-list">
      <svg
        :key="index"
        @click="svgClick(key, value)"
        aria-hidden="true"
        class="icon"
        v-for="(value, key, index) in icons"
      >
        <use :xlink:href="'#icon-' + key" />
      </svg>
    </div>
    <div class="copyright">
      <p>Copyright {{year}}</p>
    </div>

    <el-dialog :visible.sync="wechatDialogVisible" title="Wechat ID">
      <span>
        <p>{{icons.wechat}}</p>
      </span>
      <span class="dialog-footer" slot="footer">
        <el-button @click="wechatDialogVisible = false" type="info">Confirm</el-button>
      </span>
    </el-dialog>
  </footer>
</template>

<script>
  export default {
    name: 'NavBottom',

    data: () => ({
      wechatDialogVisible: false,
      icons: {
        twitter: 'https://twitter.com/Hello_Lindo',
        linkedin: 'https://www.linkedin.com/in/lindowu',
        youtube: 'https://www.youtube.com/channel/UCzqPcdtI88P838eq6OzbP4g',
        github: 'https://github.com/HelloLindo',
        wechat: 'lindowu',
        email: 'lindowu@foxmail.com'
      },
      year: 2020
    }),
    mounted() {
      let date = new Date()
      this.year = date.getFullYear()
    },
    methods: {
      svgClick(key, value) {
        if (key != 'wechat' && key != 'email') {
          window.location.href = value
        } else if (key === 'wechat') {
          this.wechatDialogVisible = true
        } else if (key === 'email') {
          window.location.href = 'mailto: ' + value
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../assets/css/vars.css');

  .nav-bottom {
    margin: 100px auto 50px auto;
    height: 70px;
    width: 100%;
    font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  }
  .icon-list {
    svg {
      cursor: pointer;
      vertical-align: middle;
    }
    display: inline-block;
  }
  .copyright {
    p {
      font-size: 13px;
    }
    display: inline-block;
  }

  @media only screen and (max-width: $small-screen-device) {
    >>> .el-dialog {
      width: 70%;
    }
    .icon-list {
      svg {
        width: 30px;
        height: 30px;
        margin: 8px;
      }
      width: 100%;
      text-align: center;
    }
    .copyright {
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (min-width: $small-screen-device) {
    >>> .el-dialog {
      width: 30%;
    }
    .icon-list {
      svg {
        width: 25px;
        height: 25px;
        margin: 3px;
      }
      width: 49%;
      text-align: left;
    }
    .copyright {
      width: 49%;
      text-align: right;
    }
  }
</style>