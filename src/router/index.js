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
          path:'',
          name:'home',
          component: ()=>import('@/page/home/index')
        }
      ]
    },
    {path: '*', redirect: '/home', hidden: true},
  ]
})
