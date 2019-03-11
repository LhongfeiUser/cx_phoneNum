<template>
  <div class="app">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="home">
        <Home></Home>
      </mt-tab-container-item>
      <mt-tab-container-item id="discover">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="user">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
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
  export default {
    data(){
      return{
        active:'home',
      }
    },
    components:{Home},
    created(){
      console.log(this.$route);
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
