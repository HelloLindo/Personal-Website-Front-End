import Home from '@/views/display/Home.vue'
import News from '@/views/display/News.vue'
import Moment from '@/views/display/Moment.vue'
import More from '@/views/display/More.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Yuling Wu'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: 'News - Yuling Wu'
    }
  },
  {
    path: '/moment',
    name: 'Moment',
    component: Moment,
    meta: {
      title: 'Moment - Yuling Wu'
    }
  },
  {
    path: '/more',
    name: 'More',
    component: More,
    meta: {
      title: 'More - Yuling Wu'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
