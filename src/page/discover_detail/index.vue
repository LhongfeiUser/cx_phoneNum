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
          <h3 class="title">6.22 注册成易润通会员,成功路上更轻松,查看详情！</h3>
          <div class="article">
            1、自己企业的经验。在长期的营销活动中，每一个企业都积累了一定
            的市场营销经验，这是企业无形的财富。借鉴过去营销活动成功的经验，
            分析当前的营销环境，产生新的营销策划方案;

            2、向竞争对手学习。企业的竞争对手——特别是市场领袖的企业，
            他们掌握着大量的市场信息资料，所进行的活动很值得企业研究。认真
            分析竞争对手的，不仅可以发现竞争对手的弱点，还可以利用他们的经
            验，取他人之长，补自己之短。

            3、创新。企业在产品设计、服务方式、价格、销售、促销等各方面采
            取新措施，使得营销效果更好。

            对于各种营销活动方案的评价是优选的基础。评价一个活动方案优劣，
            一般从以下的几个方面进行比较：

            1、方案的期望收益，即比较各种方案的营销效益目标，如盈利指标有
            销售利润率、成本利润率、利润总额;市场发展目标有市场占有率、开拓
            目标市场层次与范围等;

            2、方案的预算成本，即比较各个方案投入费用的大小，包括固定投资
            和流动费用;
          </div>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "index"
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
        h3.title{
          font-size:.9em;
          font-weight: 600;
          color:#555;
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
        }
      }
    }
  }
</style>
