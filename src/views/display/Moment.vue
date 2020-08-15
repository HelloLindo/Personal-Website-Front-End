<template>
  <section class="moment">
    <dynamic-list
      :gutter="50"
      :isSmallPagination="true"
      :loading="listLoading"
      :pager.sync="listPager"
      @fetch-list="fetchList"
      type="row"
      v-model="listData"
    >
      <!-- This code below is going to be outdated after vue 3.0.0 -->
      <template slot-scope="{ item, index }">
        <!-- The code below doesn't work, need to be fixed later -->
        <!-- <template v-slot="{ item, index }"> -->
        <el-card class="box-card" shadow="false">
          <div class="moment-title">
            <h1>{{ item.title }}</h1>
          </div>
          <span>{{ item.date }}</span>
          <p v-html="item.content"></p>
          <div class="moment-pictures">
            <el-image
              :key="index"
              :preview-src-list="item.pictures"
              :src="picUrl"
              fit="cover"
              lazy
              v-for="(picUrl, index) in item.pictures.slice(0, 4)"
            ></el-image>
          </div>
          <el-divider></el-divider>
        </el-card>
      </template>
    </dynamic-list>
  </section>
</template>

<script>
  import CustomPagerSlot from '@/components/custom-pager-slot'
  const testData = [
    {
      title: 'THE MYTH OF WELL-ROUNDEDNESS',
      date: 'September 20, 2020',
      content: `Time and time again, I hear this aspiration of “well-roundedness” being perpetuated. Being good at everything surely must get you what you want—those good schools, great internships, and even better jobs that will inevitably propel you into a successful career and thereby successful life. <br \><br \>It’s a myth.<br \><br \>
                              As a high school student applying to college, you need to be strong academically and take the hardest classes. You need to ace your standardized tests. You need to show leadership and sustained involvement in extracurriculars. And you probably need to volunteer a bit on the side to give back to the community, to show that you’re not just a happy robot.
                              As a college student applying to jobs? Well, those great jobs at high-flying banks or consulting firms can be yours, too—provided you have a good GPA, a few summers at big brand companies where you’ve made noteworthy impact, a few gigs on committees of campus clubs, and a healthy social life to make all the contacts you need to even be considered for interviews in the first place. And on and on. Sound about right?`,
      pictures: [
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/250',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/350',
        'https://via.placeholder.com/400'
      ]
    },
    {
      title: "THE 6 MONTH TEST & WHY IT'S POWERFUL",
      date: 'August 19, 2020',
      content:
        '"Our chief want is someone who will inspire us to be what we know we could be." - Ralph Waldo Emerson',
      pictures: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ]
    },
    {
      title: 'THE MYTH OF WELL-ROUNDEDNESS',
      date: 'September 20, 2020',
      content: `Time and time again, I hear this aspiration of “well-roundedness” being perpetuated. Being good at everything surely must get you what you want—those good schools, great internships, and even better jobs that will inevitably propel you into a successful career and thereby successful life. <br \><br \>It’s a myth.<br \><br \>
                              As a high school student applying to college, you need to be strong academically and take the hardest classes. You need to ace your standardized tests. You need to show leadership and sustained involvement in extracurriculars. And you probably need to volunteer a bit on the side to give back to the community, to show that you’re not just a happy robot.
                              As a college student applying to jobs? Well, those great jobs at high-flying banks or consulting firms can be yours, too—provided you have a good GPA, a few summers at big brand companies where you’ve made noteworthy impact, a few gigs on committees of campus clubs, and a healthy social life to make all the contacts you need to even be considered for interviews in the first place. And on and on. Sound about right?`,
      pictures: ['https://via.placeholder.com/200', 'https://via.placeholder.com/150']
    },
    {
      title: "THE 6 MONTH TEST & WHY IT'S POWERFUL",
      date: 'August 19, 2020',
      content:
        '"Our chief want is someone who will inspire us to be what we know we could be." - Ralph Waldo Emerson',
      pictures: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ]
    },
    {
      title: 'THE MYTH OF WELL-ROUNDEDNESS',
      date: 'September 20, 2020',
      content: `Time and time again, I hear this aspiration of “well-roundedness” being perpetuated. Being good at everything surely must get you what you want—those good schools, great internships, and even better jobs that will inevitably propel you into a successful career and thereby successful life. <br \><br \>It’s a myth.<br \><br \>
                              As a high school student applying to college, you need to be strong academically and take the hardest classes. You need to ace your standardized tests. You need to show leadership and sustained involvement in extracurriculars. And you probably need to volunteer a bit on the side to give back to the community, to show that you’re not just a happy robot.
                              As a college student applying to jobs? Well, those great jobs at high-flying banks or consulting firms can be yours, too—provided you have a good GPA, a few summers at big brand companies where you’ve made noteworthy impact, a few gigs on committees of campus clubs, and a healthy social life to make all the contacts you need to even be considered for interviews in the first place. And on and on. Sound about right?`,
      pictures: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150'
      ]
    },
    {
      title: "THE 6 MONTH TEST & WHY IT'S POWERFUL",
      date: 'August 19, 2020',
      content:
        '"Our chief want is someone who will inspire us to be what we know we could be." - Ralph Waldo Emerson',
      pictures: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ]
    },
    {
      title: 'THE MYTH OF WELL-ROUNDEDNESS',
      date: 'September 20, 2020',
      content: `Time and time again, I hear this aspiration of “well-roundedness” being perpetuated. Being good at everything surely must get you what you want—those good schools, great internships, and even better jobs that will inevitably propel you into a successful career and thereby successful life. <br \><br \>It’s a myth.<br \><br \>
                              As a high school student applying to college, you need to be strong academically and take the hardest classes. You need to ace your standardized tests. You need to show leadership and sustained involvement in extracurriculars. And you probably need to volunteer a bit on the side to give back to the community, to show that you’re not just a happy robot.
                              As a college student applying to jobs? Well, those great jobs at high-flying banks or consulting firms can be yours, too—provided you have a good GPA, a few summers at big brand companies where you’ve made noteworthy impact, a few gigs on committees of campus clubs, and a healthy social life to make all the contacts you need to even be considered for interviews in the first place. And on and on. Sound about right?`,
      pictures: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150'
      ]
    },
    {
      title: "THE 6 MONTH TEST & WHY IT'S POWERFUL",
      date: 'August 19, 2020',
      content:
        '"Our chief want is someone who will inspire us to be what we know we could be." - Ralph Waldo Emerson',
      pictures: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ]
    },
    {
      title: 'THE MYTH OF WELL-ROUNDEDNESS',
      date: 'September 20, 2020',
      content: `Time and time again, I hear this aspiration of “well-roundedness” being perpetuated. Being good at everything surely must get you what you want—those good schools, great internships, and even better jobs that will inevitably propel you into a successful career and thereby successful life. <br \><br \>It’s a myth.<br \><br \>
                              As a high school student applying to college, you need to be strong academically and take the hardest classes. You need to ace your standardized tests. You need to show leadership and sustained involvement in extracurriculars. And you probably need to volunteer a bit on the side to give back to the community, to show that you’re not just a happy robot.
                              As a college student applying to jobs? Well, those great jobs at high-flying banks or consulting firms can be yours, too—provided you have a good GPA, a few summers at big brand companies where you’ve made noteworthy impact, a few gigs on committees of campus clubs, and a healthy social life to make all the contacts you need to even be considered for interviews in the first place. And on and on. Sound about right?`,
      pictures: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/150'
      ]
    },
    {
      title: "THE 6 MONTH TEST & WHY IT'S POWERFUL",
      date: 'August 19, 2020',
      content:
        '"Our chief want is someone who will inspire us to be what we know we could be." - Ralph Waldo Emerson',
      pictures: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ]
    }
  ]

  export default {
    name: 'Moment',

    components: { CustomPagerSlot },

    data: () => ({
      listData: [],
      listPager: {
        total: 0,
        currentPage: 1,
        pageSize: 5,
        pageSizes: [5, 10, 20],
        urlKeys: {
          index: 'index',
          size: 'size'
        },
        layout: 'prev, pager, next'
      },
      listLoading: false
    }),

    methods: {
      fetchList(pagerOptions) {
        this.listLoading = true

        setTimeout(() => {
          const pager = pagerOptions || this.listPager
          pager.total = testData.length
          const start = (pager.currentPage - 1) * pager.pageSize
          const end = start + pager.pageSize
          this.listData = testData.slice(start, end)

          this.listLoading = false
        }, 700)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../assets/css/vars.css');

  >>> .el-card {
    border: none;
  }
  .box-card {
    .moment-title {
      font-family: 'Rift-Regular', 'Avenir', Helvetica, Arial, sans-serif;
      h1 {
        margin: 0 auto 20px auto;
        font-size: 40px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 3px;
      }
    }
    span,
    p {
      margin-top: 20px;
      font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
      font-size: 13px;
      line-height: 20px;
      text-align: left;
    }
    span {
      font-size: 11px;
      color: #bcbcbc;
    }
    .moment-pictures {
      >>> .el-image {
        margin: 20px 5px;
        width: 150px;
        height: 150px;
        .el-image-viewer__close {
          color: #fff;
        }
      }
    }
    margin: 0 auto;
  }

  @media only screen and (max-width: $small-screen-device) {
    .box-card {
      width: 100%;
    }
  }

  @media only screen and (min-width: $small-screen-device) {
    .box-card {
      width: 70%;
    }
  }
</style>