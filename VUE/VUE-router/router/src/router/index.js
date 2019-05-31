import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Look from '@/components/Look'
import LookOne from '@/components/LookOne'

import LookTwo from '@/components/LookTwo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Look/:id',
      name: 'Look',//进行路由跳转
      component: Look,
      children:[
        {
          path:'look-one',
          name:'LookOne',
          component:LookOne
        },
        {
          path:'look-two',
          name:'LookTwo',
          component:LookTwo
        },
        

      ]
    },
    {
      path:'/go-back',
      redirect:'/'
    }
  ]
})
