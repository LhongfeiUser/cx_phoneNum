<template>
    <div class="detail">
      <mt-header fixed title="新闻详情">
        <router-link to="/discover" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="header">
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="">
          <span>成易润通</span>
        </div>
        <div class="vip_login">
          <span>hi~亮泽呀</span>
        </div>
      </div>
      <main>
        <div class="nav_banner">
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
        <div class="content">
          <h3 class="title">{{detail_list.title}}</h3>
          <div class="article" v-html="detail_list.content"></div>
        </div>
      </main>
    </div>
</template>

<script>
  import {get_discover_detail} from "../../api/discover";

  export default {
        data(){
          return{
            detail_list:'',
          }
        },
      created(){
        this.discover_detail();
      },
      methods:{
        discover_detail(){
          get_discover_detail({id:this.$route.params.id}).then(res=>{
            this.detail_list=res.data;
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .detail{
    min-height:100vh;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: .24rem .24rem .35rem;
      background-color: #fff;
      margin-top:40px;
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
    main{
      .nav_banner{
        background: #fff;
        ul{
          display: flex;
          justify-content: space-around;
          border-top:1px solid #888;
          padding:.25rem;
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img {
              width: 55%;
              height: 55%;
            }
            span {
              font-size: .3rem;
            }
          }
        }
      }
      .content{
        padding:.5rem .2rem;
        background:#fff;
        h3.title{
          font-size:.9em;
          font-weight: 600;
          color:#17233d;
          margin-bottom:.2rem;
          border-left:5px solid red;
          padding-left:.1rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        .article{
          padding:.4rem;
          text-align: justify;
          font-size:.8em;
          line-height: .4rem;
          /deep/ img{
            max-width:100%;
            height:auto;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
