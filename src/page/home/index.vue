<template>
  <div class="home">
    <header>
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
        <span>成易润通</span>
      </div>
      <div class="vip_login">
        <i></i>
        <span>会员登录</span>
      </div>
    </header>
    <main>
      <div class="banner">
        <img src="../../assets/images/banner.jpg" alt="">
        <div class="advertising">
          <i></i>
          <span>6.22注册成易润通会员，成功路上更轻松，查看详情! <i class="arrows"></i></span>
        </div>
        <ul>
          <li>
            <img src="../../assets/images/icon_01.png" alt="">
            <span>注册礼包</span>
          </li>
          <li>
            <img src="../../assets/images/icon_02.png" alt="">
            <span>热门咨询</span>
          </li>
          <li>
            <img src="../../assets/images/icon_03.png" alt="">
            <span>安全资源</span>
          </li>
          <li>
            <img src="../../assets/images/icon_04.png" alt="">
            <span>推荐分享</span>
          </li>
        </ul>
      </div>
      <ul class="resource">
        <li>
          <div class="resource_title">
            <span><i></i>银卡资源</span>
            <span>更多</span>
          </div>
          <div class="register">注册银卡会员</div>
          <div class="resource_bottom">
            <span>365元/年</span>
            <span>每天可以获得<i>1</i>个资源</span>
            <button>立即注册</button>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .home {
    header {
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
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.2rem;
        height: .3rem;
        border-radius: .3rem;
        font-size: .3em;
        color: #fff;
        background-color: #e5322d;
        padding: .1rem .2rem;
        i {
          display: inline-block;
          width: .2rem;
          height: .2rem;
          background: url("../../assets/images/vip.png") no-repeat;
          background-size: 100% 100%;
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
        background-color: #fff;
        margin-top: 15px;
        padding: .25rem .24rem .3rem;
        font-size:.8em;
        color:#000;
        li {
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
              color: #2d3142;
              i {
                display: inline-block;
                width: .08rem;
                height: .25rem;
                background: #212121;
                margin-right: .05rem;
              }
            }
          }
          .register {
            margin:.55rem 0 .4rem;
          }
          .resource_bottom{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            span:first-child{
              color:#fe5730;
              font-size:1.5em;
              padding-bottom:.25rem;
            }
            span:nth-child(2){
              i{
                color:#fe5730;
              }
            }
            button{
              background-color:#1b61ff;
              box-shadow: none;
              border:none;
              padding:.1rem .15rem;
              border-radius:.05rem;
              color:#fff;
            }
            button:focus{
              border:none;
              outline: none;
            }
          }
        }
      }
    }
  }
</style>
