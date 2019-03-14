<template>
    <div class="share">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
        <span>成易润通</span>
      </div>
      <img class="share_hand" src="../../assets/images/share_hand.png">
      <img class="share_btn" src="../../assets/images/share_btn.png">
      <img class="share_title" src="../../assets/images/share_title.png">
      <div class="slogan">
        <span>海量优质客户任你拿。</span>
        <span>选择成易润通，成功路上更轻松！</span>
      </div>
      <div class="bottom_content">
        成为我们的会员后，只需要转发给您的朋友，<br>
        只要有人来注册，都可以让您额外领取一个资源哦
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
 .share{
   position: relative;
   width:100%;
   height:100vh;
   background: url("../../assets/images/share.jpg")no-repeat;
   background-size:100% 100%;
   overflow-y: hidden;
   .logo {
     display: flex;
     align-items: center;
     margin-left:10px;
     margin-top:10px;
     img {
       width: .6rem;
       height: .6rem;
       margin-right: .18rem;
     }
     span {
       color: #422774;
       font-size: 1.5em;
       font-weight: 600;
     }
   }
   .share_hand{
     width:2.2rem;
     height:auto;
     position: absolute;
     right:.46rem;
     top:.1rem;
   }
   .share_btn{
     position: absolute;
     width:2.6rem;
     height:auto;
     right:2.66rem;
     top:1.36rem;
   }
   .share_title{
     position: absolute;
     width:6.8rem;
     height:auto;
     top:2.36rem;
     right:.38rem;
   }
   .slogan{
     position: absolute;
     top:7.98rem;
     right:.7rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     color:#ffec02;
     font-size:1.3em;
     span{
       text-align: center;
       margin:5px 0;
     }
   }
   .bottom_content{
     position: absolute;
     left:10%;
     width:80%;
     border-radius:10px;
     background-color:#d92a00;
     color:#fff;
     font-size:.8em;
     text-align: center;
     padding:.1rem .42rem;
   }
 }
</style>
