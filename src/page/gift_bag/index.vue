<template>
    <div class="gift_bag">
      <span>成为我们的新用户，立马领取两个资源</span>
      <img src="../../assets/images/go_info.png" @click="go_info">
    </div>
</template>

<script>
    export default {
       data(){
         return{}
       },
      methods:{
         go_info(){
           this.$router.push('/user/perfect_info');
         }
      }
    }
</script>

<style scoped lang="scss">
  .gift_bag{
    position: relative;
    width:100%;
    min-height:100vh;
    background:url('../../assets/images/gift_bg.png')no-repeat;
    background-size:100% 100%;
    span{
      font-size:1em;
      font-weight: 600;
      text-align: center;
      color:#d64004;
      position: absolute;
      bottom:45vh;
      left:50%;
      width:80%;
      margin-left:-40%;
    }
    img{
      position: absolute;
      bottom:20vh;
      left:50%;
      width:80%;
      margin-left:-40%;
    }
  }
</style>
