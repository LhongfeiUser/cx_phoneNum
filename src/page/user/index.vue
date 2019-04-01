<template>
  <div class="user">
    <header>
      <div class="head_pic">
        <img :src="users.hy_touxiang">
        <span>{{users.hy_nicheng}}</span>
      </div>
      <div class="vip_icon">
        <i class="icon_img"></i>
        <router-link to="/home/resource">
          <span v-if="isMember">开通</span>
          <i v-if="isMember" class="red_dot"></i>
        </router-link>
      </div>
    </header>
    <main>
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
          <mt-badge type="error" v-if="isZhannei">{{users.zhannei}}</mt-badge>
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
  import {get_userInfo} from '@/api/getUserInfo'
  export default {
    data() {
      return {
        users: '',
        isMember: false,
        isZhannei: false,
      }
    },
    mounted() {
      this._getdata()
    },
    methods: {
      _getdata() {
        get_userInfo({}).then(res => {
          res.hy_starttime = this.get_substr(res.hy_starttime);
          res.hy_endtime = this.get_substr(res.hy_endtime);
          if (res.le_name === '普通会员') {
            this.isMember = true;
          }
          if (res.zhannei !== 0) {
            this.isZhannei = true;
          }
          this.users = res;
        });
      },
      get_substr(str) {
        let index = str.lastIndexOf(' ');
        return str.substring(0, index);
      }
    }
  }
</script>

<style scoped lang="scss">
  .user {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .3rem .3rem .4rem;
      background: #fff;
      .head_pic {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
        img {
          width: 1rem;
          height: 1rem;
          border: 1px solid #000;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
      .vip_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8em;
        .red_dot {
          display: inline-block;
          width: .15rem;
          height: .15rem;
          border-radius: 50%;
          background-color: #e51515;
        }
        .icon_img {
          display: inline-block;
          width: .65rem;
          height: .5rem;
          background: url("../../assets/images/user_vip.png") no-repeat;
          background-size: 100% 100%;
        }
        span {
          margin: 0 5px;
        }
      }
    }
    main {
      .vip_class {
        background: #fff;
        margin: 10px 0;
        padding: .2rem .3rem .3rem;
        font-size: 1em;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        line-height: .4rem;
        color: #ff9900;
        strong {
          font-size: 1em;
          font-weight: 600;
          color: #464c5b;
        }
        .vip_top {
          display: flex;
          h2 {
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
        }
      }
      .about_us {
        margin-top: .15rem;
      }
    }
  }
</style>
