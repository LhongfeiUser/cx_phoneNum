<template>
  <div class="app">
    <router-view></router-view>
    <mt-tabbar v-model="active" :fixed="true">
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/images/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="discover">
        <img slot="icon" src="../assets/images/discover.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="user">
        <img slot="icon" src="../assets/images/user.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import Home from '@/page/home/index'
  import Discover from '@/page/discover/index'
  import User from '@/page/user/index'
  export default {
    data(){
      return{
        active:'',
      }
    },
    components:{Home,Discover,User},
    watch: {
      active: function (val, oldVal) {
        if(val==='home')this.$router.push('/home');
        if(val==='discover')this.$router.push('/discover');
        if(val==='user')this.$router.push('/user');
      }
    },
    created(){
      /*window.location.href('https://open.weixin.qq.com/connect/oauth2/authorize?appid='+$appid+'&redirect_uri='.urlencode(this.$reuter)+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect')*/
    }
  }
</script>

<style scoped lang="scss">
.app{
  color:#333;
  padding-bottom:1.2rem;
}
</style>
