import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
