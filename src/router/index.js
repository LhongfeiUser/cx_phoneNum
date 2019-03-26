import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/page/layout'
Vue.use(Router);

export default new Router({
  mode: 'history',
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
          path:'/user/help_center',
          name:'help_center',
          component:()=>import('@/page/help_center/index')
        },
        {
          path:'/user/help_center/detail/:id',
          name:'help_detail',
          component:()=>import('@/page/help_detail/index')
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
      path:'/home/pay',
      name:'pay',
      component:()=>import('@/page/pay/index')
    },
    {
      path:'/share',
      name:'share',
      component:()=>import('@/page/share/index')
    },
  ]
})
