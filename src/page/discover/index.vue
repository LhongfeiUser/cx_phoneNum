<template>
    <div class="discover">
      <header>
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="">
          <span>成易润通</span>
        </div>
        <div class="vip_login">
          <span>hi~亮泽呀</span>
        </div>
      </header>
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
        <div class="news_module" v-for="i in 6" @click="goDetail(i)">
          <h3 class="title">6.2{{i}} 注册成易润通会员,成功路上更轻松,查看详情！</h3>
          <p>
            我们还可以考虑到系统的“跨行销售”和“上游销售”。这个要素对于
            消费者行为的各个角度来说都是有效的。营销需要综合考虑各个时间消
            费者行为的其他角度。我们还可以考虑到系统的“跨行销售”和
            消费者行为的各个角度来说都是有效的。营销需要综合考虑各个时间消
            费者行为的其他角度。
          </p>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
      data(){
        return{

        }
      },
      methods:{
        goDetail(i){
          this.$router.push('/discover/detail/'+i)
        }
      }
    }
</script>

<style scoped lang="scss">
 .discover{
   background-color:#fff;
   min-height:100vh;
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
     .news_module{
       background-color:#f6f6f6;
       padding:.4rem .4rem;
       margin-bottom:.15rem;
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
       p{
         font-size:.8em;
         line-height: .4rem;
         text-align: justify;
         display:-webkit-box;
         overflow:hidden;
         text-overflow:ellipsis;
         -webkit-box-orient:vertical;
         -webkit-line-clamp: 3;
         text-indent:.25rem;
       }
     }
   }
 }
</style>
