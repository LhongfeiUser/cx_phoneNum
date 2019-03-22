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
        data(){
          return{}
        },
      created(){
          this.share();
      },
      methods:{
          share(){
            wx.config({
              debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: '', // 必填，公众号的唯一标识
              timestamp:'', // 必填，生成签名的时间戳
              nonceStr: '', // 必填，生成签名的随机串
              signature: '',// 必填，签名
              jsApiList: [] // 必填，需要使用的JS接口列表
            });
            wx.trigger(function () {
              console.log(3);
            });
            console.log(2);
            wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
              console.log(1);
              wx.updateTimelineShareData({
                title: 'hahha', // 分享标题
                link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: '', // 分享图标
                success: function () {
                  // 设置成功
                }
              })
            });
          }
      }
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
     bottom:1rem;
     left:5%;
     width:80%;
     line-height: .5rem;
     border-radius:10px;
     background-color:#d92a00;
     color:#fff;
     font-size:.8em;
     text-align: center;
     padding:.1rem .42rem;
   }
 }
</style>
