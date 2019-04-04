<template>
  <div class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
  import axios from 'axios'
  import qs from 'qs'
  import cookie from 'js-cookie'
  export default {
    data(){
      return{
        active:'',
        hasCode:'',
        hasToken:'',
        url:process.env.NODE_ENV,
        openid:'',
      }
    },
    watch: {
      active: function (val, oldVal) {
        if(val==='home')this.$router.push('/home');
        if(val==='discover')this.$router.push('/discover');
        if(val==='user')this.$router.push('/user');
      }
    },
    created(){
      if(this.$route.query.hy_openid){
        this.openid=this.$route.query.hy_openid;
      }
    },
    methods:{
      get_code(){ //获取code
        let originUrl = encodeURIComponent(window.location.href);
        window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc8571de4ef2a3c57&redirect_uri='+originUrl+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      },
     async getUser(){
        let code =this.$route.query.code;
        if(code&&code!==''){
          this.hasCode=code;
         await axios.post(`${this.url}/api/register/actss`,qs.stringify({code:code,hy_pid_openid:this.openid})).then(res=>{
           if(res.data.code===1){
             cookie.set('userInfo',res.data.data);
           }else {
             this.$toast(res.data.msg)
           }
         })
        }else {
          this.get_code();
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.app{
  color:#333;
  padding-bottom:1.2rem;
}
</style>
