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
      meat:{keepAlive:false},
      component: layout,
      children: [
        {
          path: 'home',
          name: 'home',
          meat:{keepAlive:false},
          component: () => import('@/page/home/index'),
        },
        {
          path: '/home/resource',
          name: 'resource',
          component: () => import('@/page/vip_page/index')
        },
        {
          path: 'discover',
          name: 'discover',
          meat:{keepAlive:true},
          component: () => import('@/page/discover/index'),
        },
        {
          path: '/discover/detail/:id',
          name: 'detail',
          meat:{keepAlive:false},
          component: () => import('@/page/discover_detail/index'),
        },
        {
          path: 'user',
          name: 'user',
          meat:{keepAlive:false},
          component: () => import('@/page/user/index'),
        },
        {
          path: '/user/inform',
          name: 'inform',
          meat:{keepAlive:false},
          component: () => import('@/page/inform/index')
        },
        {
          path: '/user/inform/detail/:id',
          name: 'inform_detail',
          meat:{keepAlive:false},
          component: () => import('@/page/inform_detail/index')
        },
        {
          path: '/user/help_center',
          name: 'help_center',
          meat:{keepAlive:false},
          component: () => import('@/page/help_center/index')
        },
        {
          path: '/user/help_center/detail/:id',
          name: 'help_detail',
          meat:{keepAlive:false},
          component: () => import('@/page/help_detail/index')
        },
        {
          path: '/user/perfect_info',
          name: 'perfect_info',
          meat:{keepAlive:false},
          component: () => import('@/page/perfect_info/index')
        },
        {
          path: '/user/about',
          name: 'about',
          meat:{keepAlive:false},
          component: () => import('@/page/about/index')
        },
      ]
    },
    {
      path: '/home/pay',
      name: 'pay',
      meat:{keepAlive:false},
      component: () => import('@/page/pay/index'),
    },
    {
      path: '/home/gift_bag',
      name: 'gift_bag',
      meat:{keepAlive:false},
      component: () => import('@/page/gift_bag/index')
    },
    {
      path: '/share',
      name: 'share',
      meat:{keepAlive:false},
      component: () => import('@/page/share/index'),
    },
    {path: '*', redirect: '/home', hidden: true},
  ]
})
