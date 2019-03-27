<template>
    <div class="user">
      <header>
        <div class="head_pic">
          <img :src="head_pic">
          <span>{{userName}}</span>
        </div>
        <div class="vip_icon">
          <i class="icon_img"></i>
          <span>开通</span>
          <i class="red_dot"></i>
        </div>
      </header>
      <main>
        <ul class="nav_module">
          <li>
            <img src="../../assets/images/vip_center.png">
            <span>会员中心</span>
          </li>
          <li>
            <img src="../../assets/images/vip_grade.png">
            <span>会员等级</span>
          </li>
          <li>
            <img src="../../assets/images/vip_resource.png">
            <span>我的资源</span>
          </li>
        </ul>
        <div class="inform_module">
          <mt-cell title="通知" is-link to="/user/inform">
            <img slot="icon" src="../../assets/images/inform_icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="邀请好友" is-link to="/share">
            <img slot="icon" src="../../assets/images/icon_invition.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="完善个人信息" is-link to="/user/perfect_info">
            <img slot="icon" src="../../assets/images/perfect.png" width="24" height="24">
          </mt-cell>
        </div>
        <div class="about_us">
          <mt-cell title="关于" is-link to="/user/about">
            <img slot="icon" src="../../assets/images/icon_about.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="帮助中心" is-link to="/user/help_center">
            <img slot="icon" src="../../assets/images/icon_help.png" width="24" height="24">
          </mt-cell>
        </div>
      </main>
    </div>
</template>

<script>
  import cookie from 'js-cookie'
  export default {
      data(){
          return{
            userName:'',
            head_pic:''
          }
      },
      created(){
        this.userName= JSON.parse(cookie.get('userInfo')).hy_nicheng;
        this.head_pic= JSON.parse(cookie.get('userInfo')).hy_touxiang;
      },
      methods:{
      }
    }
</script>

<style scoped lang="scss">
  .user{
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:.3rem .3rem .4rem;
      background: #fff;
      .head_pic{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:.8em;
        img{
          width:.75rem;
          height:.75rem;
          border:1px solid #000;
          border-radius:50%;
          margin-right:5px;
        }
      }
      .vip_icon{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:.8em;
        .icon_img{
          display: inline-block;
          width:.65rem;
          height:.5rem;
          background:url("../../assets/images/user_vip.png")no-repeat;
          background-size:100% 100%;
        }
        span{
          margin: 0 5px;
        }
        .red_dot{
          display: inline-block;
          width:.15rem;
          height:.15rem;
          border-radius:50%;
          background-color:#e51515;
        }
      }
    }
    main{
      .nav_module{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        padding: .5rem 0 .7rem;
        margin:.15rem 0;
        li{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img{
            width:.65rem;
            height:.45rem;
            margin-bottom:.25rem;
          }
        }
      }
      .about_us{
        margin-top:.15rem;
      }
    }
  }
</style>
