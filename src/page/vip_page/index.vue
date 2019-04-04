<template>
  <div class="vip_page">
    <div class="header">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
        <span>成易润通</span>
      </div>
      <div class="vip_login">
        <span>hi~{{userName}}</span>
      </div>
    </div>
    <ul class="resource">
      <li class="resource_title">
        <span><i></i>会员等级列表</span>
      </li>
      <li v-for="(item,index) in resource" :key="index">
        <span class="more_member">{{item.le_name}}</span>
        <div class="register">
          成为{{item.le_name}},
          获取更多资源
        </div>
        <div class="resource_bottom">
          <span>{{item.le_money/100}}元/年</span>
          <span>每天{{item.le_interval}}可以获得<i>{{item.le_number}}</i>个资源</span>
          <mt-button type="primary" size="small" @click.native="buy_vip(item.le_id)">立即购买</mt-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getVip_info} from '@/api/get_home_data'
  import cookie from 'js-cookie'
  export default {
    data() {
      return {
        resource: '',
        userName:'',
      }
    },
    created(){
      this.getData();
      if(cookie.get('userInfo')){
        this.userName=JSON.parse(cookie.get('userInfo')).hy_nicheng
      }
    },
    methods: {
      getData() {
        let vip_info_data = {};
        getVip_info(vip_info_data).then(res => {
          this.resource = res;
        });
      },
      buy_vip(le_id){
        this.$router.push(`/home/pay?le_id=${le_id}`)
      }
    }
  }
</script>

<style scoped lang="scss">
  .vip_page {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: .24rem .24rem .1rem;
      background-color: #f8f8f9;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: .8rem;
          height: .8rem;
          margin-right: .18rem;
        }
        span {
          color: #422774;
          font-size: 1.5em;
          font-weight: 600;
        }
      }
      .vip_login {
        span {
          display: inline-block;
          color: #1b61ff;
          width: 85px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .resource {
      font-size: .8em;
      color: #515a6e;
      .more_member{
        color:#17233d;font-size: 1.2em;
        font-weight: 600;
        border-left: 5px solid;
        padding-left: 5px;
      }
      .resource_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f8f9;
        /*margin-top: 15px;*/
        padding: .25rem .24rem .3rem;
        span {
          color: #b6b6b6;
        }
        span:first-child {
          font-size: 1.3em;
          font-weight: 600;
          color: #17233d;
          i {
            display: inline-block;
            width: .08rem;
            height: .25rem;
            background: #555;
            margin-right: .05rem;
          }
        }
      }
      li {
        background-color: #f8f8f9;
        margin-bottom: 15px;
        padding: .25rem .24rem .3rem;
        .register {
          margin: .2rem 0 .4rem;
        }
        .resource_bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          span:first-child {
            color: #ed4014;
            font-size: 1.5em;
            padding-bottom: .25rem;
          }
          span:nth-child(2) {
            i {
              color: #ed4014;
            }
          }
          button {
            background-color: #2d8cf0;
            box-shadow: none;
            border: none;
            padding: .1rem .15rem;
            border-radius: .05rem;
            color: #fff;
          }
          button:focus {
            border: none;
            outline: none;
          }
        }
      }
    }
  }
</style>
