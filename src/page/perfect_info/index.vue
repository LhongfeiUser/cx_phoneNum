<template>
  <div class="perfect_info">
    <main>
      <div class="form_data">
        <mt-field label="昵称" placeholder="请输入昵称" v-model="userName"></mt-field>
        <mt-field label="性别" placeholder="请输入性别" v-model="sex"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="userEmail"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" v-model="telPhone" type="tel"></mt-field>
        <div class="verify_pic">
          <div class="verify_label">图片验证码</div>
          <div class="verify_input">
            <input type="text" v-model="param_data" placeholder="请输入验证码">
            <img :src="url" @click="get_pic">
          </div>
        </div>
        <mt-field label="短信验证码" placeholder="请输入收到的验证码" v-model="note_code" type="tel">
          <span v-if="isCode" @click="get_authCode">获取验证码</span>
          <span v-if="!isCode" style="color:#888;">重新获取({{timer}})</span>
        </mt-field>
        <mt-button type="danger" size="large" @click.native="verify_pic">确认提交</mt-button>
      </div>
    </main>
  </div>
</template>

<script>
  import cookie from 'js-cookie'
  import {get_picyzm, amend_info,note_verify} from "../../api/user";

  export default {
    data() {
      return {
        url: process.env.NODE_ENV,
        param_data: '',
        userName: '',
        telPhone: '',
        userEmail: '',
        sex: '',
        isCode: true,
        note_code:'',
        timer: 30,
      }
    },
    created() {
      this.get_pic();
    },
    methods: {
      get_pic() {
        let pic_data = {
          hy_openid: JSON.parse(cookie.get('userInfo')).hy_openid,
          hy_touxiang: JSON.parse(cookie.get('userInfo')).hy_touxiang,
        };
        let c = Math.random();
        this.url = this.url + `/api/index/picyzm?hy_openid=${pic_data.hy_openid}&hy_touxiang=${pic_data.hy_touxiang}&m=${c}`;
      },
      verify_pic() {
        let _info = {
          hy_phone:Number(this.telPhone),
          hy_code:this.note_code,
          hy_sex:'1'
        };
        amend_info(_info).then(res => {
          if(res.code===1){
            this.$toast(res.msg)
          }else {
            this.$toast(res.msg)
          }
        })
      },
      get_authCode() {
        let c = {
          captcha: this.param_data,
        };
        get_picyzm(c).then(res => {
          if (res.code === 1) {
            this.$toast('手机验证码已发送');
            this.isCode = false;
            let _timer = setInterval(() => {
              this.d_timer(_timer);
            }, 1000);
            note_verify({hy_phone:this.telPhone}).then(res=>{
              if(res.code===1){
                this.$toast(res.msg)
              }else {
                this.$toast(res.msg)
              }
            });
          } else {
            this.$toast('验证失败');
            this.get_pic();
          }
        })
      },
      d_timer(_timer) {
        this.timer--;
        if (this.timer === 0) {
          clearInterval(_timer);
          this.timer = 30;
          this.isCode = true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .perfect_info {
    min-height: 100%;
    background-color: #fff;
  }

  main {
    .form_data {
      .verify_pic {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-top: 1px solid #d9d9d9;
        min-height: 48px;
        .verify_label {
          min-width: 105px;
          padding-left: 10px;
        }
        .verify_input {
          display: flex;
          width: 100%;
          justify-content: space-between;
          input {
            border: none;
            font-size: inherit;
            max-width: 153px;
            outline: none;
          }
          img {
            width: 1.5rem;
            height: .8rem;
          }
        }
      }
    }
  }
</style>
