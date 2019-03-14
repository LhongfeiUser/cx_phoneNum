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
        <img src="../../assets/images/banner.jpg" alt="">
        <div class="advertising">
          <i></i>
          <span>6.22注册成易润通会员，成功路上更轻松，查看详情! <i class="arrows"></i></span>
        </div>
        <ul>
          <li>
            <img src="../../assets/images/icon_01.png">
            <span>注册礼包</span>
          </li>
          <li>
            <img src="../../assets/images/icon_02.png">
            <span>热门咨询</span>
          </li>
          <li>
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
            <span>更多</span>
          </div>
          <div class="register">注册{{item.le_name}}</div>
          <div class="resource_bottom">
            <span>{{item.le_money}}元/年</span>
            <span>每{{item.le_interval}}天可以获得<i>{{item.le_number}}</i>个资源</span>
            <button>立即购买</button>
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
  import {getVip_info} from '@/api/get_home_data'
  import cookie from 'js-cookie'

  export default {
    data() {
      return {
        userName: '',
        resource: [],
      }
    },
    created() {
      if (cookie.get('userInfo')) {
      } else {
        let userData = {
          hy_openid: '13212312312122331126',
          hy_touxiang: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLMfGkPSB6nMhxJdV6KEkUTibyUNQVIBpZ9FPh4AoHYBhHSZ46G8jCtZVYZ1541d56cLZeMrdVNUyg/132'
        };
        cookie.set('userInfo', userData)
      }
      this.get_userData();
      this.getInitData();
    },
    methods: {
      get_userData() {
        let userData = {
          hy_openid: '13212312312122331126',
          hy_touxiang: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLMfGkPSB6nMhxJdV6KEkUTibyUNQVIBpZ9FPh4AoHYBhHSZ46G8jCtZVYZ1541d56cLZeMrdVNUyg/132'
        };
        get_userInfo(userData).then(res => {
          this.userName = res.hy_nicheng;
        })
      },
      getInitData() {
        let infoData = JSON.parse(cookie.get('userInfo'));
        let vip_info_data = {
          hy_openid: infoData.hy_openid,
          hy_touxiang: infoData.hy_touxiang,
          hy_nicheng: '',
          hy_sex: 1
        };
        getVip_info(vip_info_data).then(res => {
          this.resource = res;
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
      padding: .24rem .24rem .35rem;
      background-color: #fff;
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
          background-color: #fff;
          img {
            width: 100%;
            height: auto;
            border-radius: .1rem;
            margin-bottom: .2rem;
          }
          .advertising {
            i {
              display: inline-block;
              width: .4rem;
              height: .45rem;
              background: url("../../assets/images/trumpent.png") no-repeat;
              background-size: 100% 100%;
              margin: 0 .1rem;
            }
            span {
              font-size: .2em;
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
          color: #000;
          li {
            background-color: #fff;
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
                color: #555;
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
                color: #fe5730;
                font-size: 1.5em;
                padding-bottom: .25rem;
              }
              span:nth-child(2) {
                i {
                  color: #fe5730;
                }
              }
              button {
                background-color: #1b61ff;
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
            color: #555;
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
            color: #2d3142;
            line-height: 1.5em;
          }
        }
      }
    }
</style>
