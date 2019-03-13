import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/page/layout'
Vue.use(Router);

export default new Router({
  model:history,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: layout,
      children:[
        {
          path: 'home',
          name: 'home',
          component: ()=>import('@/page/home/index'),
        },
        {
          path: 'discover',
          name: 'discover',
          component: ()=>import('@/page/discover/index'),
        },
        {
          path: 'user',
          name: 'user',
          component: ()=>import('@/page/user/index'),
        },
        {
          path: '/discover/detail/:id',
          name: 'detail',
          component: ()=>import('@/page/discover_detail/index'),
        },
      ]
    },
  ]
})
