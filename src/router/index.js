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
          path: '/discover/detail/:id',
          name: 'detail',
          component: ()=>import('@/page/discover_detail/index'),
        },
        {
          path: 'user',
          name: 'user',
          component: ()=>import('@/page/user/index'),
        },
        {
          path:'/user/inform',
          name:'inform',
          component:()=>import('@/page/inform/index')
        },
        {
          path:'/user/inform/detail/:id',
          name:'inform_detail',
          component:()=>import('@/page/inform_detail/index')
        },
        {
          path:'/user/perfect_info',
          name:'perfect_info',
          component:()=>import('@/page/perfect_info/index')
        },
        {
          path:'/user/about',
          name:'about',
          component:()=>import('@/page/about/index')
        },
      ]
    },
    {
      path:'/share',
      name:'share',
      component:()=>import('@/page/share/index')
    },
  ]
})
