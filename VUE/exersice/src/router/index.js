import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import create from '@/components/create'
import list from '@/components/list'
import time from '@/components/time'

Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/time',
      name: 'time',
      component: time
    }
  ]
})
