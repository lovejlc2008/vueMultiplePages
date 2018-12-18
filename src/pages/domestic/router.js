import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/domestic.html',
      component:index
    },
    {
      path: '/index',
      beforeEnter() {
        window.location = "/"
      }
    },
    {
      path: '/world',
      beforeEnter() {
        window.location = "/world.html"
      }
    }
  ]
})
