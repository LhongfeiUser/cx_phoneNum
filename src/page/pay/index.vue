<template>
  <div class="pay">
    <h1>会员支付</h1>
    <div class="price">￥{{le_prise}}</div>
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
  import {get_order,isOrder} from "../../api/get_home_data";
  export default {
    data() {
      return {
        config_data:'',
        le_prise:''
      }
    },
    created() {
     this.pay();
      this.le_prise=this.$route.query.prise/100;
    },
    methods: {
      pay() {
        get_order({level: this.$route.query.le_id}).then(async res => {
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
    color: #1c2438;
    font-size: 1.2em;
    background: #f8f8f9;
    padding-top: 20px;
    h1, .price {
      font-size: 1em;
      font-weight: 600;
    }
    .price{
      color: #ed3f14;
      margin-top: 10px;
    }
    .payee_explain {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .4rem 0.2rem;
      font-size: 1em;
      color: #495060;
      margin: 0.4rem 0 .8rem;
      background: #dddee1;
      .payee_content{
        img{
          width:35px;
          height:35px;
        }
        span{
          font-size:.8em;
        }
      }

    }
    /deep/ .mint-button--default{
      color: #fff!important;
      background-color: #19be6b!important;
    }
  }
</style>
