import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Main from '@/components/Main'
import MainDeatil from '@/components/MainDetail'
import UserList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//根路由，默认展示页面
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: Main,
      component: Main,
      children: [
        {
          path: '/',
          name: MainDeatil,
          component: MainDetail,
        },
        {
          path: '/main/user-list',
          name: UserList,
          component: UserList,
        }
      ]
    }
  ]
})
