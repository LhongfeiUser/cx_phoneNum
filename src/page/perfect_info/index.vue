<template>
    <div class="perfect_info">
      <mt-header fixed title="完善个人信息">
        <router-link to="/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <main>
        <div class="form_data">
          <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
          <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
          <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
          <mt-button type="danger" size="large" @click.native="handleClick">确认提交</mt-button>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        data(){
          return{}
        },
      methods:{
        handleClick(){}

      }
    }
</script>

<style scoped lang="scss">
  .perfect_info{
    min-height:100vh;
    background-color:#fff;
  }
main{
  .form_data{
    margin-top:40px;
  }
}
</style>
