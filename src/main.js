// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import './assets/js/rem'
import 'jquery'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import Mint from 'mint-ui';

Vue.use(Mint);
Vue.config.productionTip = false;
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
