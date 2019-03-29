<template>
    <div class="vip_page">
      <div class="header">
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="">
          <span>成易润通</span>
        </div>
        <div class="vip_login">
          <span>hi~亮泽呀</span>
        </div>
      </div>
      <ul class="resource">
        <li>
          <div class="resource_title">
            <span><i></i>资源</span>
          </div>
          <div class="register">注册会员</div>
          <div class="resource_bottom">
            <span>666元/年</span>
            <span>每天可以获得<i>66</i>个资源</span>
            <mt-button type="primary" size="small" @click.native="">立即购买</mt-button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
  .vip_page{
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
  }
</style>
