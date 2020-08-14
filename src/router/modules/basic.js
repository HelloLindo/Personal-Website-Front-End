import Home from '@/views/display/Home.vue'
import News from '@/views/display/News.vue'
import Monment from '@/views/display/Monment.vue'
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
    path: '/monment',
    name: 'Monment',
    component: Monment,
    meta: {
      title: 'Monment - Yuling Wu'
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
