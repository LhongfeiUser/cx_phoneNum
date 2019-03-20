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
            <router-link to="/share">
              <li>
                <img src="../../assets/images/icon_04.png">
                <span>推荐分享</span>
              </li>
            </router-link>
          </ul>
        </div>
        <mt-loadmore :bottom-method="loadBottomUse"
                     :bottomPullText='bottomText'
                     :bottom-all-loaded="allLoaded"
                     :auto-fill=false
                     ref="loadmore">
          <div class="news_module" v-for="(item,index) in news_list" @click="goDetail(item.id)" :key="index">
            <h3 class="title">{{item.title}}</h3>
            <p>
              {{item.description}}
            </p>
          </div>
        </mt-loadmore>
      </main>
    </div>
</template>

<script>
  import cookie from 'js-cookie';
  import {get_discover} from "../../api/discover";
  export default {
      data(){
        return{
          news_list:[],
          pageNo: 1,
          allLoaded: false,
          bottomText: '上拉加载数据...',
        }
      },
    created(){
      this.get_list(1)
    },
      methods:{
        get_list(pageNo){
          get_discover({page:pageNo}).then(res=>{
            if(res.length===0){
              this.allLoaded = true;// 若数据已全部获取完毕
            }
            this.news_list=this.news_list.concat(res);
          })
        },
        goDetail(i){
          this.$router.push('/discover/detail/'+i)
        },
        loadBottomUse() {
          this.pageNo += 1;
          setTimeout(()=>{
            this.$refs.loadmore.onBottomLoaded();
            this.get_list(this.pageNo)
          },1500);
        },
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
         border-left:5px solid #ed4014;
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
         color:#515a6e;
       }
     }
   }
 }
</style>
