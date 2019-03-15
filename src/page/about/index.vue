<template>
    <div class="about">
      <mt-header fixed title="关于我们">
        <router-link to="/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <main>
        <div class="about_content">
          <p>
            目前全球分享经济呈快速发展态势，是拉动经济增
            长的新路子，通过分享协作方式搞创业创新，门槛更低、
            成本更小、速度更快。双创是收入分配模式的创新，分
            享经济—直销的精髓重在分享，本平台致力于解决直销
            人的最大难题，今天直销没做好，主要因为人脉少，拥
            有庞大的人脉资源，才会使你的管道收入更加稳固长久。
            人脉多少决定成与败，人脉优劣决定快与慢，每天
            只需  块钱，海量优质客户资源任你拿。选择成易润通，
            成功路上更轻松！！！
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

      }
    }
</script>

<style scoped lang="scss">
  .about{
    background: #fff;
    min-height:100vh;
  }
  main{
    margin-top:40px;
    .about_content{
      padding:.8rem .5rem 0;
      font-size:.8em;
      text-align: justify;
      text-indent: .25rem;
      color:#555;
      line-height: .5rem;
      img{
        max-width:100%;
        height:auto;
        vertical-align: center;
      }
    }
  }
</style>
