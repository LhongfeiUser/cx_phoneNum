<template>
  <div class="pay">
    <h1>会员支付</h1>
    <div class="price">￥1110</div>
    <div class="payee_explain">
      <span class="payee">收款方</span>
      <div class="payee_content">
        <img src="../../assets/images/logo.png" alt="">
        <span>成易润通</span>
      </div>
    </div>
    <mt-button type="default" size="large" @click="lk_pay">支付</mt-button>
  </div>
</template>

<script>
  import {get_order} from "../../api/get_home_data";

  export default {
    data() {
      return {
        config_data:''
      }
    },
    created() {
     this.pay();
    },
    methods: {
      pay() {
        get_order({level: this.$route.query.le_id}).then(async res => {
          console.log(res);
          this.config_data=res;
          await wx.config(JSON.parse(res.jssdkconfig));
        });
      },
      lk_pay(){
        wx.chooseWXPay({
          timestamp: Number(this.config_data.config.timestamp),
          nonceStr: this.config_data.config.nonceStr,
          package: this.config_data.config.package,
          signType: this.config_data.config.signType,
          paySign: this.config_data.config.paySign, // 支付签名
          success: function (res) {
            history.go(-1);
            // 支付成功后的回调函数
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .pay {
    text-align: center;
    width: 100%;
    h1, .price {
      font-size: 1em;
      color: #000;
    }
    .payee_explain {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #eee;
    }
  }
</style>
