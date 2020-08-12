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

    <el-dialog :visible.sync="wechatDialogVisible" title="My Wechat ID" width="25%">
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

    data() {
      return {
        wechatDialogVisible: false,
        icons: {
          twitter: 'https://twitter.com/Hello_Lindo',
          linkedin: 'https://www.linkedin.com/in/lindowu',
          youtube: 'https://www.youtube.com/channel/UCzqPcdtI88P838eq6OzbP4g',
          instagram: 'https://www.instagram.com/lindo_wu',
          wechat: 'lindowu',
          email: 'lindowu@foxmail.com'
        },
        year: 2020
      }
    },
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
  .nav-bottom {
    margin: 100px auto 50px auto;
    height: 70px;
    width: 100%;
    font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  }
  .icon-list {
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
      margin: 3px;
      vertical-align: middle;
    }
    width: 49%;
    display: inline-block;
    text-align: left;
  }
  .copyright {
    p {
      font-size: 13px;
    }
    display: inline-block;
    width: 49%;
    text-align: right;
  }
</style>