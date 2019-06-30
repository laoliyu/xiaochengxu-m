import Vue from 'vue'
import Router from 'vue-router'
import post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'post',
      component: post
    }
  ]
})
