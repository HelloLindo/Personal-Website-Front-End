<template>
  <section class="news">
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
          <span>{{ item.date }}</span>
          <p>{{ item.content }}</p>
        </el-card>
      </template>
    </dynamic-list>
  </section>
</template>

<script>
  import CustomPagerSlot from '@/components/custom-pager-slot'
  const testData = [
    {
      date: 'September 20, 2020',
      content:
        '"Our chief want is someone who will inspire us to be what we know we could be." - Ralph Waldo Emerson'
    },
    {
      date: 'September 20, 2020',
      content: '"You get in life what you have the courage to ask for." - Nancy D. Solomon'
    },
    {
      date: 'September 20, 2020',
      content:
        "\"My mother said to me, 'If you become a soldier you'll be a general; if you become a monk you'll end up as the pope.' Instead, I became a painter and wound up as Picasso.\" - Pablo Picasso"
    },
    {
      date: 'September 20, 2020',
      content:
        '"If people are not laughing at your dreams, you\'re not dreaming big enough." - Grayson Marshall'
    },
    {
      date: 'September 20, 2020',
      content: '"Think lightly of yourself and deeply of the world." - Miyamoto Musashi'
    },
    {
      date: 'September 20, 2020',
      content: '"You can tell how smart people are by the things they laugh at." - Tina Fey'
    },
    {
      date: 'September 20, 2020',
      content: "I'll be wherever I need to be."
    }
  ]

  export default {
    name: 'News',

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
        }, 500)
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
    span,
    p {
      margin-top: 20px;
      font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
      font-size: 13px;
      line-height: 20px;
    }
    span {
      font-size: 11px;
      color: #bcbcbc;
    }
    height: 230px;
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
