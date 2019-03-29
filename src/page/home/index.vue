<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
        <span>成易润通</span>
      </div>
      <div class="vip_login">
        <span>hi~{{userName}}</span>
      </div>
    </div>
    <main>
      <div class="banner">
        <!---->
        <mt-swipe :show-indicators="false" style="height:180px;">
          <mt-swipe-item v-for="(item,index) in bannerArr" :key="index">
            <img :src="item.banner_tupian" height="280px">
          </mt-swipe-item>
        </mt-swipe>
        <div class="advertising">
          <i></i>
          <marquee behavior="scroll" scrollamount="2" scrolldelay="2" bgcolor="#fafafa">
            <span>{{note}} <!--<i class="arrows"></i>--></span>
          </marquee>
        </div>
        <ul>
          <router-link to="/home/gift_bag">
            <li>
              <img src="../../assets/images/icon_01.png">
              <span>新人礼包</span>
            </li>
          </router-link>
          <router-link to="/discover">
            <li>
              <img src="../../assets/images/icon_02.png">
              <span>热门咨询</span>
            </li>
          </router-link>
          <li @click="getResource">
            <img src="../../assets/images/icon_03.png">
            <span>安全资源</span>
          </li>
          <router-link to="/share">
            <li>
              <img src="../../assets/images/icon_04.png">
              <span>推荐分享</span>
            </li>
          </router-link>
        </ul>
      </div>
      <ul class="resource">
        <li v-for="(item,index) in resource" :key="index">
          <div class="resource_title">
            <span><i></i>{{item.le_name}}资源</span>
            <router-link to="/home/resource">
              <span>更多</span>
            </router-link>
          </div>
          <div class="register">注册{{item.le_name}}</div>
          <div class="resource_bottom">
            <span>{{item.le_money/100}}元/年</span>
            <span>每{{item.le_interval}}天可以获得<i>{{item.le_number}}</i>个资源</span>
            <mt-button type="primary" size="small" @click.native="immediately_buy(item)">立即购买</mt-button>
          </div>
        </li>
      </ul>
      <div class="introduce">
        <h3><i></i>平台介绍</h3>
        <p>
          目前全球分享经济呈快速发展态势，是拉动经济增长的新
          路子，通过分享协作方式搞创业创新，门槛更低、成本更小、
          速度更快。双创是收入分配模式的创新，分享经济—直销的精
          髓重在分享，本平台致力于解决直销人的最大难题，今天直销
          没做好，主要因为人脉少，拥有庞大的人脉资源，才会使你的
          管道收入更加稳固长久。人脉多少决定成与败，人脉优劣决定
          快与慢，每天只需 块钱，海量优质客户资源任你拿。选择成
          易润通，成功路上更轻松！！！
        </p>
      </div>
    </main>
  </div>
</template>
<script>
  import {get_userInfo} from '@/api/getUserInfo'
  import {getVip_info,get_note,get_banner,get_phone} from '@/api/get_home_data'
  import cookie from 'js-cookie'
  export default {
    data() {
      return {
        userName: '',
        resource: [],
        note:'',
        bannerArr:[],
      }
    },
    created(){
      if(cookie.get('userInfo')){
        this.getInitData();
        this.get_userData();
      }else {
        this.initWxchat();
      }
    },
    methods: {
     async initWxchat(){
       await this.$parent.getUser();
        this.getInitData();
        this.get_userData();
      },
      get_userData() {
        let userData = {};
        get_userInfo(userData).then(res => {
          this.userName = res.hy_nicheng;
          cookie.set('userInfo',res);
        });
      },
      getInitData() {
        let vip_info_data = {};
        getVip_info(vip_info_data).then(res => {
          this.resource = res;
        });
        get_note({}).then(res=>{
          this.note=res;
        });
        get_banner({}).then(res=>{
          this.bannerArr=res;
        })
      },
      immediately_buy(item){
         this.$router.push(`/home/pay?le_id=${item.le_id}`)
      },
      getResource(){
        get_phone({}).then(res=>{
          this.$toast(res.msg);
          if(res.code===1){
            this.$router.push('/user/inform')
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
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
       span{
         display: inline-block;
         color:#1b61ff;
         width:85px;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
       }
      }
      }
      main {
        .banner {
          padding: .24rem .24rem .5rem;
          background-color: #f8f8f9;
          img {
            width: 100%;
            height: 100%;
            border-radius: .1rem;
            margin-bottom: .2rem;
          }
          .advertising {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top:15px;
            i {
              display: block;
              width: 25px;
              height: 25px;
              background: url("../../assets/images/trumpent.png") no-repeat;
              background-size: 100% 100%;
              margin: 0 .1rem;
            }
            marquee{
              width:90%;
              display: inline-block;
            }
            span {
              font-size: .8em;
              i {
                display: inline-block;
                width: .17rem;
                height: .18rem;
                background: url("../../assets/images/arrows.png") no-repeat;
                background-size: 100% 100%;
              }
            }
          }
          ul {
            display: flex;
            justify-content: space-around;
            margin-top: .55rem;
            li {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              img {
                width: 50%;
                height: 50%;
              }
              span {
                font-size: .3rem;
              }
            }
          }
        }
        .resource {
          font-size: .8em;
          color: #515a6e;
          li {
            background-color: #f8f8f9;
            margin-top: 15px;
            padding: .25rem .24rem .3rem;
            .resource_title {
              display: flex;
              justify-content: space-between;
              align-items: center;
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
            .register {
              margin: .55rem 0 .4rem;
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
        .introduce {
          padding: .25rem .25rem .45rem;
          h3 {
            font-size: 1.2em;
            font-weight: 600;
            color: #17233d;
            i {
              display: inline-block;
              width: .08rem;
              height: .3rem;
              background: #555;
              margin-right: .05rem;
            }
          }
          p {
            text-align: justify;
            text-indent: 1.8em;
            margin-top: .3rem;
            font-size: .8em;
            color: #515a6e;
            line-height: 1.5em;
          }
        }
      }
    }
</style>
