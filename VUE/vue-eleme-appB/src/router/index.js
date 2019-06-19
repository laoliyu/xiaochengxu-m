import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import rating from '@/components/rating/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'rating',
      component: rating
    }
  ]
})
