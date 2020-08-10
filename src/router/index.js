import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks'

import basicRoutes from './modules/basic'

Vue.use(Router)

export const routes = [...basicRoutes]

const routerInstance = new Router({
  routes: routes,
  mode: 'history'
})

const beforeEachKeys = Object.keys(hooks.beforeEach)

if (beforeEachKeys.length > 0) {
  beforeEachKeys.map(hook => {
    routerInstance.beforeEach(hooks.beforeEach[hook])
  })
}

export default routerInstance
