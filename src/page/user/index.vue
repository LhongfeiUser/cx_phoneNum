<template>
    <div class="user">
      <header>
        <div class="head_pic">
          <img :src="users.hy_touxiang">
          <span>{{users.hy_nicheng}}</span>
        </div>
        <div class="vip_icon">
          <i class="icon_img"></i>
          <span>开通</span>
          <i class="red_dot"></i>
        </div>
      </header>
      <main>
       <!-- <ul class="nav_module">
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
        </ul>-->
        <div class="vip_class">
          <div class="vip_top">
            <h2><i></i><strong>您当前会员等级：</strong></h2>
            <span>{{users.le_name}}</span>
          </div>
          <span><strong>会员说明：</strong>每{{users.le_interval}}天可以免费获取{{users.le_number}}个资源</span>
          <span><strong>会员到期时间：</strong>{{users.hy_starttime}} 到 {{users.hy_endtime}}</span>
        </div>
        <div class="inform_module">
          <mt-cell title="通知" is-link to="/user/inform">
            <img slot="icon" src="../../assets/images/icon__3.png" width="28" height="28">
          </mt-cell>
          <mt-cell title="邀请好友" is-link to="/share">
            <img slot="icon" src="../../assets/images/icon__5.png" width="28" height="28">
          </mt-cell>
          <mt-cell title="完善个人信息" is-link to="/user/perfect_info">
            <img slot="icon" src="../../assets/images/icon__4.png" width="28" height="28">
          </mt-cell>
        </div>
        <div class="about_us">
          <mt-cell title="关于" is-link to="/user/about">
            <img slot="icon" src="../../assets/images/icon__2.png" width="28" height="28">
          </mt-cell>
          <mt-cell title="帮助中心" is-link to="/user/help_center">
            <img slot="icon" src="../../assets/images/icon__1.png" width="28" height="28">
          </mt-cell>
        </div>
      </main>
    </div>
</template>

<script>
  import cookie from 'js-cookie'
  import {get_userInfo} from '@/api/getUserInfo'
  export default {
      data(){
          return{
            users:'',
          }
      },
      mounted(){
        this._getdata()
      },
      methods:{
         _getdata(){
           get_userInfo({}).then(res => {
            this.users = res;
          });
        }
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
        font-size:1em;
        img{
          width:1rem;
          height:1rem;
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
      .vip_class{
        background: #fff;
        margin: 10px 0;
        padding: .2rem .3rem .3rem;
        font-size: .8em;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        line-height: .4rem;
        color: #657180;
        strong{
          font-size:1em;
          font-weight: 600;
          color:#464c5b;
        }
        .vip_top{
          display: flex;
          h2{
            display: flex;
            align-items: center;
            justify-content: space-around;
            i{

            }
          }
        }
      }
      .about_us{
        margin-top:.15rem;
      }
    }
  }
</style>
